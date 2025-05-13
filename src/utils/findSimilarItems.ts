import { categories, Item } from "../modules/data";

export function findSimilarItems(item: Item): Item[] {
  const categoryKey: keyof typeof categories = item.katergori;
  const categoryItems = categories[categoryKey];

  const otherItems = categoryItems.filter(
    (categoryItem) => categoryItem.id !== item.id,
  );

  let allowedType: string;

  if (item.type === "Basic") {
    allowedType = "Plus";
  } else if (item.type === "Plus") {
    allowedType = "Gold";
  } else if (item.type === "Gold") {
    allowedType = "Gold";
  } else {
    return [];
  }

  const filteredByType = otherItems.filter(
    (categoryItem) => categoryItem.type === allowedType,
  );

  const sortedItems = filteredByType.sort((a, b) => {
    const firmA = typeof a.details.firm === "number" ? a.details.firm : 0;
    const firmB = typeof b.details.firm === "number" ? b.details.firm : 0;
    const firmOriginal =
      typeof item.details.firm === "number" ? item.details.firm : 0;

    const diffA = Math.abs(firmA - firmOriginal);
    const diffB = Math.abs(firmB - firmOriginal);

    return diffA - diffB;
  });

  return sortedItems.slice(0, 2);
}
