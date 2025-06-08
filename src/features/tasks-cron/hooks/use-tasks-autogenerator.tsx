import { useEffect, useRef, useState, useCallback } from "react";

import { generateMockTask, addTask, tasksNotifications } from "@/entities/task";
import { TASKS_CRON_CONFIG } from "../config";
import { useAppDispatch } from "@/shared/store/hooks";

const ENABLE_CRON = TASKS_CRON_CONFIG.enableCron;

export const useTaskAutoGenerator = (autoStart = false) => {
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const isRunningRef = useRef(false);
  const [isRunning, setIsRunning] = useState(false);

  const dispatch = useAppDispatch();

  const getRandomDelay = useCallback(([min, max]: [number, number]) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, []);

  const scheduleNext = useCallback(() => {
    if (!isRunningRef.current) return;

    const delay = getRandomDelay(TASKS_CRON_CONFIG.generatorRandomDelay);
    timeoutIdRef.current = setTimeout(() => {
      const task = generateMockTask();
      dispatch(addTask(task));
      tasksNotifications.taskAdded(task.title);

      scheduleNext();
    }, delay);
  }, [getRandomDelay, dispatch]);

  const start = useCallback(() => {
    if (!ENABLE_CRON) {
      console.warn("TaskAutoGenerator не запущен: ENABLE_CRON=false");
      return;
    }
    if (isRunningRef.current) {
      return;
    }
    isRunningRef.current = true;
    setIsRunning(true);
    scheduleNext();
  }, [scheduleNext]);

  const stop = useCallback(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
    isRunningRef.current = false;
    setIsRunning(false);
  }, []);

  useEffect(() => {
    if (autoStart) {
      start();
    }
    return () => {
      stop();
    };
  }, [autoStart, start, stop]);

  return {
    isRunning,
    start,
    stop,
  };
};
