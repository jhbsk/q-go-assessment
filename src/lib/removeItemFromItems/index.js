export const removeItemFromItems = (items, id) => {
  const itemsCopy = items ? [ ...items ] : []
  if (id && itemsCopy && itemsCopy.length) {
    itemsCopy.forEach((item, index) => {
      if (item.id === id) {
        itemsCopy.splice(index, 1);
      }
    });
  }
  return itemsCopy;
}