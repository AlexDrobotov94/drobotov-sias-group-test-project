import { store } from "@/shared/store/store";
import { generateMockTask, tasksAddTask } from "@/entities/task";

type RandomDelay = [number, number];
const RANDOM_DELAY: RandomDelay = [10000, 20000];

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

    const delay = this.getRandomDelay(RANDOM_DELAY);

    this.timeoutId = setTimeout(() => {
      const task = generateMockTask();
      store.dispatch(tasksAddTask(task));
      this.scheduleNext(); // планируем следующую генерацию
    }, delay);
  }

  private getRandomDelay(delay: RandomDelay) {
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
