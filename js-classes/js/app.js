/*----- app's state (variables) -----*/
let game;

/*----- cached element references -----*/
const boardEl = document.getElementById('board');
const msgEl = document.getElementById('message');

/*----- classes -----*/

class Square {
    constructor(domElement) {
        this.domElement = domElement
        this.value = null
    }

    static renderLookup = {
        '1': 'purple',
        '-1': 'orange',
        'null': 'darkgrey'
    }

    render() {
        this.domElement.style.backgroundColor = Square.renderLookup[this.value];
    }
}

class TicTacToeGame {
    constructor(boardElement, messageElement) {
        this.boardElement = boardElement;
        this.messageElement = messageElement;
        this.squareEls = [...boardElement.querySelectorAll('div')];
        // NEW CODE BELOW
        // Attach a delegated event listener
        // Arrow function is necessary to ensure 'this'
        // is set to the game object
        this.boardElement.addEventListener('click', (evt) => {
          // Obtain index of square
          const idx = this.squareEls.indexOf(evt.target);
          // Guards
          if (
            // Didn't click <div> in grid
            idx === -1 ||
            // Square already taken
            this.squares[idx].value ||
            // Game over
            this.winner
          ) return;
          // Update the square object
          this.squares[idx].value = turn;  // common typo 
          // Update other state (turn, winner)
          this.turn *= -1;
          this.winner = this.getWinner();
          // Render updated state
          this.render();
        });
      }
}

/*----- functions -----*/
initialize();

function initialize() {
    game = new TicTacToeGame(boardEl, msgEl)
    game.play()
}









// class Car {
//     constructor(color, make, model) {
//         this.color = color
//         this.make = make
//         this.model = model
//         this.isRunning = false
//     }

//     start() {
//         this.isRunning = true
//     }


// }

// const cohort = {
//     id: 'SEI',
//     students: ['Mary', 'Toni', 'Fred'],
//     instructors: ['Susan', 'Phil'],
//     addStudent: function (name) {
//         name = name[0].toUpperCase() + name.substr(1).toLowerCase();
//         this.students.push(name);
//     },
//     pickRandomStudent: function () {
//         let rndIdx = Math.floor(Math.random() * this.students.length);
//         return this.students[rndIdx];
//     }
// };