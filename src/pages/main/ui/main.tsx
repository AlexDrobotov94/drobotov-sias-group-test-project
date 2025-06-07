import styled from "styled-components";
import { Typography } from "@/shared/components/typograpy";
import { Container } from "@/shared/components/container";
import {
  TasksActionsWidget,
  TasksListWidget,
  TasksTotalsWidget,
} from "@/widgets/tasks-actions";
import { CronBadge } from "@/features/tasks-cron";

export function MainPage() {
  return (
    <Container>
      <Root>
        <HeaderContainer>
          <Title variant="h1" color="primary">
            Task Manager
          </Title>
          <Typography size="large">Тестовое задание Дроботов</Typography>
          <Typography size="large">Test deploy update</Typography>
        </HeaderContainer>

        <TasksTotalsWidget />

        <TasksActionsWidget />

        <TasksListWidget />

        <CronBadge />
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

const Title = styled(Typography)`
  background-image: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;
