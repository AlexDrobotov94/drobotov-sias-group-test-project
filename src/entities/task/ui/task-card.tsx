import styled from "styled-components";
import type { TaskPriority } from "../model/types";
import { Clock } from "lucide-react";
import { Badge } from "@/shared/components/badge";
import { Typography } from "@/shared/components/typograpy";
import { Card } from "@/shared/components/card";

type TaskCardProps = {
  description?: string;
  createdTime: string;
  priority: TaskPriority;
  isDone: boolean;
  checkAction: React.ReactNode;
  actions: React.ReactNode;
};

// TODO: плавное появление экшенов. Учесть мобильные устройства
export function TaskCard(props: TaskCardProps) {
  const { priority, isDone, description, createdTime, checkAction, actions } =
    props;

  const renderBadge = () => {
    switch (priority) {
      case "high":
        return <Badge variant="error">Высокий</Badge>;
      case "medium":
        return <Badge variant="warning">Средний</Badge>;
      case "low":
        return <Badge variant="success">Низкий</Badge>;
    }
  };

  return (
    <Card>
      <Wrapper $priority={priority}>
        <HeaderContainer>
          <HeaderContainerInfo>
            {checkAction}
            <TitleContainer>
              <Title $isDone={isDone}>Обновить документацию</Title>
              {renderBadge()}
            </TitleContainer>
          </HeaderContainerInfo>

          <HeaderContainerActions>{actions}</HeaderContainerActions>
        </HeaderContainer>

        {description && <Typography>{description}</Typography>}

        <TimeContainer>
          <span>
            <Clock style={{ width: "1rem", height: "1rem" }} />
          </span>
          <span>{createdTime}</span>
        </TimeContainer>
      </Wrapper>
      <IndicatorLine $priority={priority} />
    </Card>
  );
}

const HeaderContainerActions = styled.div`
  /* opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.2s ease, visibility 0.2s ease; */
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Wrapper = styled.article<{ $priority: TaskPriority }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  /* &:hover ${HeaderContainerActions} {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  } */
`;

const IndicatorLine = styled.div<{ $priority: TaskPriority }>`
  position: absolute;
  opacity: 0.6;
  top: 0;
  left: 0;
  height: 0.25rem;
  width: 100%;
  background-color: ${({ theme, $priority }) => {
    switch ($priority) {
      case "high":
        return theme.colors.errorForeground;
      case "medium":
        return theme.colors.warningForeground;
      case "low":
        return theme.colors.successForeground;
    }
  }};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const HeaderContainerInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.base};
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Title = styled.h3<{ $isDone: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme, $isDone }) =>
    $isDone ? theme.colors.secondary : theme.colors.foreground};
  text-decoration-line: ${({ $isDone }) => ($isDone ? "line-through" : "none")};
`;

const TimeContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
