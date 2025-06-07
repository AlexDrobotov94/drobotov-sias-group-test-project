import { store } from "@/shared/store/store";
import { generateMockTask, addTask, tasksNotifications } from "@/entities/task";
import { TASKS_CRON_CONFIG } from "../config";

const ENABLE_CRON = TASKS_CRON_CONFIG.enableCron;

class TaskAutoGeneratorService {
  private timeoutId: NodeJS.Timeout | null = null;
  private isRunning = false;

  start() {
    if (!ENABLE_CRON) {
      console.warn("TaskAutoGenerator не запущен: ENABLE_CRON=false");
      return;
    }

    if (this.isRunning) {
      // console.warn("TaskAutoGenerator уже запущен");
      return;
    }

    this.isRunning = true;
    this.scheduleNext();
  }

  private scheduleNext() {
    if (!this.isRunning) return;

    const delay = this.getRandomDelay(TASKS_CRON_CONFIG.generatorRandomDelay);

    this.timeoutId = setTimeout(() => {
      const task = generateMockTask();
      store.dispatch(addTask(task));
      tasksNotifications.taskAdded(task.title);
      this.scheduleNext();
    }, delay);
  }

  private getRandomDelay(delay: [number, number]) {
    const [min, max] = delay;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  stop() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    this.isRunning = false;
  }

  getStatus() {
    return this.isRunning;
  }
}

export const taskAutoGenerator = new TaskAutoGeneratorService();
