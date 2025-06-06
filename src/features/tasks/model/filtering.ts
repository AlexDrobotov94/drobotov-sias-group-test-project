import type { Task, TaskStorePriority } from "@/entities/task";

export function filterTasksByPriority(
  tasks: Task[],
  priority: TaskStorePriority
): Task[] {
  if (priority === "all") {
    return tasks;
  }
  return tasks.filter((task) => task.priority === priority);
}
