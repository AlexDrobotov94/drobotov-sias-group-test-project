import styled from "styled-components";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
  border-radius: ${({ theme }) => theme.rounded.xs};
  background-color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }

  &::placeholder {
    color: #aaa;
  }
`;
