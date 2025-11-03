let readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
    score: 0, // this is a new property added
  };
}


function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {

    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();
  console.log('this is playerObject on line 28', playerObject);

  let humanObject = {

    choose() {
      let choice;
      console.log('logging this.move on line 33', this.move);

      while (true) {
        console.log('Please choose rock, paper or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      //console.log('humanObject before this.move = choice', humanObject);
      this.move = choice;
      //console.log('humanObject after this.move = choice', humanObject);
      console.log('playerObject after this.move = choice', playerObject);

    },
  };

  return Object.assign(playerObject, humanObject);
}

function createMoveFactory() { // this doesn't work because you can't access 'this' here
  return {
    humanMove: this.human.move,
    computerMove: this.computer.move,

    displayHumanScore: function() {
      console.log(this.humanMove);
    },

    displayComputerScore: function() {
      console.log(this.computerMove);
    },

  };

}

//the following three functions were originally mooted in the design stage,
//but are not needed as of now

// function createMove() {
//   return {
//     //possible state: type of move (rock, paper, scissors)
//   };
// }

// function createRule() {
//   return {
//     // possible state? not clear whether Rules need state
//   };
// }

// //Since we don't know where to put 'compare', let's define it
// // as an ordinary function
// let compare = function(move1, move2) {
//   // not yet implemented
// };


const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  //score: {playerScore : 0, computerScore: 0}, // should this be from a factory function?


  welcomeMessage() {
    let answer = readline.question('Welcome to Rock, Paper, Scissors!\nWould you like to play a round? (y/n)');
    return answer[0].toLowerCase() === 'y';
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  calculateScore() {


  },

  // createMove() { //finish - should this be a factory function? - see below
  //   let humanMove = this.human.move;
  //   let computerMove = this.computer.move;

  //   console.log(`You chose: ${humanMove}`);
  //   console.log(`The computer chose: ${computerMove}}`);

  // },


  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      this.score.playerScore++;
      console.log('\nYou win the round!');

    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      this.score.computerScore++;
      console.log('\nComputer wins the round!');

    } else {
      console.log('\nRound\'s a tie!');
    }
  },


  playRoundAgain() {
    console.log('Would you like to play another round? (y/n)');
    let answer = readline.question();
    return answer[0].toLowerCase() === 'y';
  },

  playMatchAgain() {
    let answer = readline.question('\nWould you like to play another match? (y/n)');
    return answer[0].toLowerCase() === 'y';

  },

  resetScore() {
    this.score = {playerScore : 0, computerScore: 0};
  },

  detectMatchWinner() {
    if (this.score.playerScore === 5) return `player`;
    if (this.score.computerScore === 5) return `computer`;
    return null;
  },


  displayMatchWinner(winner) {
    if (winner === 'player') {
      console.clear();
      console.log(`Your score: ${this.score.playerScore}, Computer score: ${this.score.computerScore}`);
      console.log('\n***You won the match!!***');
    } else if (winner === 'computer') {
      console.clear();
      console.log(`Your score: ${this.score.playerScore}, Computer score: ${this.score.computerScore}`);
      console.log('\n**Computer won the match :(**');
    }
  },


  play() {
    while (true) { // match loop
      if(!this.welcomeMessage()) break;

      while (true) { // round loop
        console.clear();
        console.log(`Your score: ${this.score.playerScore}, Computer score: ${this.score.computerScore}`);
        this.human.choose();
        this.computer.choose();
        this.displayWinner();

        if (this.detectMatchWinner()) {
          this.displayMatchWinner(this.detectMatchWinner());
          this.resetScore();
          break;
        } else if (!this.playRoundAgain()) {
          this.resetScore();
          break;
        }
        
      }
      if (!this.playMatchAgain()) {
        this.displayGoodbyeMessage();
        this.resetScore();
        break;
      }
    }
  },
};

RPSGame.play();

