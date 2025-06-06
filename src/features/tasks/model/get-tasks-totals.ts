import { type Task } from "@/entities/task";

// TODO: типизировать возвращаемое значение
export function getTasksTotals({ tasks }: { tasks: Task[] }): {
  total: number;
  inProcess: number;
  done: number;
} {
  return {
    total: tasks.length,
    inProcess: tasks.filter((task) => !task.isCompleted).length,
    done: tasks.filter((task) => task.isCompleted).length,
  };
}
