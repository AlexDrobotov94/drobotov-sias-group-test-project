import { getTasksTotals } from "../model/get-tasks-totals";

import { filterTasksByPriority } from "../model/filtering";
import { useAppSelector } from "@/shared/store/hooks";

export function useTasksTotals() {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const filterPriority = useAppSelector((state) => state.tasks.priorityFilter);

  const filteredTasks = filterTasksByPriority(tasks, filterPriority);
  const { total, inProcess, done } = getTasksTotals({ tasks: filteredTasks });

  return { total, inProcess, done };
}
