import {
  TaskCard,
  tasksDeleteTask,
  tasksToggleCompleteTask,
} from "@/entities/task";
import styled from "styled-components";
import { formatDate } from "../model/format-date";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/shared/store/store";

// TODO: refactor
export function TasksList() {
  const tasks = useSelector((state: RootState) => {
    const { tasks, priorityFilter } = state.tasks;
    return priorityFilter === "all"
      ? tasks
      : tasks.filter((t) => t.priority === priorityFilter);
  });
  const dispatch = useDispatch();

  const handleCheck = (id: string) => {
    dispatch(tasksToggleCompleteTask({ id }));
  };

  const handleEdit = (id: string) => {
    console.log("edit", id);
  };

  const handleDelete = (id: string) => {
    dispatch(tasksDeleteTask({ id }));
  };

  return (
    <TasksListContainer>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskCard
            id={task.id}
            title={task.title}
            priority={task.priority}
            isCompleted={task.isCompleted}
            description={task.description}
            createdTime={formatDate(task.createdTime)}
            onCheck={handleCheck}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </li>
      ))}
    </TasksListContainer>
  );
}

const TasksListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
