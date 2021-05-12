const Turn = require('../src/Turn');
const Card = require('../src/Card');

class Round {
  constructor(deck) {
    this.deck = deck;
    // pass through and store deck
    this.turns = 0;
    // keep track of turn count
    this.incorrectGuesses = [];
    // records if guess is incorrect
    this.currentTurn = null;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
  // returnCurrentCard returns the current card being played
  // takeTurn: update turn count; use Turn class to evaluate guesses, give feedback; store incorrect guess ids
  // calculatePercentCorrect: calculate and return percent correct
  // endRound: prints  ‘** Round over! ** You answered <>% of the questions correctly!’
}

module.exports = Round;
