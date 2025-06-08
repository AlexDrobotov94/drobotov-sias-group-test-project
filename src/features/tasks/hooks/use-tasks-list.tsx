import { deleteTask, toggleCompleteTask } from "@/entities/task";

import { filterTasksByPriority } from "../model/filtering";
import { sortTasks } from "../model/sorting";
import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";

export function useTasksList({ editTask }: { editTask: (id: string) => void }) {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const priorityFilter = useAppSelector((state) => state.tasks.priorityFilter);
  const sorting = useAppSelector((state) => state.tasks.sorting);

  const dispatch = useAppDispatch();

  const tasksReady = useMemo(() => {
    const filteredTasks = filterTasksByPriority(tasks, priorityFilter);
    return sortTasks({ tasks: filteredTasks, sorting });
  }, [tasks, priorityFilter, sorting]);

  const handleCheck = (id: string) => dispatch(toggleCompleteTask({ id }));
  const handleEdit = (id: string) => editTask(id);
  const handleDelete = (id: string) => dispatch(deleteTask({ id }));

  return {
    tasks: tasksReady,
    handleCheck,
    handleEdit,
    handleDelete,
  };
}
