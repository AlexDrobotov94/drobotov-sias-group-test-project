import { fakerRU as faker } from "@faker-js/faker";
import type { TaskDTO, TaskPriority } from "./types";

function removeTrailingDot(text: string): string {
  return text.replace(/[.。！？!]+$/, "");
}

export function generateMockTask(overrides?: Partial<TaskDTO>): TaskDTO {
  const shouldIncludeDescription = Math.random() < 0.5;

  return {
    title: removeTrailingDot(faker.lorem.sentence(3)),
    description: shouldIncludeDescription
      ? removeTrailingDot(faker.lorem.sentences(2))
      : undefined,
    priority: faker.helpers.arrayElement<TaskPriority>([
      "low",
      "medium",
      "high",
    ]),
    ...overrides,
  };
}
