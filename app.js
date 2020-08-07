// tetris game
// important!!!!!!!! grid positions (gridBoxes) are 1 based(not zero based) for the purpose of calculations

//------------- define tetraminoes
// there are five tetraminoes and each have been rotated
// therefore each tetramino has an array of possible rotations
// so theres an two-dimensional array

var startPoint = '';
const tetraminoes = [
    //T-Tetramino

    [
        // Tetramino cssClassName
        'T-Tetramino',
        // rotation one
        [1, 2, 3, 12]

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
        let totalNumberOfGridBoxes = 221;
        // number of grid boxes built
        let numberOfGridBoxesBuilt = 1;
        // grid rows (for easily placing tetraminoes)
        let gridRows = 1;
        // grid columns (for easily placing tetraminoes)
        let gridColumns = 1;

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
            if (numberOfGridBoxesBuilt % 11 == 0) {
                buildGridBox.setAttribute('data-gridRow', gridRows);
                gridRows++;
            }
            //    grid Columns
            buildGridBox.setAttribute('data-gridColumn', numberOfGridBoxesBuilt % 11);

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

function drawTetramino(tetraminoCssClassName, tetraminoShapeLayout, startRow, startColumn) {
    //    define the value of the start point
    startPoint = startColumn * startRow;
    let newArray = [];

    tetraminoShapeLayout.forEach((gridPosition) => {
        gridPosition = startPoint + gridPosition;
        newArray.push(gridPosition);
    });
    console.log(newArray);

    gridBoxes.forEach((gridBox) => {
        newArray.forEach((position) => {
            if (gridBox.getAttribute('data-gridbox') == position) gridBox.classList.add(tetraminoCssClassName);
        })

    })


}

drawTetramino(tetraminoes[0][0], tetraminoes[0][1], 6, 10);