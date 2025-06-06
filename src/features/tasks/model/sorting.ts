import type { Task, TasksSorting } from "@/entities/task";

export function sortTasks(tasks: Task[], sorting: TasksSorting): Task[] {
  const copyTasks = [...tasks];

  if (sorting === "ASC") {
    return copyTasks.sort(
      (a, b) =>
        new Date(a.createdTime).getTime() - new Date(b.createdTime).getTime()
    );
  }

  return copyTasks.sort(
    (a, b) =>
      new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
  );
}
