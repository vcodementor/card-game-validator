const express = require('express');
const router = express.Router();
const CardController = require('../controllers/CardController');

const cardController = new CardController();

router.post('/validate-deck', cardController.validateDeck);

module.exports = router;