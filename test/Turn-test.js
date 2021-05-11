// TDD for turn
const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card, turn, turnWrongAnswer;

  beforeEach(() => {
    card = new Card(1, 'What is the color of the sky?', ['blue', 'yellow', 'green'], 'blue');
    turn = new Turn('blue', card);
    turnWrongAnswer = new Turn('yellow', card);
  });

  it('should be an instance of a turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to have a user inputed guess', () => {
    expect(turn.guess).to.equal('blue');
  });

  it('should be able to have a card object', () => {
    expect(turn.card).to.be.an.instanceof(Card);
    expect(turn.card).to.deep.equal(card);
  });

  it('should be able to return a user guess', () => {
    expect(turn.returnGuess()).to.equal('blue');
  });

  it.skip('should return the card that the guess is made on', () => {
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it.skip('should be true if the user answer matches the correct answer for the card', () => {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it.skip('should be false if the user answer is false', () => {
    expect(turnWrongAnswer.evaluateGuess()).to.equal(false);
  });

  it.skip('should return a response for a correct user guess', () => {
    expect(turn.giveFeedback()).to.equal('correct');
  });

  it.skip('should return a response for an incorrect answer', () => {
    expect(turnWrongAnswer.giveFeedback()).to.equal('incorrect');
  });

});
