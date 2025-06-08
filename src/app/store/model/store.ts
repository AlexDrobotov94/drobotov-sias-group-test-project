import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { tasksListenerMiddleware } from "@/features/notifications";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(tasksListenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
