// tetris game
// important!!!!!!!! grid positions (gridBoxes) are 1 based(not zero based) for the purpose of calculations

//------------- define tetraminoes
// there are five tetraminoes and each have been rotated
// therefore each tetramino has an array of possible rotations
// so theres an two-dimensional array


// ---------------------------------------------------delete

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
const gridBoxes = document.querySelectorAll('[data-gridBox]');

// -----------------------------------/delete



const tetraminoes = [
    //T-Tetraminos
    [
        // Tetramino cssClassName
        'T-Tetramino',
        // view one
        [1, 2, 3, 12],
        // rotation two
        [1, 12, 11, 21],
        // rotation three
        [11, 2, 12, 13],
        // rotation four
        [11, 2, 12, 22]

    ],

    // L-tetramino
    [
        'L-Tetramino',
        // view one
        [1, 11, 21, 22],
        // view two
        [1, 2, 12, 22],
        // view three
        [1, 11, 2, 3],
        // view four
        [11, 12, 13, 3]

    ],
    // Z-shaped
    [
        'Z-Tetramino',
        // view one
        [1, 2, 12, 13],
        // view two
        [1, 11, 12, 22],
        // view three
        [2, 11, 12, 21],
        // view fours
        [2, 3, 12, 11]
    ],
    // box - tetramino
    [
        'Box-Tetramino',
        // view  one
        [1, 2, 11, 12],
        // view two
        [1, 2, 11, 12],
        // view three
        [1, 2, 11, 12],
        // view four
        [1, 2, 11, 12]
    ],

    // I - shaped tetramino
    [
        'I-Tetramino',
        //    rotation one
        [1, 2, 3, ],
        //    rotation two
        [1, 11, 21],
        //    rotation three
        [1, 2, 3, ],
        //    rotation four
        [1, 11, 21]
    ]

];




class Tetris {
    //---------------------------- build the game environment
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

    }

    // -------basic game functionality

    //------------- start the game
    startGame() {}

    //------------- pause the game
    pauseGame() {}

    //-------------- completeGame
    completeGame() {}

    // draw tetramino
    drawTetramino(tetraminoCssClassName, tetraminoShapeLayout, startRow, startColumn) {
        //    define the value of the start point
        let startPoint = startColumn * startRow;
        let tetraminoCoordinates = [];

        tetraminoShapeLayout.forEach((gridPosition) => {
            gridPosition = startPoint + gridPosition;
            tetraminoCoordinates.push(gridPosition);
        });

        gridBoxes.forEach((gridBox) => {
            tetraminoCoordinates.forEach((coordinate) => {
                if (gridBox.getAttribute('data-gridbox') == coordinate) gridBox.classList.add(tetraminoCssClassName);
            });
        });
    }

    // ---------tetraminoes
    selectTetramino() {

        //--------------------- select a random tetramino

        // select a ranom index from the tetraminoes array  ( array of tetraminoes)
        let randomTetraminoInex = Math.floor(Math.random() * tetraminoes.length);
        //    use the selected index to refer to the tetramino in that index
        this.tetramino = tetraminoes[randomTetraminoInex];
        // get the name of the Tetramino
        this.tetraminoName = this.tetramino[0];
        // -----------tetramino views
        this.tetraminoViewOne = this.tetramino[1];
        this.tetraminoViewTwo = this.tetramino[2];
        this.tetraminoViewThree = this.tetramino[3];
        this.tetraminoViewFour = this.tetramino[4];


        // Default tetramino view
        this.tetraminoDefaultView = this.tetraminoViewOne;
        //------------ tetramino position
        // by default, let the tetraminoes start to drop from close to the center of the tetris container
        this.tetraminoRow = 1;
        this.tetraminoColumn = 5;
        // --------------draw the tetramino
        // pass parameters to the drawTetramino method to actually draw the tetramino that has been defined here
        this.drawTetramino(this.tetraminoName, this.tetraminoDefaultView, this.tetraminoRow, this.tetraminoColumn);


    }

    //---------------------------- rotate Tetramino
    rotateTetramino() {}

    //---------------------- move tetramino left
    moveTetraminoLeft() {}

    //----------------------- move tetramino right
    moveTetraminoRight() {}

    //------------------ move tetramino down by the second (call on interval)
    moveTetraminoDown() {}


    //---------------------- pull tetramino down (after user has selected a shape and wants to save time)
    pullTetraminoDown() {}

    //------------------------------ update the display
    updateDisplay() {}
}

// create an instanceof the tetris game
const tetris = new Tetris();
// build the game and start
// tetris.buildGameEnvironment();
// // get all the gridBoxes
// const gridBoxes = document.querySelectorAll('[data-gridBox]');

tetris.selectTetramino()