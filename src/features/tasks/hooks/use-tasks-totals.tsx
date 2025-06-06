import { getTasksTotals } from "../model/get-tasks-totals";
import type { RootState } from "@/shared/store/store";
import { useSelector } from "react-redux";
import { filterTasksByPriority } from "../model/filtering";

export function useTasksTotals() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filterPriority = useSelector(
    (state: RootState) => state.tasks.priorityFilter
  );

  const filteredTasks = filterTasksByPriority(tasks, filterPriority);
  const { total, inProcess, done } = getTasksTotals({ tasks: filteredTasks });

  return { total, inProcess, done };
}
