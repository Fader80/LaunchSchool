
//helper function:
function transactionsFor(inventoryID, argArr) {
  return argArr.filter(obj => obj.id === inventoryID);
}


function isItemAvailable(inventoryID, argArr) {
  let filteredList = transactionsFor(inventoryID, argArr);

  let total = 0;

  filteredList.forEach(obj => {
    if (obj.movement === 'in') {
      total += obj.quantity;
    } else {
      total -= obj.quantity;
    }
  });

  return total > 0;
}