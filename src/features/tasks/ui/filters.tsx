import styled from "styled-components";
import { useTasksFilters } from "../hooks/use-tasks-filters";
import { Filter } from "lucide-react";
import { ButtonUi } from "@/shared/components/buttons";

export function TasksFilters() {
  const { options, selected, onChange } = useTasksFilters();

  return (
    <Wrapper>
      <TitleContainer>
        <Filter size={20} />
        <Title>Фильтр:</Title>
      </TitleContainer>

      <List>
        {options.map(({ value, label }) => (
          <li key={value}>
            <ButtonUi
              variant={selected === value ? "default" : "secondary"}
              onClick={() => onChange(value)}
            >
              {label}
            </ButtonUi>
          </li>
        ))}
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
