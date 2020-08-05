// tetris game

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

        // build using a while loop
        while (numberOfGridBoxesBuilt < totalNumberOfGridBoxes) {
            //build a new grid box (as a div element)
            let buildGridBox = document.createElement('div');
            // set an attribute that makes it easily selectable by this javascript file and the value of the attribute to be the total number of grid boxes built
            buildGridBox.setAttribute('data-gridBox', numberOfGridBoxesBuilt);
            // append the built gridbox to the gameEnvironment
            tetrisEnvironment.appendChild(buildGridBox);

            // get the origin, where tetraminoes drop from
            if (numberOfGridBoxesBuilt == 5) {
                buildGridBox.setAttribute('data-tetraminoOrigin', 'true')
            }

            // divide the environment into rows and columns
            if (numberOfGridBoxesBuilt % 10 == 0) {
                buildGridBox.setAttribute('data-gridRow', gridRows);
                gridRows++;
            }

            // inncrement the number of gridboxes built by adding one
            numberOfGridBoxesBuilt++;
        }

        this.tetraminoPosition = tetraminoStartPosition;

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
}

// create an instanceof the tetris game
const tetris = new Tetris();
// build the game and start
tetris.buildGameEnvironment();


// paint tetramino

let T_Tetramino = tetraminoes[0][1];
console.log(T_Tetramino);