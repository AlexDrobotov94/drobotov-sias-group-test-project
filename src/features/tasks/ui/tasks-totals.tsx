import { TaskTotalCard } from "@/entities/task";
import { useTasksTotals } from "../hooks/use-tasks-totals";

export function TasksTotals() {
  const { total, inProcess, done } = useTasksTotals();

  return (
    <>
      <TaskTotalCard total={total} status="total" />
      <TaskTotalCard total={inProcess} status="inProcess" />
      <TaskTotalCard total={done} status="done" />
    </>
  );
}
