import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTask, editTask } from "@/entities/task";
import { useDispatch } from "react-redux";
import type { TaskFormProps } from "../model/types";

const taskSchema = z.object({
  title: z
    .string()
    .min(1, "Введите заголовок")
    .max(100, "Заголовок не может быть длиннее 100 символов"),
  description: z
    .string()
    .max(500, "Описание не может быть длиннее 500 символов")
    .optional(),
  priority: z.enum(["high", "medium", "low"], {
    message: "Выберите приоритет",
  }),
});

type TaskFormValues = z.infer<typeof taskSchema>;

export function useTaskForm(props: TaskFormProps) {
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
      priority: mode === "edit" ? props.initialValues.priority : undefined,
    },
  });

  const handleCancel = () => {
    onCancel();
    reset();
  };

  const submitHandler = (data: TaskFormValues) => {
    if (mode === "add") {
      dispatch(addTask(data));
    }

    if (mode === "edit") {
      dispatch(
        editTask({
          id: props.initialValues.id,
          ...data,
        })
      );
    }
    onCancel();
    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    handleCancel,
    submitHandler,
  };
}
