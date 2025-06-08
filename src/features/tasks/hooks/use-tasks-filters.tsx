import {
  setTasksPriorityFilter,
  type TaskStorePriority,
} from "@/entities/task";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/shared/store/hooks";

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
  const priorityFilter = useAppSelector((state) => state.tasks.priorityFilter);
  const dispatch = useDispatch();

  const handleFilterChange = useCallback(
    (filter: TaskStorePriority) => {
      dispatch(setTasksPriorityFilter(filter));
    },
    [dispatch]
  );

  return {
    selected: priorityFilter,
    onChange: handleFilterChange,
    options: FILTER_OPTIONS,
  };
}
