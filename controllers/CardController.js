const CardService = require('../services/CardService'); 

class CardController {
  async validateDeck(req, res) {
    try {
      if (!req.body || !req.body.cards) {
        return res.status(400).json({ error: 'Missing request body or "cards" array.' });
      }
      const cards = req.body.cards;
      const cardService = new CardService();
      const result = await cardService.validateDeck(cards);
      return res.status(200).json({ invalidCards: result });
    } catch (error) {
      console.error('Validation error:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = CardController;