import { BadgeUi } from "@/shared/components/badge";
import { hexToRgba } from "@/shared/utils/hex-to-rgba";
import styled, { keyframes } from "styled-components";
import { useTaskAutoGenerator } from "../hooks/use-tasks-autogenerator";
import { useEffect } from "react";

export function CronBadge() {
  const { start, stop } = useTaskAutoGenerator(true);

  useEffect(() => {
    start();

    return () => {
      stop();
    };
  }, [start, stop]);

  return (
    <Wrapper>
      <Badge>
        <PulseDot />
        <span>Новые задачи добавляются автоматически каждые 10-20 секунд</span>
      </Badge>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Badge = styled(BadgeUi)`
  background-color: ${({ theme }) => hexToRgba(theme.colors.primary, 0.1)};
  border-color: transparent;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 400;
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
`;

const PulseDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 9999px;
  animation: ${pulse} 1.5s infinite;
`;
