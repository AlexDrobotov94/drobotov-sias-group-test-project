import type { Task } from "@/entities/task";

type TaskFormAddProps = {
  mode: "add";
  onCancel: () => void;
};

type TaskFormEditProps = {
  mode: "edit";
  initialValues: Task;
  onCancel: () => void;
};

export type TaskFormProps = TaskFormAddProps | TaskFormEditProps;
