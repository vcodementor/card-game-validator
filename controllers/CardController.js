const CardService = require('../services/CardService');

class CardController {
  async validateDeck(req, res) {
    try {
      const cards = req.body;
      // const result = await CardService.validateDeck(cards);
      res.send(result);
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' });
    }
  }
}

module.exports = CardController;