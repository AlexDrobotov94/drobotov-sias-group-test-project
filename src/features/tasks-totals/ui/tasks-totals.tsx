import { TaskTotalCard } from "@/entities/task";
import { getTasksTotals } from "../model/get-tasks-totals";
import type { RootState } from "@/shared/store/store";
import { useSelector } from "react-redux";

// TODO: refactor
export function TasksTotals() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filterPriority = useSelector(
    (state: RootState) => state.tasks.priorityFilter
  );

  const filteredTasks =
    filterPriority === "all"
      ? tasks
      : tasks.filter((task) => task.priority === filterPriority);

  const { total, inProcess, done } = getTasksTotals({ tasks: filteredTasks });

  return (
    <>
      <TaskTotalCard total={total} status="total" />
      <TaskTotalCard total={inProcess} status="inProcess" />
      <TaskTotalCard total={done} status="done" />
    </>
  );
}
