function cloneDeck(origDeck) {
  let clonedDeck = {};

  let deckEntries = Object.entries(origDeck);

  deckEntries.forEach(entry => {
    let [key, value] = entry;

    clonedDeck[key] = value.map(elem => elem);
  });

  return clonedDeck;

}