"use client";

import styled from "styled-components";
import { toast as sonnerToast } from "sonner";
import { hexToRgba } from "../utils/hex-to-rgba";

// FIXME: размер компонента
interface ToastProps {
  id: string | number;
  title: string;
  description: string;
  button: {
    label: string;
    onClick: () => void;
  };
}

export function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <Toast
      id={id}
      title={toast.title}
      description={toast.description}
      button={{
        label: toast.button.label,
        onClick: toast.button.onClick,
      }}
    />
  ));
}

function Toast({ id, title, description, button }: ToastProps) {
  return (
    <ToastWrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
      <Action>
        <ActionButton
          onClick={() => {
            button.onClick();
            sonnerToast.dismiss(id);
          }}
        >
          {button.label}
        </ActionButton>
      </Action>
    </ToastWrapper>
  );
}

const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 22.75rem; // 364px
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.rounded.md};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
`;

const Action = styled.div`
  margin-left: 1.25rem;
  flex-shrink: 0;
`;

const ActionButton = styled.button`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary || "#4F46E5"};
  background-color: ${({ theme }) => hexToRgba(theme.colors.primary, 0.1)};
  border-radius: ${({ theme }) => theme.rounded.md || "0.375rem"};
  padding: 0.25rem 0.75rem;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
