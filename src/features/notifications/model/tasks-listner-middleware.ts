import { addTask } from "@/entities/task";
import { toast } from "@/shared/components/toast";
import { createListenerMiddleware } from "@reduxjs/toolkit";

export const tasksListenerMiddleware = createListenerMiddleware();

tasksListenerMiddleware.startListening({
  actionCreator: addTask,
  effect: (action) => {
    toast({
      title: "Добавлена задача",
      description: `${action.payload.title}`,
      button: {
        label: "ОK",
        onClick: () => {},
      },
    });
  },
});
