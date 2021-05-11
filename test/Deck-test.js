// deck

const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

describe('Deck', () => {
  let card1, card2, card3, deck;

  beforeEach(() => {
    card1 = new Card(1, 'What is the color of the sky?', ['blue', 'yellow', 'green'], 'blue');
    card2 = new Card(2, 'What is the color of sand?', ['blue', 'green', 'brown'], 'brown');
    card3 = new Card(3, 'What is the color of aluminium foil?', ['pink', 'silver', 'brown'], 'silver');
    deck = new Deck(card);
  });

  it('should be able to hold an array of cards', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });
});
