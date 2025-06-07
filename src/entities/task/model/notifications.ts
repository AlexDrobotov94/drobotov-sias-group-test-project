import { toast } from "@/shared/components/toast";

export const tasksNotifications = {
  taskAdded(taskName: string) {
    toast({
      title: "Добавлена задача",
      description: `${taskName}`,
      button: {
        label: "ОK",
        onClick: () => {},
      },
    });
  },
};
