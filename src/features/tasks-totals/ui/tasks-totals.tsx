import { TaskTotalCard, type Task } from "@/entities/task";
import { getTasksTotals } from "../model/get-tasks-totals";

export function TasksTotals({ tasks }: { tasks: Task[] }) {
  const { total, inProcess, done } = getTasksTotals({ tasks });

  return (
    <>
      <TaskTotalCard total={total} status="total" />
      <TaskTotalCard total={inProcess} status="inProcess" />
      <TaskTotalCard total={done} status="done" />
    </>
  );
}
