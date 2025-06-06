import styled from "styled-components";
import type { TaskPriority } from "../model/types";
import { CheckCircle2, Circle, Clock, Edit2, Trash } from "lucide-react";
import { BadgeUi } from "@/shared/components/badge";
import { Typography } from "@/shared/components/typograpy";
import { CardUi } from "@/shared/components/card";

type TaskCardProps = {
  id: string;
  title: string;
  description?: string;
  createdTime: string;
  priority: TaskPriority;
  isCompleted: boolean;

  onCheck: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TaskCard(props: TaskCardProps) {
  const {
    id,
    title,
    priority,
    isCompleted,
    description,
    createdTime,
    onCheck,
    onEdit,
    onDelete,
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
      <Wrapper $priority={priority} $isCompleted={isCompleted}>
        <HeaderContainer>
          <HeaderContainerInfo>
            <CheckboxButton onClick={() => onCheck(id)}>
              {isCompleted ? <CheckCircle2 /> : <Circle />}
            </CheckboxButton>
            <TitleContainer>
              <Title $isCompleted={isCompleted}>{title}</Title>
              {renderBadge()}
            </TitleContainer>
          </HeaderContainerInfo>

          <HeaderContainerActions>
            <ActionButton onClick={() => onEdit(id)} $variant="edit">
              <Edit2 size={16} />
            </ActionButton>
            <ActionButton onClick={() => onDelete(id)} $variant="delete">
              <Trash size={16} />
            </ActionButton>
          </HeaderContainerActions>
        </HeaderContainer>

        {description && <Typography>{description}</Typography>}

        <TimeContainer>
          <span>
            <Clock size={16} />
          </span>
          <span>{createdTime}</span>
        </TimeContainer>
        <IndicatorLine $priority={priority} />
      </Wrapper>
    </CardUi>
  );
}

const HeaderContainerActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Wrapper = styled.article<{
  $priority: TaskPriority;
  $isCompleted: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  opacity: ${({ $isCompleted }) => ($isCompleted ? 0.6 : 1)};
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
  gap: ${({ theme }) => theme.spacing.xs};
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

const CheckboxButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ActionButton = styled.button<{ $variant: "edit" | "delete" }>`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: ${({ theme }) => theme.rounded.md};
  opacity: 0.7;
  transition: all 0.2s ease;

  color: ${({ theme, $variant }) => {
    switch ($variant) {
      case "edit":
        return theme.colors.doneForeground;
      case "delete":
        return theme.colors.errorForeground;
    }
  }};

  background-color: ${({ theme, $variant }) => {
    switch ($variant) {
      case "edit":
        return theme.colors.doneBackground;
      case "delete":
        return theme.colors.errorBackground;
    }
  }};

  &:hover {
    opacity: 1;
  }
`;
