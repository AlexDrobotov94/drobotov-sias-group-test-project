import styled from "styled-components";
import type { TaskPriority } from "../model/types";
import { Clock } from "lucide-react";
import { BadgeUi } from "@/shared/components/badge";
import { Typography } from "@/shared/components/typograpy";
import { CardUi } from "@/shared/components/card";

type TaskCardProps = {
  description?: string;
  createdTime: string;
  priority: TaskPriority;
  isCompleted: boolean;
  checkAction: React.ReactNode;
  actions: React.ReactNode;
};

// TODO: плавное появление экшенов. Учесть мобильные устройства
export function TaskCard(props: TaskCardProps) {
  const {
    priority,
    isCompleted,
    description,
    createdTime,
    checkAction,
    actions,
  } = props;

  const renderBadge = () => {
    switch (priority) {
      case "high":
        return <BadgeUi variant="error">Высокий</BadgeUi>;
      case "medium":
        return <BadgeUi variant="warning">Средний</BadgeUi>;
      case "low":
        return <BadgeUi variant="success">Низкий</BadgeUi>;
    }
  };

  return (
    <CardUi>
      <Wrapper $priority={priority}>
        <HeaderContainer>
          <HeaderContainerInfo>
            {checkAction}
            <TitleContainer>
              <Title $isCompleted={isCompleted}>Обновить документацию</Title>
              {renderBadge()}
            </TitleContainer>
          </HeaderContainerInfo>

          <HeaderContainerActions>{actions}</HeaderContainerActions>
        </HeaderContainer>

        {description && <Typography>{description}</Typography>}

        <TimeContainer>
          <span>
            <Clock size={16} />
          </span>
          <span>{createdTime}</span>
        </TimeContainer>
      </Wrapper>
      <IndicatorLine $priority={priority} />
    </CardUi>
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

const Title = styled.h3<{ $isCompleted: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme, $isCompleted }) =>
    $isCompleted ? theme.colors.secondary : theme.colors.foreground};
  text-decoration-line: ${({ $isCompleted }) =>
    $isCompleted ? "line-through" : "none"};
  opacity: ${({ $isCompleted }) => ($isCompleted ? 0.6 : 1)};
`;

const TimeContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
