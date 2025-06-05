export type TaskPriority = "high" | "medium" | "low";

export type Task = {
  id: string;
  createdTime: Date;
  priority: TaskPriority;
  isCompleted: boolean;
  description?: string;
};
