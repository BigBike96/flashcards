
const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(1, 'What is the color of the night sky?', ['yellow', 'black', 'green'], 'black');
    card2 = new Card(2, 'How many days in a month?', ['3', '9', '30'], '30');
    card3 = new Card(3, 'What is the capitol of Wyoming?',['Cheyanne', 'Laramie', 'Lander'], 'Laramie');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be an instance of a Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should take in a Deck', () => {
    expect(round.deck).to.deep.equal(deck);
  });

  it('should be able to return the current Card', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should start out with no turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('should be able to store incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should increase the turn count by one with each turn', () => {
    expect(round.turns).to.equal(0);

    round.takeTurn();

    expect(round.turns).to.equal(1);

    round.takeTurn();

    expect(round.turns).to.equal(2);
  });

  it('when a guess is made, a new turn should be created', () => {
    const guess = 'yellow';
    round.takeTurn(guess);

    expect(round.currentTurn).to.be.an.instanceof(Turn);
  });

  it('should make the next card a current card when a turn is taken', () => {
    round.takeTurn();

    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should evaluate the guess and return appropiate feedback', () => {
    const turn1 = round.takeTurn('black');

    expect(turn1).to.equal('correct!');
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should store id of incorrect guess', () => {
    const turn2 = round.takeTurn('yellow');

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should calculate and return percent of correct guesses', () => {
    round.takeTurn('black');
    round.takeTurn('9');

    expect(round.calculatePercentCorrect()).to.equal(.50);
  });

  it('should return statment to user to indicate the round is over', () => {
    round.takeTurn('black');
    round.endRound();

    expect(round.endRound()).to.equal(`** Round over! ** You answered <>% of the questions correctly!`);
  });
});
