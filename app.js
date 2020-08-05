// tetris game
// important!!!!!!!!!!! this whole script is zeroBased... all countings start from 0 , not 1

//------------- define tetraminoes
// there are five tetraminoes and each have been rotated
// therefore each tetramino has an array of possible rotations
// so theres an two-dimensional array

const tetraminoes = [
    ['T-shape', [1, 2, 3, 5],
        [2, 4, 5, 6],
        [1, 4, 5, 7]
    ]
];

// the start position for each tetramino
const tetraminoStartPosition = [0, 5];

// defint the maximum width for displaying tetraminoes, set it to three(confer drawTetramino)
const tetraminoMaxWidth = 3;


class Tetris {
    // build the game environment
    buildGameEnvironment() {
        // define the tetris environment
        let tetrisEnvironment = document.querySelector('[data-tetrisContainer]');
        // create the grid boxes inside the tetris environment
        let totalNumberOfGridBoxes = 200;
        // number of grid boxes built
        let numberOfGridBoxesBuilt = 0;
        // grid rows (for easily placing tetraminoes)
        let gridRows = 0;
        // grid columns (for easily placing tetraminoes)
        let gridColumns = 0;

        // build using a while loop
        while (numberOfGridBoxesBuilt < totalNumberOfGridBoxes) {
            //---------build a new grid box (as a div element)
            let buildGridBox = document.createElement('div');
            // set an attribute that makes it easily selectable by this javascript file and the value of the attribute to be the total number of grid boxes built
            buildGridBox.setAttribute('data-gridBox', numberOfGridBoxesBuilt);
            // append the built gridbox to the gameEnvironment
            tetrisEnvironment.appendChild(buildGridBox);

            //---------- divide the environment into rows and columns
            // grid Rows
            if (numberOfGridBoxesBuilt % 10 == 0) {
                buildGridBox.setAttribute('data-gridRow', gridRows);
                gridRows++;
            }
            //    grid Columns
            buildGridBox.setAttribute('data-gridColumn', numberOfGridBoxesBuilt % 10);

            // inncrement the number of gridboxes built by adding one
            numberOfGridBoxesBuilt++;
        }
        // start the game with the tetrmino in the default start positon;
        this.tetraminoPosition = tetraminoStartPosition;

        // pass the startPosition to the selectTetarmino method to select the tetramino and fix it in that position
        this.selectTetramino(this.tetraminoPosition);
    }

    // -------basic game functionality

    // start the game
    startGame() {}

    // pause the game
    pauseGame() {}

    // completeGame
    completeGame() {}

    // ---------tetraminoes
    selectTetramino() {}

    // rotate Tetramino
    rotateTetramino() {}

    // move tetramino left
    moveTetraminoLeft() {}

    // move tetramino right
    moveTetraminoRight() {}

    // move tetramino down by the second (call on interval)
    moveTetraminoDown() {}

    // pull tetramino down (after user has selected a shape and wants to save time)
    pullTetraminoDown() {}

    // update the display
    updateDisplay() {}
}

// create an instanceof the tetris game
const tetris = new Tetris();
// build the game and start
tetris.buildGameEnvironment();
// get all the gridBoxes
const gridBoxes = document.querySelectorAll('[data-gridBox]');

// paint tetramino

let T_Tetramino = tetraminoes[0][1];
console.log(T_Tetramino);

function drawTetramino(startRow, startColumn) {

}

drawTetramino(0, 5);