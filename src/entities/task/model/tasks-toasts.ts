import { toast } from "@/shared/components/toast";

export function taskAddedToast({ taskName }: { taskName: string }) {
  return toast({
    title: "Добавлена задача",
    description: `${taskName}`,
    button: {
      label: "ОK",
      onClick: () => {},
    },
  });
}
