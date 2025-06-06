import { TaskCard } from "@/entities/task";
import styled from "styled-components";

import { formatDate } from "../model/format-date";
import { useTasksList } from "../hooks/use-tasks-list";

export function TasksList({ editTask }: { editTask: (id: string) => void }) {
  const { tasks, handleCheck, handleEdit, handleDelete } = useTasksList({
    editTask,
  });

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
