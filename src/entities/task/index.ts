export { tasksReducer } from "./store/tasks-slice";

export { generateMockTask } from "./model/mock-generator";

export { selectTaskById } from "./store/selectors";

export {
  addTask,
  toggleCompleteTask,
  deleteTask,
  setTasksPriorityFilter,
  toggleTasksSorting,
  editTask,
} from "./store/tasks-slice";

export type {
  Task,
  TaskDTO,
  TaskStorePriority,
  TasksSorting,
} from "./model/types";

export { TaskTotalCard } from "./ui/task-total-card";

export { TaskCard } from "./ui/task-card";
