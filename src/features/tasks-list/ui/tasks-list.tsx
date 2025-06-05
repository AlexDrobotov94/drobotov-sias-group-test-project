import { TaskCard, taskToggleComplete } from "@/entities/task";
import styled from "styled-components";
import { formatDate } from "../model/format-date";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/shared/store/store";

export function TasksList() {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const handleCheck = (id: string) => {
    console.log("check", id);
    dispatch(taskToggleComplete(id));
  };

  const handleEdit = (id: string) => {
    console.log("edit", id);
  };

  const handleDelete = (id: string) => {
    console.log("delete", id);
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
