import { TasksFilters } from "@/features/tasks-actions";
import { CardUi } from "@/shared/components/card";

export function TasksActionsWidget() {
  return (
    <CardUi>
      <TasksFilters />
    </CardUi>
  );
}
