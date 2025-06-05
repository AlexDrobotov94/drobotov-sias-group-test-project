import styled from "styled-components";
import { Typography } from "@/shared/components/typograpy";
import { Container } from "@/shared/components/container";
import { TaskCard, TaskTotalCard } from "@/entities/task";
import { CheckCircle2 } from "lucide-react";

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
          <TaskTotalCard total={12} status="total" />
          <TaskTotalCard total={8} status="done" />
          <TaskTotalCard total={3} status="inProcess" />
        </TasksTotalsListContainer>

        <TasksListContainer>
          <TaskCard
            priority="high"
            isCompleted={true}
            description="Разработать компоненты для новой версии продукта"
            createdTime="5 июн., 10:30"
            checkAction={<CheckCircle2 />}
            actions={
              <div>
                <button>upd</button>
                <button>del</button>
              </div>
            }
          />
          <TaskCard
            priority="medium"
            isCompleted={true}
            createdTime="5 июн., 10:30"
            checkAction={<CheckCircle2 />}
            actions={
              <div>
                <button>upd</button>
                <button>del</button>
              </div>
            }
          />
          <TaskCard
            priority="low"
            isCompleted={false}
            description="Разработать компоненты для новой версии продукта"
            createdTime="5 июн., 10:30"
            checkAction={<CheckCircle2 />}
            actions={
              <div>
                <button>upd</button>
                <button>del</button>
              </div>
            }
          />
        </TasksListContainer>
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

const TasksListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
