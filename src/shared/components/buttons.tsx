import styled, { css } from "styled-components";

type ButtonVariant = "default" | "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const buttonVariants = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.primary};
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.foreground};
  `,
  primary: css`
    color: ${({ theme }) => theme.colors.white};
    background-image: ${({ theme }) => theme.gradients.primary};
    box-shadow: ${({ theme }) => theme.shadows.primary};
    font-weight: 600;
  `,
};

const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 500;
  border: none;
  border-radius: ${({ theme }) => theme.rounded.md};
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ $variant }) => buttonVariants[$variant]}

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ButtonUi = ({
  variant = "default",
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
