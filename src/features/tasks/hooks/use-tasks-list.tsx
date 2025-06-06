import { tasksDeleteTask, tasksToggleCompleteTask } from "@/entities/task";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/shared/store/store";
import { filterTasksByPriority } from "../model/filtering";
import { sortTasks } from "../model/sorting";
import { useMemo } from "react";

export function useTasksList({ editTask }: { editTask: (id: string) => void }) {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const priorityFilter = useSelector(
    (state: RootState) => state.tasks.priorityFilter
  );
  const sorting = useSelector((state: RootState) => state.tasks.sorting);

  const dispatch = useDispatch();

  const tasksReady = useMemo(() => {
    const filteredTasks = filterTasksByPriority(tasks, priorityFilter);

    return sortTasks(filteredTasks, sorting);
  }, [tasks, priorityFilter, sorting]);

  const handleCheck = (id: string) => dispatch(tasksToggleCompleteTask({ id }));
  const handleEdit = (id: string) => editTask(id);
  const handleDelete = (id: string) => dispatch(tasksDeleteTask({ id }));

  return {
    tasks: tasksReady,
    handleCheck,
    handleEdit,
    handleDelete,
  };
}
