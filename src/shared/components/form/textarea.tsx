import styled from "styled-components";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = styled.textarea<TextareaProps>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm + " " + theme.spacing.base};
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
  border-radius: ${({ theme }) => theme.rounded.xs};
  background-color: ${({ theme }) => theme.colors.white};

  resize: none;
  min-height: 5rem; // 80px

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }

  &::placeholder {
    color: #aaa;
  }
`;
