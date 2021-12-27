function transactionsFor(inventoryID, argArr) {
  return argArr.filter(obj => obj.id === inventoryID);
}