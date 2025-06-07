const GENERATOR_RANDOM_DELAY: [number, number] = [10000, 20000]; // ms

export const TASKS_CRON_CONFIG = {
  enableCron: true,
  generatorRandomDelay: GENERATOR_RANDOM_DELAY,
} as const;
