import { Modal } from "@/shared/components/modal";
import { useState } from "react";
import { ButtonUi } from "@/shared/components/buttons";
import { Plus } from "lucide-react";
import { TaskForm } from "./form";

export function AddTaskButton() {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      title="Новая задача"
      trigger={
        <ButtonUi variant="primary">
          <Plus size={20} /> Новая задача
        </ButtonUi>
      }
      open={open}
      onOpenChange={setOpen}
      onOpenAutoFocus={true}
    >
      <TaskForm mode="add" onCancel={() => setOpen(false)} />
    </Modal>
  );
}
