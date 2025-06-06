import styled from "styled-components";
import { Typography } from "@/shared/components/typograpy";
import { Container } from "@/shared/components/container";
import { TasksActionsWidget } from "@/widgets/tasks-actions";
import { TasksTotals } from "@/features/tasks";
import { TasksList } from "@/features/tasks";
import { useDispatch } from "react-redux";
import { tasksAddTask } from "@/entities/task";

export function MainPage() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Root>
        <HeaderContainer>
          <Typography variant="h1" color="primary">
            Task Manager
          </Typography>
          <Typography size="large">Тестовое задание Дроботов</Typography>
        </HeaderContainer>

        <button
          onClick={() => {
            dispatch(
              tasksAddTask({
                title: "Новая задача",
                description: "Описание задачи",
                priority: "high",
              })
            );
          }}
        >
          Add
        </button>

        <TasksTotalsListContainer>
          <TasksTotals />
        </TasksTotalsListContainer>
        <TasksActionsWidget />

        <TasksList />
      </Root>
    </Container>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["3xl"]};
  padding-top: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
`;

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.md};
`;

const TasksTotalsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
`;
