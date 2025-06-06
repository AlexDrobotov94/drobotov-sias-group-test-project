import * as Dialog from "@radix-ui/react-dialog";
import styled, { keyframes } from "styled-components";
import { X } from "lucide-react";
import { Typography } from "./typograpy";

type ModalProps = {
  title?: string;

  trigger: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;

  children: React.ReactNode;
};

export function Modal({
  trigger,
  children,
  title,
  open,
  onOpenChange,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <DialogTitle>
            {title ? <Typography variant="h3">{title}</Typography> : null}
          </DialogTitle>

          {children}

          <CloseButton>
            <X size={20} />
          </CloseButton>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const overlayShow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const contentShow = keyframes`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`;

const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 38px rgba(0, 0, 0, 0.35), 0 10px 20px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 700px;
  max-height: 85vh;

  gap: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.rounded.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const DialogTitle = styled(Dialog.Title)`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  color: #111;
`;

const CloseButton = styled(Dialog.Close)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 2px;
  background: none;
  border: none;
  display: grid;
  place-content: center;
`;
