// tetris game app

//----- constants
const tetrisCotainer = document.querySelector('[data-tetrisContainer]');




class Tetris {

    // buildGame
    buildGame() {
        // total number of grids allowed in the grid container
        let totalNumberOfGridBoxes = 200;
        // count how many grid boxes have been built
        let numberOfBoxesBuilt = 0;



        while (numberOfBoxesBuilt < totalNumberOfGridBoxes) {
            // create box
            let createBox = document.createElement('div');
            let appendBox = tetrisCotainer.appendChild(createBox);
            numberOfBoxesBuilt++;
            console.log('yes');
        }
        console.log(tetrisCotainer);
    }

    // startGame;
    startGame() {}

    // pause game
    pauseGame() {}

    // stop / complete / end game
    endGame() {}

    // randomly select tetromino
    selectTetromino() {}

    // ----move tetromino

    // rotate Tetramino
    rotateTetramino() {}

    // move tetromino left
    moveTetrominoLeft() {}

    //  tetromino right
    moveTetraminoRight() {}

    //move tetromino down
    moveTetraminoDown() {}

    // pull tetromino down
    pullTetraminoDown() {}

}

const tetris = new Tetris();


// add grid boxes to display tetraminoes inside the tetris container
tetris.buildGame();