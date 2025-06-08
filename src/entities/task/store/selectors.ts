export const selectTaskById = (id: string) => (state: RootState) =>
  state.tasks.tasks.find((t) => t.id === id);
