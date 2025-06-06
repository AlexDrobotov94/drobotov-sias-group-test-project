import { Modal } from "@/shared/components/modal";
import { useSelector } from "react-redux";
import { selectTaskById } from "@/entities/task";
import { EditTaskForm } from "./edit-task-form";

type Props = {
  taskId: string | null;
  onClose: () => void;
};

export function EditTaskModal({ taskId, onClose }: Props) {
  const task = useSelector(taskId ? selectTaskById(taskId) : () => undefined);

  return (
    <Modal title="Редактировать задачу" open={!!taskId} onOpenChange={onClose}>
      {task && (
        <EditTaskForm
          initialValues={task}
          onCancel={onClose}
          onSubmit={onClose}
        />
      )}
    </Modal>
  );
}
