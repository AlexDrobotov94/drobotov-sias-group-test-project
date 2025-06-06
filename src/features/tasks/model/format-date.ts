export function formatDate(isoString: string): string {
  const date = new Date(isoString);

  if (isNaN(date.getTime())) {
    console.error("Invalid date:", isoString);
    return "Неверная дата";
  }

  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
