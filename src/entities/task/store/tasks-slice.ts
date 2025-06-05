import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task, TaskPriority, TaskStorePriority } from "../model/types";

interface TasksState {
  tasks: Task[];
  priorityFilter: TaskStorePriority;
}

const initialState: TasksState = {
  tasks: [
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
  ],
  priorityFilter: "all",
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    tasksToggleCompleteTask: (state, action: PayloadAction<{ id: string }>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    tasksDeleteTask: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
    tasksSetPriorityFilter: (
      state,
      action: PayloadAction<TaskPriority | "all">
    ) => {
      state.priorityFilter = action.payload;
    },
  },
});

export const {
  tasksToggleCompleteTask,
  tasksDeleteTask,
  tasksSetPriorityFilter,
} = tasksSlice.actions;

export default tasksSlice.reducer;
