export const toggleItemStatus = (items, id) => {
  const itemsCopy = items ? [ ...items ] : []
  if (id && itemsCopy && itemsCopy.length) {
    itemsCopy.forEach((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
        return;
      }
    });
  }
  return itemsCopy;
}