import type { Task, TasksSorting } from "@/entities/task";
import type { TaskPriority } from "@/entities/task";

const priorityRank: Record<TaskPriority, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

export function sortTasks({
  tasks,
  sorting,
  sortBy = "createdTime",
}: {
  tasks: Task[];
  sorting: TasksSorting;
  sortBy?: keyof Omit<Task, "id" | "description">;
}): Task[] {
  const copyTasks = [...tasks];
  const direction = sorting === "ASC" ? 1 : -1;

  const comparator = (a: Task, b: Task): number => {
    switch (sortBy) {
      case "createdTime":
        return (
          (new Date(a.createdTime).getTime() -
            new Date(b.createdTime).getTime()) *
          direction
        );
      case "priority":
        return (
          (priorityRank[a.priority] - priorityRank[b.priority]) * direction
        );
      case "isCompleted":
        return (Number(a.isCompleted) - Number(b.isCompleted)) * direction;
      case "title":
        return a.title.localeCompare(b.title) * direction;
      default:
        return 0;
    }
  };

  return copyTasks.sort(comparator);
}
