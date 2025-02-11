class CardService {
  async validateDeck(cards) {
    const invalidCards = [];
    cards.forEach((card) => {
      if (card.alphabet === 'D' && card.number !== '3') {
        invalidCards.push(card);
      }
    });
    return invalidCards;
  }
}

module.exports = CardService;