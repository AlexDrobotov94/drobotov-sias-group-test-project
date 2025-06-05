export type TaskPriority = "high" | "medium" | "low";
export type TaskStorePriority = TaskPriority | "all";

export type Task = {
  id: string;
  title: string;
  createdTime: string;
  priority: TaskPriority;
  isCompleted: boolean;
  description?: string;
};
