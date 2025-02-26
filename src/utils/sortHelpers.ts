// src/utils/sortHelpers.ts

// Define the desired order for categories:
export const kategoriOrder: Record<string, number> = {
  Gold: 1,
  Plus: 2,
  Basic: 3,
};

// Function to extract firmness value, defaulting to Infinity if missing
export const extractFirmness = (firm?: string | number): number => {
  if (firm === undefined || firm === "") {
    return Infinity;
  }
  return typeof firm === "string" ? parseFloat(firm) : firm;
};

// Function to extract numeric values from core (fallback for legacy support)
export const extractCoreValue = (firm: string | number): number => {
  if (typeof firm === "number") {
    return firm; // If it's already a number, return it directly.
  }

  return 0; // Default return value if parsing fails.
};

// Sorting function for items based on category and firmness
export const sortItems = (a: any, b: any) => {
  // First, sort by kategori order
  const categoryComparison =
    kategoriOrder[a.kategori] - kategoriOrder[b.kategori];
  if (categoryComparison !== 0) {
    return categoryComparison;
  }

  // Then, sort by firmness if available
  const aFirmness = extractFirmness(a.details.firm);
  const bFirmness = extractFirmness(b.details.firm);

  return aFirmness - bFirmness; // Lower number = firmer mattress
};
