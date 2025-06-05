import styled, { css } from "styled-components";
import type { AppTheme } from "../styles/theme";

type Variant = "h1" | "h2" | "h3" | "h4" | "p" | "div";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant;
  color?: keyof AppTheme["colors"];
  children: React.ReactNode;
}

const variantStyles = {
  h1: css`
    font-size: ${({ theme }) => theme.fontSizes.h1};
    font-weight: 700;
  `,
  h2: css`
    font-size: ${({ theme }) => theme.fontSizes.h2};
    font-weight: 600;
  `,
  h3: css`
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-weight: 600;
  `,
  h4: css`
    font-size: ${({ theme }) => theme.fontSizes.h4};
    font-weight: 500;
  `,
  p: css`
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: 400;
  `,
  div: css`
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: 400;
  `,
};

const StyledTypography = styled.div<TypographyProps>`
  margin: 0;
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.foreground};
  ${({ variant = "div" }) => variantStyles[variant]}
`;

export const Typography = ({
  variant = "div",
  color,
  children,
  ...props
}: TypographyProps) => {
  return (
    <StyledTypography as={variant} variant={variant} color={color} {...props}>
      {children}
    </StyledTypography>
  );
};
