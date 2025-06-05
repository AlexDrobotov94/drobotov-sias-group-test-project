import styled from "styled-components";

export function Card({ children }: { children: React.ReactNode }) {
  return <Root>{children}</Root>;
}

const Root = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.rounded.lg};
  background-color: ${({ theme }) => theme.colors.white};
`;
