export const hexToRgba = (hex: string, alpha: number) => {
  const isValidHex = /^#([A-Fa-f0-9]{6})$/.test(hex);

  if (!isValidHex) {
    throw new Error("Invalid hex value");
  }

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
