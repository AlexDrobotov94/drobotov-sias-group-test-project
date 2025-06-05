import { ButtonUi } from "@/shared/components/buttons";
import { Filter } from "lucide-react";
import styled from "styled-components";

export function TasksFilters() {
  return (
    <Wrapper>
      <TitleContainer>
        <Filter size={20} />
        <Title>Фильтр:</Title>
      </TitleContainer>

      <List>
        <li>
          <ButtonUi>Все</ButtonUi>
        </li>
        <li>
          <ButtonUi variant="secondary">Высокий</ButtonUi>
        </li>
        <li>
          <ButtonUi variant="secondary">Средний</ButtonUi>
        </li>
        <li>
          <ButtonUi variant="secondary">Низкий</ButtonUi>
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
