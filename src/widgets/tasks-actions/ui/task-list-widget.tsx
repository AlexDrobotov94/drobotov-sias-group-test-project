import { EditTaskModal } from "@/features/task-forms";
import { TasksList } from "@/features/tasks";
import { useState } from "react";

export function TasksListWidget() {
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

  return (
    <>
      <TasksList editTask={(id) => setEditingTaskId(id)} />

      <EditTaskModal
        taskId={editingTaskId}
        onClose={() => setEditingTaskId(null)}
      />
    </>
  );
}
