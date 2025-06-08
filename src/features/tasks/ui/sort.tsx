import { toggleTasksSorting } from "@/entities/task";
import { ButtonUi } from "@/shared/components/buttons";
import { SortAsc } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";

export function SortTasks() {
  const sorting = useAppSelector((state: RootState) => state.tasks.sorting);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleTasksSorting());
  };
  return (
    <ButtonUi onClick={handleClick} variant="secondary">
      <SortAsc
        size={20}
        style={{ transform: sorting === "DESC" ? "rotate(180deg)" : "" }}
      />
      <span>Сортировка</span>
    </ButtonUi>
  );
}
