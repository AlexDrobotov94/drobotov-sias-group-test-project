import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import { tasksAddTask, tasksEditTask, type Task } from "@/entities/task";
import { ButtonUi } from "@/shared/components/buttons";
import { Input } from "@/shared/components/form/input";
import { Select } from "@/shared/components/form/select";
import { Textarea } from "@/shared/components/form/textarea";
import { useDispatch } from "react-redux";

type TaskFormAddProps = {
  mode: "add";
  onCancel: () => void;
};

type TaskFormEditProps = {
  mode: "edit";
  initialValues: Task;
  onCancel: () => void;
};

type TaskFormProps = TaskFormAddProps | TaskFormEditProps;

const taskSchema = z.object({
  title: z.string().min(1, "Введите заголовок"),
  description: z.string().optional(),
  priority: z.enum(["high", "medium", "low"], {
    required_error: "Выберите приоритет",
  }),
});

type TaskFormValues = z.infer<typeof taskSchema>;

export function TaskForm(props: TaskFormProps) {
  const { mode, onCancel } = props;
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: mode === "edit" ? props.initialValues.title : "",
      description: mode === "edit" ? props.initialValues.description : "",
      priority: mode === "edit" ? props.initialValues.priority || "low" : "low",
    },
  });

  const handleCancel = () => {
    onCancel();
    reset();
  };

  const submitHandler = (data: TaskFormValues) => {
    if (mode === "add") {
      dispatch(tasksAddTask(data));
    }

    if (mode === "edit") {
      const { id } = props.initialValues;
      dispatch(
        tasksEditTask({
          id,
          ...data,
        })
      );
    }
    onCancel();
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <Input placeholder="Введите заголовок" {...register("title")} />
        {errors.title && <Error>{errors.title.message}</Error>}
      </div>

      <div>
        <Textarea
          placeholder="Введите описание"
          rows={4}
          {...register("description")}
        />
      </div>

      <div>
        <Select {...register("priority")}>
          <option value="">-- выбрать --</option>
          <option value="high">Высокий</option>
          <option value="medium">Средний</option>
          <option value="low">Низкий</option>
        </Select>
        {errors.priority && <Error>{errors.priority.message}</Error>}
      </div>

      <ButtonsContainer>
        <ButtonUi type="submit" variant="primary">
          {mode === "add" ? "Добавить" : "Сохранить изменения"}
        </ButtonUi>
        <ButtonUi variant="secondary" onClick={handleCancel}>
          Отменить
        </ButtonUi>
      </ButtonsContainer>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  gap: 1rem;
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
`;
