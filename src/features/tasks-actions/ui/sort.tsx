import { ButtonUi } from "@/shared/components/buttons";
import { SortAsc } from "lucide-react";

export function SortTasks() {
  return (
    <ButtonUi variant="secondary">
      <SortAsc size={20} />
      <span>Сортировка</span>
    </ButtonUi>
  );
}
