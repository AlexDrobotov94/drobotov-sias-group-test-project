import styled from "styled-components";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = styled.select<SelectProps>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm + " " + theme.spacing.base};
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
  border-radius: ${({ theme }) => theme.rounded.xs};
  background-color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
`;
