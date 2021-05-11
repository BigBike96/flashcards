// TDD for turn
const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card, turn;

  beforeEach(() => {
    card = new Card(1, 'What is the color of the sky?', ['blue', 'yellow', 'green'], 'blue');
    turn = new Turn('blue', card);
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
});
