import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import type { TaskDTO } from "@/entities/task/model/types";
import { useDispatch } from "react-redux";
import { tasksAddTask } from "@/entities/task";
import { ButtonUi } from "@/shared/components/buttons";
import { Input } from "@/shared/components/form/input";
import { Select } from "@/shared/components/form/select";
import { Textarea } from "@/shared/components/form/textarea";

const taskSchema = z.object({
  title: z.string().min(1, "Введите заголовок"),
  description: z.string().optional(),
  priority: z.enum(["high", "medium", "low"], {
    required_error: "Выберите приоритет",
  }),
});

type TaskFormValues = z.infer<typeof taskSchema>;

export function AddTaskForm({
  onSubmit,
  onCancel,
}: {
  onSubmit?: (data: TaskDTO) => void;
  onCancel?: () => void;
}) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
  });

  const handleCancel = () => {
    onCancel?.();
    reset();
  };

  const submitHandler = (data: TaskFormValues) => {
    console.log(data);
    onSubmit?.(data);

    dispatch(tasksAddTask(data));

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
          Добавить задачу
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
  /* width: 100%; */
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
