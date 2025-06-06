import { useEffect, useRef } from "react";
import { taskAutoGenerator } from "../model/task-autogenerator";

let isHookInUse = false;

export const useTaskAutoGenerator = (autoStart = false) => {
  const isInitialized = useRef(false);
  const canControl = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      if (isHookInUse) {
        console.error(
          "useTaskAutoGenerator уже используется в другом компоненте!"
        );
        canControl.current = false;
      } else {
        isHookInUse = true;
        canControl.current = true;

        if (autoStart) {
          taskAutoGenerator.start();
        }
      }
      isInitialized.current = true;
    }

    return () => {
      if (canControl.current) {
        taskAutoGenerator.stop();
        isHookInUse = false;
      }
    };
  }, [autoStart]);

  const start = () => {
    if (!canControl.current) {
      console.error("Этот компонент не может управлять TaskAutoGenerator");
      return;
    }
    taskAutoGenerator.start();
  };

  const stop = () => {
    if (!canControl.current) {
      console.error("Этот компонент не может управлять TaskAutoGenerator");
      return;
    }
    taskAutoGenerator.stop();
  };

  return {
    isRunning: taskAutoGenerator.getStatus(),
    canControl: canControl.current,
    start,
    stop,
  };
};
