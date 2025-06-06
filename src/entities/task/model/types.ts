export type TaskPriority = "high" | "medium" | "low";
export type TaskStorePriority = TaskPriority | "all";

export type TaskDTO = {
  title: string;
  description?: string;
  priority: TaskPriority;
};

export type Task = TaskDTO & {
  id: string;
  createdTime: string;
  isCompleted: boolean;
};
