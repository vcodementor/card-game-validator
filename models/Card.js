class Card {
    constructor(alphabet, number) {
      this.alphabet = alphabet;
      this.number = number;
    }
  
    isValid() {
      return this.alphabet === 'D' && this.number === '3';
    }
  }
  
  module.exports = Card;