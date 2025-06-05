import { TaskCard, type Task } from "@/entities/task";
import styled from "styled-components";
import { formatDate } from "../model/format-date";

export function TasksList({ tasks }: { tasks: Task[] }) {
  const handleCheck = (id: string) => {
    console.log("check", id);
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
