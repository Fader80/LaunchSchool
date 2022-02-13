while (true) {
  if (dealerTotal >= 17) break;

  if (busted()) {
    dealerBust = true;
    break;
  }
  dealerTotal += calculateTotal(cardGenerator());
}


