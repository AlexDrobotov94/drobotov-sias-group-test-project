import styled from "styled-components";
import { Typography } from "@/shared/components/typograpy";
import { Container } from "@/shared/components/container";
import { type Task } from "@/entities/task";
import { TasksActionsWidget } from "@/widgets/tasks-actions";
import { TasksTotals } from "@/features/tasks-totals";
import { TasksList } from "@/features/tasks-list";

const MOCK_TASKS: Task[] = [
  {
    id: "1",
    title: "Разработать компоненты для новой версии продукта",
    createdTime: new Date(),
    priority: "high",
    isCompleted: false,
    description: "Разработать компоненты для новой версии продукта",
  },
  {
    id: "2",
    title: "Разработать компоненты для новой версии продукта",
    createdTime: new Date(),
    priority: "medium",
    isCompleted: false,
    description: "Разработать компоненты для новой версии продукта",
  },
  {
    id: "3",
    title: "Разработать компоненты для новой версии продукта",
    createdTime: new Date(),
    priority: "low",
    isCompleted: false,
    description: "Разработать компоненты для новой версии продукта",
  },
];

export function MainPage() {
  return (
    <Container>
      <Root>
        <HeaderContainer>
          <Typography variant="h1" color="primary">
            Task Manager
          </Typography>
          <Typography size="large">Тестовое задание Дроботов</Typography>
        </HeaderContainer>

        <TasksTotalsListContainer>
          <TasksTotals tasks={MOCK_TASKS} />
        </TasksTotalsListContainer>

        <TasksActionsWidget />

        <TasksList tasks={MOCK_TASKS} />
      </Root>
    </Container>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["3xl"]};
`;

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  gap: ${({ theme }) => theme.spacing.md};
`;

const TasksTotalsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
`;
