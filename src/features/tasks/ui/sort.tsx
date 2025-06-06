import { toggleTasksSorting } from "@/entities/task";
import { ButtonUi } from "@/shared/components/buttons";
import type { RootState } from "@/shared/store/store";
import { SortAsc } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export function SortTasks() {
  const sorting = useSelector((state: RootState) => state.tasks.sorting);
  const dispatch = useDispatch();

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
