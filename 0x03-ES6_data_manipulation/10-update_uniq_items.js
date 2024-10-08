function updateUniqueItems(groceries) {
  // Check if the argument is a Map
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the map entries
  for (const [item, quantity] of groceries.entries()) {
    // Update the quantity if it is 1
    if (quantity === 1) {
      groceries.set(item, 100);
    }
  }

  return groceries; // Return the updated map
}

export default updateUniqueItems;
