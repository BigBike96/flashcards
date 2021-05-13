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
});
