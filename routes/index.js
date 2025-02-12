const express = require('express');
const router = express.Router();
const CardController = require('../controllers/CardController');

const cardController = new CardController();

router.get('/', (req, res) => {
    res.send('API for card game validator');
  });
  
router.post('/validate-deck', cardController.validateDeck);


module.exports = router;