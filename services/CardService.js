class CardService {
  async validateDeck(cards) {
    
    if (!Array.isArray(cards)) {
      throw new Error('Invalid input: "cards" must be an array.');
  }

    const invalidCards = [];
  
    try {
      cards.forEach((card) => {
        if (card.alphabet === 'D' && card.number !== '3') {
          invalidCards.push({
            card,
            error: `Invalid card: Alphabet 'D' must have number '3', got '${card.number}' instead.`
          });
        }
      });
    } catch (error) {
      throw new Error('Validation failed due to an unexpected error.');
    }

    return invalidCards;
  }
}

module.exports = CardService;