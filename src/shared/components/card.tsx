import styled from "styled-components";

export function CardUi({ children }: { children: React.ReactNode }) {
  return <Root>{children}</Root>;
}

const Root = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  overflow: hidden;
  border: 0.125rem solid ${({ theme }) => theme.colors.border}; // 2px
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.rounded.lg};
  background-color: ${({ theme }) => theme.colors.white};
`;
