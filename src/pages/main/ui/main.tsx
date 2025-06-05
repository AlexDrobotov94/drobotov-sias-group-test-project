import styled from "styled-components";
import { Container } from "../../../shared/components/container";
import { Typography } from "../../../shared/components/typograpy";

// TODO: добавить алиасы
export function MainPage() {
  return (
    <Container>
      <HeaderContainer>
        <Typography variant="h1" color="primary">
          Task Manager
        </Typography>
        <Typography size="large">Тестовое задание Дроботов</Typography>
      </HeaderContainer>
    </Container>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  gap: ${({ theme }) => theme.spacing.md};
`;
