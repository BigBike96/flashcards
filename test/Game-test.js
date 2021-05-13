const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');

describe('Game', () => {
  it('should be a new instance of Game', () => {
    const game = new Game();

    expect(game).to.be.an.instanceof(Game);
  });

  it.skip('should have a way to keep track of current round', () => {
    const game = new Game();

    expect(game.currentRound).to.equal(null);
  });

  it.skip('should have a new instance of round after the game has started', () => {
    const game = new Game();

    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
