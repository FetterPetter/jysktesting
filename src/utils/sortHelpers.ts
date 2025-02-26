// src/utils/sortHelpers.ts

// Define the desired order for categories:
export const kategoriOrder: Record<string, number> = {
  Gold: 1,
  Plus: 2,
  Basic: 3,
};

export const extractFirmness = (core: string | number): number => {
  if (typeof core === "number") {
    return core; // If it's already a number, return it directly.
  }
  if (typeof core === "string") {
    const match = core.match(/(\d+(?:[.,]\d+)?)/);
    if (match) {
      const numStr = match[1].replace(",", ".");
      return parseFloat(numStr);
    }
  }
  return 0; // Default return value if parsing fails.
};
