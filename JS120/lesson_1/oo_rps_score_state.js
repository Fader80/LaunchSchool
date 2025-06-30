let readline = require('readline-sync');

//THIS IS THE SCORE STATE VERSION

const OPP_WIN_THRESHOLD = 0.66;
const WINNING_SCORE = 5;

function createPlayer() {
  return {
    move: null,
    score: 0, // this is a new property added
    roundWinner: null, // this is a new property added

    moveHistory: {rock: {player: 0, opponentWins: 0, oppWinRatio: 0},
      paper: {player: 0, opponentWins: 0, oppWinRatio: 0},
      scissors: {player: 0, opponentWins: 0, oppWinRatio: 0},
      lizard: {player: 0, opponentWins: 0, oppWinRatio: 0},
      spock: {player: 0, opponentWins: 0, oppWinRatio: 0}},

    updateMoveHistory(opponentWinner) {
      this.moveHistory[this.move]['player'] += 1;
      if (opponentWinner) {
        this.moveHistory[this.move]['opponentWins'] += 1;
      }
    },

    updateOppWinRatio() {
      for (let move in this.moveHistory) {
        if (this.moveHistory[move].opponentWins) {
        this.moveHistory[move].oppWinRatio = +(this.moveHistory[move].opponentWins
         / this.moveHistory[move].player).toFixed(2);
        }
      }
    },
  };
}


function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
     

    choose() {
      
      
      let addedChoices = [];

      let choices = Object.keys(this.moveHistory);

      /* the following temporarily increases the occurrence of the lesser likely to lose  options into the choices array
      for the computer:
      */ 


      if (choices.some(key => this.moveHistory[key].oppWinRatio > OPP_WIN_THRESHOLD)) {
        choices.forEach(key => {
          if (this.moveHistory[key].oppWinRatio <= OPP_WIN_THRESHOLD) addedChoices.push(key);
        })
      };

      if (addedChoices.length) choices = choices.concat(addedChoices);
      //console.log(choices); this is for testing

      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
      addedChoices = [];
      
    },


    displayMove() {
      console.log(`The computer chose: ${this.move}`);
          
    },

    displayMoveHistory() {
      let moveString = '\nComputer\'s move history: |';
      for (let prop in this.moveHistory) {
        moveString += ` ${prop} : ${this.moveHistory[prop]['player']} |`;
      }
      
      console.log(moveString);

    },

    


  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();


  let humanObject = {

    choose() {
      let choice;

      while (true) {
        console.log('\nPlease choose rock, paper, scissors, lizard, or spock:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors', 'lizard', 'spock'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;

    },

    displayMove() {
      console.log(`You chose: ${this.move}`);
    },

    displayMoveHistory() {
      let moveString = '\nYour move history: |';
      for (let prop in this.moveHistory) {
        moveString += ` ${prop} : ${this.moveHistory[prop]['player']} |`;
      }
      
      console.log(moveString);
    },

  };

  return Object.assign(playerObject, humanObject);
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


  welcomeMessage() {
    let answer = readline.question('Welcome to Rock, Paper, Scissors, Lizard, Spock!\nWould you like to play a round? (y/n)');
    return answer[0].toLowerCase() === 'y';
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, Lizard, Spock. Goodbye!');
  },

  calculateRoundOutcome() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper') ||
        (humanMove === 'lizard' && computerMove === 'spock') ||
        (humanMove === 'lizard' && computerMove === 'paper') || 
        (humanMove === 'spock' && computerMove === 'scissors') ||
        (humanMove === 'spock' && computerMove === 'rock')) {
      this.human.roundWinner = true;
      this.computer.roundWinner = false;

    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock') || 
               (humanMove === 'lizard' && computerMove === 'rock') ||
               (humanMove === 'lizard' && computerMove === 'scissors') ||
               (humanMove === 'spock' && computerMove === 'lizard') ||
               (humanMove === 'spock' && computerMove === 'paper')) {
      this.human.roundWinner = false;
      this.computer.roundWinner = true;

    } else {
      this.human.roundWinner = false;
      this.computer.roundWinner = false;

    }

  },

  updateScore() {
    if (this.human.roundWinner) {
      this.human.score++;
    } else if (this.computer.roundWinner) {
      this.computer.score++;
    }

  },

  displayRoundWinner() {
    if (this.human.roundWinner) {
      console.log('\nYou win the round!');
    } else if (this.computer.roundWinner) {
      console.log('\nComputer wins the round!');
    } else {
      console.log('\nRound\'s a tie!');
    }

  },

  // displayWinner() {
  //    let humanMove = this.human.move;
  //    let computerMove = this.computer.move;

  //    console.log(`You chose: ${humanMove}`);
  //    console.log(`The computer chose: ${computerMove}`);

  //   if ((humanMove === 'rock' && computerMove === 'scissors') ||
  //       (humanMove === 'paper' && computerMove === 'rock') ||
  //       (humanMove === 'scissors' && computerMove === 'paper')) {
  //     this.human.score++;
  //     console.log('\nYou win the round!');

  //   } else if ((humanMove === 'rock' && computerMove === 'paper') ||
  //              (humanMove === 'paper' && computerMove === 'scissors') ||
  //              (humanMove === 'scissors' && computerMove === 'rock')) {
  //     this.computer.score++;
  //     console.log('\nComputer wins the round!');

  //   } else {
  //     console.log('\nRound\'s a tie!');
  //   }
  // },


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
    this.human.score = 0;
    this.computer.score = 0;
  },

  detectMatchWinner() {
    if (this.human.score === WINNING_SCORE) return `player`;
    if (this.computer.score === WINNING_SCORE) return `computer`;
    return null;
  },

  displayCurrentScore() {
    console.log(`Your score: ${this.human.score}, Computer score: ${this.computer.score}`);
  },


  displayMatchWinner(winner) {
    if (winner === 'player') {

      this.displayCurrentScore();
      console.log('\n***You won the match!!***');
    } else if (winner === 'computer') {

      this.displayCurrentScore();
      console.log('\n**Computer won the match :(**');
    }
  },


  play() {
    while (true) { // match loop
      if(!this.welcomeMessage()) break;

      while (true) { // round loop
        console.clear();
        this.displayCurrentScore();       
       this.human.displayMoveHistory();
       this.computer.displayMoveHistory();
       console.log(this.computer.moveHistory);
        this.human.choose();
        this.human.updateMoveHistory();
        this.human.displayMove();
        this.computer.choose();
        
        this.computer.displayMove();
        this.calculateRoundOutcome();
        this.computer.updateMoveHistory(this.human.roundWinner);
        this.computer.updateOppWinRatio();
        this.updateScore();
        this.displayRoundWinner();

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

