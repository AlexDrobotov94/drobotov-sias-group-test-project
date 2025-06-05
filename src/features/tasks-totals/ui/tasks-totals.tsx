import { TaskTotalCard } from "@/entities/task";
import { getTasksTotals } from "../model/get-tasks-totals";
import type { RootState } from "@/shared/store/store";
import { useSelector } from "react-redux";

export function TasksTotals() {
  const tasks = useSelector((state: RootState) => state.tasks);
  const { total, inProcess, done } = getTasksTotals({ tasks });

  return (
    <>
      <TaskTotalCard total={total} status="total" />
      <TaskTotalCard total={inProcess} status="inProcess" />
      <TaskTotalCard total={done} status="done" />
    </>
  );
}
