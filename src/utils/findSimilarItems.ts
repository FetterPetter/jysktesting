import { categories, Item } from "../modules/data";

export function findSimilarItems(item: Item): Item[] {
  // Find the category of the given item
  let categoryKey: keyof typeof categories;
  categoryKey = item.katergori;

  // You can now easily log the category or handle specific logic based on the categoryKey
  console.log("Category Key:", categoryKey); // Logs "Overmadrass", "Madrass", or "Senger"

  // Get the list of items in the same category
  const categoryItems = categories[categoryKey];

  // Log the items in this category
  console.log("Items in this category:", categoryItems);

  // Continue with the filtering and sorting logic as needed
  const similarItems = categoryItems.filter(
    (categoryItem) => categoryItem.id !== item.id,
  );

  // Sort by firmness and return closest items (as you requested earlier)
  const sortedItems = similarItems.sort((a, b) => {
    const firmA = typeof a.details.firm === "number" ? a.details.firm : 0;
    const firmB = typeof b.details.firm === "number" ? b.details.firm : 0;
    const firmItem =
      typeof item.details.firm === "number" ? item.details.firm : 0;

    const firmnessDifferenceA = Math.abs(firmA - firmItem);
    const firmnessDifferenceB = Math.abs(firmB - firmItem);

    return firmnessDifferenceA - firmnessDifferenceB; // Ascending order of firmness difference
  });

  return sortedItems.slice(0, 2); // Return the closest two items
}
