import { toast } from "@/shared/components/toast";
import { store } from "@/shared/store/store";

export function watchTaskAdditions() {
  let previousTasks = store.getState().tasks.tasks;

  const unsubscribe = store.subscribe(() => {
    const currentTasks = store.getState().tasks.tasks;

    if (previousTasks.length < currentTasks.length) {
      const addedTask = currentTasks.find(
        (task) => !previousTasks.some((prev) => prev.id === task.id)
      );
      if (addedTask) {
        return toast({
          title: "Добавлена задача",
          description: `${addedTask.title}`,
          button: {
            label: "ОK",
            onClick: () => {},
          },
        });
      }
    }

    previousTasks = currentTasks;
  });

  return unsubscribe;
}
