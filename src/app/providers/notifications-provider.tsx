import { watchTaskAdditions } from "@/features/notifications";
import { useEffect } from "react";

export function NotificationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const unsubAdd = watchTaskAdditions();

    return () => {
      unsubAdd();
    };
  }, []);

  return <>{children}</>;
}
