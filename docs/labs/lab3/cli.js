//? Joshua Evans - 2025-04-22
/**
 * A quick and dirty local CLI program to dynamically test the full Ten Thousand game logic
 */
import Game from './src/ten-thousand/classes/game.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = new Game(2);

async function promptUser() {
  let internalPrompt = false;
  rl.question(`Enter a command for player ${game.currentPlayerId} (roll, select, end, quit): `, (input) => {
    const command = input.trim().toLowerCase();

    switch (command) {
    case 'roll': {
      const rollResult = game.rollDice((m) => console.error(m));
      console.log(`You rolled: ${rollResult}`);
      break;
    }

    case 'select': {
      internalPrompt = true;
      rl.question('Enter the indexes of the dice you want to select (comma-separated) or "none": ', (input) => {
        let selectedDice = [];
        if (input.toLowerCase() !== 'none') {
          selectedDice = input.split(',').map(Number);
        }
        const score = game.selectDice(selectedDice, (m) => console.error(m));

        console.log(`You selected: ${selectedDice}. Your score is: ${score}`);
        promptUser();
      });
      break;
    }

    case 'end': {
      const endResult = game.endTurn((m) => console.error(m));
      console.log(`Your current score is: ${endResult.totalScore}. Is victory: ${endResult.isVictory}`);
      break;
    }

    case 'quit': {
      console.log('Thanks for playing!');
      rl.close();
      return;
    }

    default: {
      console.log('Invalid command.');
    }}

    if (!internalPrompt) {
      promptUser();
    }
  });
}

console.log('Welcome to Ten Thousand!');
promptUser();
