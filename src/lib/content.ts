// Shared helpers for content rendering.

const WORDS_PER_MINUTE = 220;

export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function year(date: Date): string {
  return date.getFullYear().toString();
}
