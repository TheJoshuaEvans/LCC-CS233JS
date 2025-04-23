//? Joshua Evans - 2025-04-22
import Game from './game.js';
import Player from './player.js';

describe('game', function() {
  it('should instantiate correctly', async () => {
    const game = new Game(2);
    expect(game._players).toHaveLength(2);

    game._players.forEach(player => expect(player).toBeInstanceOf(Player));
    expect(game._currentPlayer).toBe(game._players[0]);
  });
});

