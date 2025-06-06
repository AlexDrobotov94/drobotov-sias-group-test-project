import { Modal } from "@/shared/components/modal";
import { useSelector } from "react-redux";
import { selectTaskById } from "@/entities/task";
import { TaskForm } from "./form";

export function EditTaskModal({
  taskId,
  onClose,
}: {
  taskId: string | null;
  onClose: () => void;
}) {
  const task = useSelector(taskId ? selectTaskById(taskId) : () => undefined);

  return (
    <Modal title="Редактировать задачу" open={!!taskId} onOpenChange={onClose}>
      {task && <TaskForm mode="edit" initialValues={task} onCancel={onClose} />}
    </Modal>
  );
}
