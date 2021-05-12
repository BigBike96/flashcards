const chai = require('chai');
const expect = chai.expect;

const Round = ('../src/Round');
const Deck = ('../src/Deck');
const Card = ('../src/Card');
const Turn = ('../src/Round');

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

  it.skip('should be able to take in a deck', () => {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it.skip('should start off with turns set at zero', () => {
    expect(round.turns).to.equal(0);
  });

  it.skip('should be able to store incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it.skip('should start off with current turn set to null', () => {
    expect(round.currentTurn).to.equal(null);
  })
});
