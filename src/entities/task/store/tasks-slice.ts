import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../model/types";

const initialState: Task[] = [
  {
    id: "1",
    title: "Разработать компоненты для новой версии продукта",
    createdTime: new Date().toISOString(),
    priority: "high",
    isCompleted: false,
    description: "Разработать компоненты для новой версии продукта",
  },
  {
    id: "2",
    title: "Разработать компоненты для новой версии продукта",
    createdTime: new Date().toISOString(),
    priority: "medium",
    isCompleted: false,
    description: "Разработать компоненты для новой версии продукта",
  },
  {
    id: "3",
    title: "Разработать компоненты для новой версии продукта",
    createdTime: new Date().toISOString(),
    priority: "low",
    isCompleted: false,
    description: "Разработать компоненты для новой версии продукта",
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskToggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
  },
});

export const { taskToggleComplete } = tasksSlice.actions;

export default tasksSlice.reducer;
