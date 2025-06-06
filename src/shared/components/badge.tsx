import styled, { css } from "styled-components";

type BadgeVariant = "success" | "warning" | "error";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

interface StyledBadgeProps {
  $variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, ReturnType<typeof css>> = {
  success: css`
    color: ${({ theme }) => theme.colors.successForeground};
    background-color: ${({ theme }) => theme.colors.successBackground};
    border-color: ${({ theme }) => theme.colors.successForeground};
    opacity: 0.65;
  `,
  warning: css`
    color: ${({ theme }) => theme.colors.warningForeground};
    background-color: ${({ theme }) => theme.colors.warningBackground};
    border-color: ${({ theme }) => theme.colors.warningForeground};
    opacity: 0.65;
  `,
  error: css`
    color: ${({ theme }) => theme.colors.errorForeground};
    background-color: ${({ theme }) => theme.colors.errorBackground};
    border-color: ${({ theme }) => theme.colors.errorForeground};
    opacity: 0.65;
  `,
};

const StyledBadge = styled.div<StyledBadgeProps>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding-inline: ${({ theme }) => theme.spacing.base};
  padding-top: ${({ theme }) => theme.spacing.xs};
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  border-radius: ${({ theme }) => theme.rounded.full};

  border: 1px solid;

  ${({ $variant }) => $variant && variantStyles[$variant]};
  ${({ $variant, theme }) =>
    !$variant &&
    css`
      color: ${theme.colors.foreground};
      background-color: ${theme.colors.border};
      border-color: ${theme.colors.foreground};
    `}
`;

export function BadgeUi({ variant, children, ...props }: BadgeProps) {
  return (
    <StyledBadge $variant={variant} {...props}>
      {children}
    </StyledBadge>
  );
}
