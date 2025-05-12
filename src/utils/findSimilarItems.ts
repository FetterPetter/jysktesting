import { categories, Item } from "../modules/data";

export function findSimilarItems(currentItem: Item): Item[] {
  const currentFirm = currentItem.details.firm as number;

  // Combine all items (from all categories) into a single array
  // Ensure overmadrass is always treated as an array if it's not
  const allItems = [
    ...categories.Senger,
    ...categories.Madrass,
    ...(Array.isArray(categories.overmadrass) ? categories.overmadrass : []),
  ];

  console.log("All Items:", allItems);

  // Filter out the current item
  const otherItems = allItems.filter((item) => item.id !== currentItem.id);

  // Sort items by the absolute difference in "firm" value
  const sortedByFirmDifference = otherItems.sort((a, b) => {
    const aFirm = a.details.firm as number;
    const bFirm = b.details.firm as number;

    // Ensure firm values are numbers before comparing
    if (isNaN(aFirm) || isNaN(bFirm)) {
      console.error("Firm values are not numbers:", aFirm, bFirm);
      return 0;
    }

    return Math.abs(aFirm - currentFirm) - Math.abs(bFirm - currentFirm);
  });

  // Return the two items with the closest "firm" value
  return sortedByFirmDifference.slice(0, 2);
}
