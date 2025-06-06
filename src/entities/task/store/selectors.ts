import type { RootState } from "@/shared/store/store";

export const selectTaskById = (id: string) => (state: RootState) =>
  state.tasks.tasks.find((t) => t.id === id);
