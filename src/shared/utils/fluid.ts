/**
 * Генерирует CSS-функцию `clamp()` для плавного изменения размера между десктопным и мобильным значением.
 * Размеры автоматически конвертируются из пикселей в rem.
 * Поддерживает как уменьшение, так и увеличение значения при сужении экрана.
 *
 * @param {number} desktopSizePx - Размер на больших экранах (в пикселях).
 * @param {number} mobileSizePx - Размер на маленьких экранах (в пикселях).
 * @returns {string} CSS-функция clamp() для плавного изменения размера.
 *
 * @example
 * // Уменьшение текста с 24px на десктопе до 16px на мобильном
 * fluidSize(24, 16); // → "clamp(1rem, 1.333rem + -1.0417vw, 1.5rem)"
 *
 * @example
 * // Увеличение отступов с 16px на десктопе до 24px на мобильном
 * fluidSize(16, 24); // → "clamp(1rem, 0.6667rem + 1.0417vw, 1.5rem)"
 *
 * @example
 * // Использование в CSS
 * .element {
 *   font-size: ${fluidSize(24, 16)};
 *   padding: ${fluidSize(32, 16)};
 * }
 */

export function fluidSize(desktopSizePx: number, mobileSizePx: number): string {
  const minWidthPx = 320; // Мобильные устройства
  const maxWidthPx = 1200; // Десктопы

  const root = document.querySelector("html");
  const pixelsPerRem = root
    ? Number(getComputedStyle(root).fontSize.slice(0, -2))
    : 16;

  // Конвертируем пиксели в rem
  const desktopSize = desktopSizePx / pixelsPerRem;
  const mobileSize = mobileSizePx / pixelsPerRem;

  // Определяем min и max размеры с учетом возможного инвертирования
  const minFontSize = Math.min(mobileSize, desktopSize);
  const maxFontSize = Math.max(mobileSize, desktopSize);

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  // Рассчитываем slope с учетом нового порядка параметров
  const slope = (desktopSize - mobileSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + mobileSize;

  return `clamp(${minFontSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxFontSize}rem)`;
}
