import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  Task,
  TaskDTO,
  TaskPriority,
  TasksSorting,
  TaskStorePriority,
} from "../model/types";
import { v4 as uuidv4 } from "uuid";

type TasksState = {
  tasks: Task[];
  priorityFilter: TaskStorePriority;
  sorting: TasksSorting;
};

const initialState: TasksState = {
  tasks: [
    {
      id: "1",
      title: "Разработать компоненты для новой версии продукта",
      createdTime: "2025-06-06T11:08:52.450Z",
      priority: "high",
      isCompleted: false,
      description: "Разработать компоненты для новой версии продукта",
    },
    {
      id: "2",
      title: "Разработать компоненты для новой версии продукта",
      createdTime: "2025-06-06T11:06:52.450Z",
      priority: "medium",
      isCompleted: false,
      description: "Разработать компоненты для новой версии продукта",
    },
    {
      id: "3",
      title: "Разработать компоненты для новой версии продукта",
      createdTime: "2025-06-06T11:07:52.450Z",
      priority: "low",
      isCompleted: false,
      description: "Разработать компоненты для новой версии продукта",
    },
  ],
  priorityFilter: "all",
  sorting: "DESC",
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    tasksAddTask: (state, action: PayloadAction<TaskDTO>) => {
      const { title, description, priority } = action.payload;

      state.tasks.push({
        id: uuidv4(),
        title,
        description,
        priority,
        createdTime: new Date().toISOString(),
        isCompleted: false,
      });
    },
    tasksDeleteTask: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
    tasksToggleCompleteTask: (state, action: PayloadAction<{ id: string }>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    tasksSetPriorityFilter: (
      state,
      action: PayloadAction<TaskPriority | "all">
    ) => {
      state.priorityFilter = action.payload;
    },
    tasksToggleSorting: (state) => {
      state.sorting = state.sorting === "ASC" ? "DESC" : "ASC";
    },
  },
});

export const {
  tasksAddTask,
  tasksDeleteTask,
  tasksToggleCompleteTask,
  tasksSetPriorityFilter,
  tasksToggleSorting,
} = tasksSlice.actions;

export default tasksSlice.reducer;
