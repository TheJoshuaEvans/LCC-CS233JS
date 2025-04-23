//? Joshua Evans - 2025-04-22
import Player from './player.js';
import jest from 'jest-mock';

describe('Player', function() {
  it('should instantiate completely', () => {
    const player = new Player(1);
    expect(player).toMatchObject({
      _dice: [],
      _turnScore: 0,
      _totalScore: 0,
      id: 1,
    });
  });

  describe('player.rollDice', () => {
    it('should roll the correct number of dice', () => {
      const player = new Player(2);
      const rolledDice = player.rollDice(5);
      expect(rolledDice.length).toBe(5);
    });

    it('should return an array of numbers', () => {
      const player = new Player(3);
      const rolledDice = player.rollDice(5);
      expect(rolledDice.every(die => typeof die === 'number')).toBe(true);
    });

    it('should correctly randomize dice', async () => {
      const player = new Player(4);

      // Do this a bunch of times because of the randomness
      for (let i = 0; i < 1000; i++) {
        const dice = player.rollDice(6);
        expect(dice).toHaveLength(6);
        dice.forEach((die) => {
          expect(die).toBeGreaterThanOrEqual(1);
          expect(die).toBeLessThanOrEqual(6);
        });
      }
    });
  });

  describe('player.selectDice', () => {
    it('should select and score dice correctly', async () => {
      const player = new Player(5);
      player._dice = [1, 2, 3, 4, 5, 6];

      const selectDiceResult = player.selectDice([0, 1, 2, 3, 4, 5]);
      expect(selectDiceResult).toMatchObject({
        diceScore: 3000,
        turnScore: 3000,
      });
      expect(player._turnScore).toBe(selectDiceResult.turnScore);
    });

    it('should handle different turn and dice scores', async () => {
      const player = new Player(5);
      player._turnScore = 1000;
      player._dice = [1, 2, 3, 4, 5, 6];

      const selectDiceResult = player.selectDice([0, 1, 2, 3, 4, 5]);
      expect(selectDiceResult).toMatchObject({
        diceScore: 3000,
        turnScore: 4000,
      });
      expect(player._turnScore).toBe(selectDiceResult.turnScore);
    });
  });

  describe('player.endTurn', () => {
    it('should end the turn and reset the score', () => {
      const player = new Player(6);
      player._turnScore = 1000;
      player._totalScore = 5000;

      const totalScore = player.endTurn(true);

      expect(totalScore).toBe(6000);
      expect(player._totalScore).toBe(totalScore);
      expect(player._turnScore).toBe(0);
      expect(player._dice).toEqual([]);
    });

    it('should end the turn without saving score', async () => {
      const player = new Player(6);
      player._turnScore = 1000;
      player._totalScore = 5000;

      const totalScore = player.endTurn(false);

      expect(totalScore).toBe(5000);
      expect(player._totalScore).toBe(totalScore);
      expect(player._turnScore).toBe(0);
      expect(player._dice).toEqual([]);
    });
  });

  describe('player.onUpdateTotalScore', () => {
    it('should call method whenever the internal total score is changed', () => {
      const player = new Player(7);
      const mockCallback = jest.fn();
      player.onUpdateTotalScore = mockCallback;

      player.totalScore = 1000;
      expect(mockCallback).toHaveBeenCalledWith(1000);

      player.totalScore = 2000;
      expect(mockCallback).toHaveBeenCalledWith(2000);
    });
  });

  describe('player.onUpdateTurnScore', () => {
    it('should call method whenever the internal turn score is changed', () => {
      const player = new Player(8);
      const mockCallback = jest.fn();
      player.onUpdateTurnScore = mockCallback;

      player.turnScore = 1000;
      expect(mockCallback).toHaveBeenCalledWith(1000);

      player.turnScore = 2000;
      expect(mockCallback).toHaveBeenCalledWith(2000);
    });
  });
});
