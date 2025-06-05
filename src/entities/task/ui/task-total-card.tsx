import { Card } from "@/shared/components/card";
import styled from "styled-components";
import { CheckCircle2, Circle, Clock } from "lucide-react";

type TaskTotalStatus = "total" | "inProcess" | "done";

type TasdkTotalCardProps = {
  status: TaskTotalStatus;
  total: number;
};

export function TaskTotalCard(props: TasdkTotalCardProps) {
  const { status, total } = props;

  const renderStatus = () => {
    switch (status) {
      case "total":
        return "Всего задач";
      case "inProcess":
        return "В процессе";
      case "done":
        return "Выполнено";
    }
  };

  const renderIcon = () => {
    switch (status) {
      case "total":
        return <Circle />;
      case "inProcess":
        return <CheckCircle2 />;
      case "done":
        return <Clock />;
    }
  };

  return (
    <Card>
      <Wrapper>
        <InfoContainer>
          <Status>{renderStatus()}</Status>
          <Total $variant={status}>{total}</Total>
        </InfoContainer>

        <IconContainer $variant={status}>{renderIcon()}</IconContainer>
      </Wrapper>
    </Card>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Status = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.secondary};
`;

const Total = styled.div<{ $variant: TaskTotalStatus }>`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 700;
  color: ${({ theme, $variant }) => {
    switch ($variant) {
      case "total":
        return theme.colors.foreground;
      case "inProcess":
        return theme.colors.warningForeground;
      case "done":
        return theme.colors.successForeground;
    }
  }};
`;

const IconContainer = styled.div<{ $variant: TaskTotalStatus }>`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.rounded.base};
  color: ${({ theme, $variant }) => {
    switch ($variant) {
      case "total":
        return theme.colors.doneForeground;
      case "inProcess":
        return theme.colors.warningForeground;
      case "done":
        return theme.colors.successForeground;
    }
  }};
  background-color: ${({ theme, $variant }) => {
    switch ($variant) {
      case "total":
        return theme.colors.doneBackground;
      case "inProcess":
        return theme.colors.warningBackground;
      case "done":
        return theme.colors.successBackground;
    }
  }};
`;
