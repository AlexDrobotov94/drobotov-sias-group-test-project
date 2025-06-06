import { AddTaskButton } from "@/features/task-form";
import { SortTasks, TasksFilters } from "@/features/tasks";
import { CardUi } from "@/shared/components/card";
import styled from "styled-components";

export function TasksActionsWidget() {
  return (
    <CardUi>
      <TopContainer>
        <TasksFilters />
        <SortTasks />
      </TopContainer>

      <BottomContainer>
        <AddTaskButton />
      </BottomContainer>
    </CardUi>
  );
}

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
