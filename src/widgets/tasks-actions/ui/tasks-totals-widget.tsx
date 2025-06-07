import { TasksTotals } from "@/features/tasks";
import styled from "styled-components";

export function TasksTotalsWidget() {
  return (
    <TasksTotalsListContainer>
      <TasksTotals />
    </TasksTotalsListContainer>
  );
}

const TasksTotalsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;
