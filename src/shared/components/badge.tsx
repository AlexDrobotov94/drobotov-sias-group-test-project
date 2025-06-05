import styled from "styled-components";

type BadgeProps = {
  variant: "success" | "warning" | "error";
  children: React.ReactNode;
};

export function BadgeUi(props: BadgeProps) {
  const { variant, children } = props;

  return <Root $variant={variant}>{children}</Root>;
}

const Root = styled.div<{ $variant: BadgeProps["variant"] }>`
  display: grid;
  place-items: center;
  padding-inline: ${({ theme }) => theme.spacing.base};
  padding-top: ${({ theme }) => theme.spacing.xs};
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  border-radius: ${({ theme }) => theme.rounded.full};
  opacity: 0.65;

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, $variant }) => {
    switch ($variant) {
      case "success":
        return theme.colors.successForeground;
      case "warning":
        return theme.colors.warningForeground;
      case "error":
        return theme.colors.errorForeground;
    }
  }};
  color: ${({ theme, $variant }) => {
    switch ($variant) {
      case "success":
        return theme.colors.successForeground;
      case "warning":
        return theme.colors.warningForeground;
      case "error":
        return theme.colors.errorForeground;
    }
  }};
  background-color: ${({ theme, $variant }) => {
    switch ($variant) {
      case "success":
        return theme.colors.successBackground;
      case "warning":
        return theme.colors.warningBackground;
      case "error":
        return theme.colors.errorBackground;
    }
  }};
`;
