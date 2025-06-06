import { Modal } from "@/shared/components/modal";
import { useState } from "react";
import { AddTaskForm } from "./add-task-form";
import { ButtonUi } from "@/shared/components/buttons";
import { Plus } from "lucide-react";

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
    >
      <AddTaskForm
        onCancel={() => setOpen(false)}
        onSubmit={() => setOpen(false)}
      />
    </Modal>
  );
}
