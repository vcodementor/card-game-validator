class CardRepository {
    async validateDeck(cards) {
      const invalidCards = [];
      cards.forEach((card) => {
        if (!card.isValid()) {
          invalidCards.push(card);
        }
      });
      return invalidCards;
    }
  }
  
  module.exports = CardRepository;