import { AddTaskButton } from "@/features/task-form";
import { SortTasks, TasksFilters } from "@/features/tasks";
import { CardUi } from "@/shared/components/card";
import styled from "styled-components";

export function TasksActionsWidget() {
  return (
    <CardUi>
      <Wrapper>
        <LeftContainer>
          <TasksFilters />
        </LeftContainer>

        <RightContainer>
          <SortTasks />
          <AddTaskButton />
        </RightContainer>
      </Wrapper>
    </CardUi>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 80%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  flex: 1 1 auto;
`;
