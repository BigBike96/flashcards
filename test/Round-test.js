
const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Round');
const Card = require('../src/Card');

describe('Round', () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(1, 'What is the color of the sky?', ['blue', 'yellow', 'green'], 'blue');
    card2 = new Card(2, 'What is the color of sand?', ['blue', 'green', 'brown'], 'brown');
    card3 = new Card(3, 'What is the color of aluminium foil?', ['pink', 'silver', 'brown'], 'silver');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to take in a deck', () => {
    expect(round.deck).to.deep.equal(deck);
  });

  it('should start off with turns set at zero', () => {
    expect(round.turns).to.equal(0);
  });

  it('should be able to store incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should start off with current turn set to null', () => {
    expect(round.currentTurn).to.equal(null);
  });

  it('should be able to return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it.skip('should add a turn to the turn count', () => {
    expect(round.turns).to.equal(0);

    round.takeTurn();

    expect(round.turns).to.equal(1);

    round.takeTurn();

    expect(round.turns).to.equal(2);
  });

  it.skip('should add a turn when a guess is made', () => {
    const guess = 'yellow';
    round.takeTurn(guess);

    expect(round.currentTurn).to.be.an.instanceof(Turn);
  });

  it.skip('should make the next card a current card when a turn is taken', () => {
    const turn1 = round.takeTurn('red');


    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it.skip('should check the guess and give correct feedback response', () => {
    round.takeTurn('blue');
    // this will need to be adjusted
    expect(turn1).to.equal('correct!');
  });

  it.skip('should store id of incorrect guess', () => {
    const turn2 = round.takeTurn('yellow');

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it.skip('should calculate and return percent of correct guesses', () => {
    round.takeTurn('black');
    round.takeTurn('brown');

    expect(round.calculatePercentCorrect()).to.equal(.50);
  });

  it.skip('should return statment to user to indicate the round is over', () => {
    round.takeTurn('black');
    round.endRound();

    expect(round.endRound()).to.equal(`** Round over! ** You answered <>% of the questions correctly!`);
  });
});
