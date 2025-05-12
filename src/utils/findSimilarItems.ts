import { categories, Item } from "../modules/data";

export function findSimilarItems(item: Item): Item[] {
  let categoryKey: keyof typeof categories;
  categoryKey = item.katergori;

  const categoryItems = categories[categoryKey];

  const similarItems = categoryItems.filter(
    (categoryItem) => categoryItem.id !== item.id,
  );

  const sortedItems = similarItems.sort((a, b) => {
    const firmA = typeof a.details.firm === "number" ? a.details.firm : 0;
    const firmB = typeof b.details.firm === "number" ? b.details.firm : 0;
    const firmItem =
      typeof item.details.firm === "number" ? item.details.firm : 0;

    const firmnessDifferenceA = Math.abs(firmA - firmItem);
    const firmnessDifferenceB = Math.abs(firmB - firmItem);

    return firmnessDifferenceA - firmnessDifferenceB;
  });

  return sortedItems.slice(0, 2);
}
