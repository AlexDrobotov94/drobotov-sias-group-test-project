import { tasksSetPriorityFilter } from "@/entities/task";
import { ButtonUi } from "@/shared/components/buttons";
import type { RootState } from "@/shared/store/store";
import { Filter } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// TODO: refactor
export function TasksFilters() {
  const priorityFilter = useSelector(
    (state: RootState) => state.tasks.priorityFilter
  );
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <TitleContainer>
        <Filter size={20} />
        <Title>Фильтр:</Title>
      </TitleContainer>

      <List>
        <li>
          <ButtonUi
            variant={priorityFilter === "all" ? "default" : "secondary"}
            onClick={() => dispatch(tasksSetPriorityFilter("all"))}
          >
            Все
          </ButtonUi>
        </li>
        <li>
          <ButtonUi
            variant={priorityFilter === "high" ? "default" : "secondary"}
            onClick={() => dispatch(tasksSetPriorityFilter("high"))}
          >
            Высокий
          </ButtonUi>
        </li>
        <li>
          <ButtonUi
            variant={priorityFilter === "medium" ? "default" : "secondary"}
            onClick={() => dispatch(tasksSetPriorityFilter("medium"))}
          >
            Средний
          </ButtonUi>
        </li>
        <li>
          <ButtonUi
            variant={priorityFilter === "low" ? "default" : "secondary"}
            onClick={() => dispatch(tasksSetPriorityFilter("low"))}
          >
            Низкий
          </ButtonUi>
        </li>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.base};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;
