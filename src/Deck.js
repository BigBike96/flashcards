// should be initialized (parameter>>) with an array of Card objects
// should know (return) how many cards are in the deck

class Deck {
  constructor(cards) {
    this.cards = cards;
  }
  countCards() {
    return this.cards.length;
  }
}


module.exports = Deck;
