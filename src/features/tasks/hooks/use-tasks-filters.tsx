import {
  tasksSetPriorityFilter,
  type TaskStorePriority,
} from "@/entities/task";
import type { RootState } from "@/shared/store/store";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

type FilterOption = {
  value: TaskStorePriority;
  label: string;
};

const FILTER_OPTIONS: FilterOption[] = [
  { value: "all", label: "Все" },
  { value: "high", label: "Высокий" },
  { value: "medium", label: "Средний" },
  { value: "low", label: "Низкий" },
];

export function useTasksFilters() {
  const priorityFilter = useSelector(
    (state: RootState) => state.tasks.priorityFilter
  );
  const dispatch = useDispatch();

  const handleFilterChange = useCallback(
    (filter: TaskStorePriority) => {
      dispatch(tasksSetPriorityFilter(filter));
    },
    [dispatch]
  );

  return {
    selected: priorityFilter,
    onChange: handleFilterChange,
    options: FILTER_OPTIONS,
  };
}
