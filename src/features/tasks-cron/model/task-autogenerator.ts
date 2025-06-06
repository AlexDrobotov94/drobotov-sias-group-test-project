import { store } from "@/shared/store/store";
import { generateMockTask, taskAddedToast, addTask } from "@/entities/task";
import { GENERATOR_RANDOM_DELAY } from "../config";

class TaskAutoGeneratorService {
  private timeoutId: NodeJS.Timeout | null = null;
  private isRunning = false;

  start() {
    if (this.isRunning) {
      console.warn("TaskAutoGenerator уже запущен");
      return;
    }

    this.isRunning = true;
    this.scheduleNext();
  }

  private scheduleNext() {
    if (!this.isRunning) return;

    const delay = this.getRandomDelay(GENERATOR_RANDOM_DELAY);

    this.timeoutId = setTimeout(() => {
      const task = generateMockTask();
      store.dispatch(addTask(task));
      this.scheduleNext();
      taskAddedToast({ taskName: task.title });
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
