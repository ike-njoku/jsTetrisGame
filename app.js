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
    // grid position (y-coordinate)
    let y = 0;
    if (numberOfGridBoxesBuilt % 10 == 0) y = 10;
    else y = numberOfGridBoxesBuilt % 10;

    buildGridBox.setAttribute('data-gridColumn', y);

    // grid rows
    if (numberOfGridBoxesBuilt % 10 == 0 || numberOfGridBoxesBuilt % 10 == 1) {
        buildGridBox.setAttribute('data-gridRow', gridRows);
        gridRows++;
    }


    // define the columns at the edges
    if (numberOfGridBoxesBuilt % 10 == 0 || numberOfGridBoxesBuilt % 10 == 1) buildGridBox.setAttribute('data-edgeColumn', true);

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
        let totalNumberOfGridBoxes = 220;
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
            // grid position (y-coordinate)
            let y = 0;
            if (numberOfGridBoxesBuilt % 10 == 0) y = 10;
            else y = numberOfGridBoxesBuilt % 10;

            buildGridBox.setAttribute('data-gridColumn', y);

            // grid rows
            if (numberOfGridBoxesBuilt % 10 == 0 || numberOfGridBoxesBuilt % 10 == 1) {
                buildGridBox.setAttribute('data-gridRow', gridRows);
                gridRows++;
            }


            // define the columns at the edges
            if (numberOfGridBoxesBuilt % 10 == 0 || numberOfGridBoxesBuilt % 10 == 1) buildGridBox.setAttribute('data-edgeColumn', true);


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
        // create an empty array to hold the coordinates of the gridBoxes in the tetramino to colour
        this.tetraminoCoordinates = [];

        tetraminoShapeLayout.forEach((gridPosition) => {
            // add the startPosition to the coordinates  received in the tetraminoShapeLayout
            gridPosition = startPoint + gridPosition;
            // append the  coordinates generated from the previous line of code to the new array (tetraminoCoordinates)
            this.tetraminoCoordinates.push(gridPosition);
        });
        // add colouring to the tetramino using its className
        gridBoxes.forEach((gridBox) => {
            this.tetraminoCoordinates.forEach((coordinate) => {
                if (gridBox.getAttribute('data-gridbox') == coordinate) {
                    // assign values
                    this.tetraminoGridBoxes = gridBox;
                    this.tetraminoName = tetraminoCssClassName;
                    this.tetraminoGridBoxes.classList.add(this.tetraminoName);
                };
            });
        });
    }


    // ----------clean Tetraamino
    cleanTetramino() {
        // loop the gridBoxes and the current tetramino coordinates. if there is a mach between them, remove the tetramino Name from the classList
        gridBoxes.forEach((gridBox) => {
            this.tetraminoCoordinates.forEach((gridBoxCoordinate) => {
                if (gridBox.getAttribute('data-gridbox') == gridBoxCoordinate) gridBox.classList.remove(this.tetraminoName);
            })
        })
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
        this.tetraminoColumn = 1;
        // --------------draw the tetramino
        // pass parameters to the drawTetramino method to actually draw the tetramino that has been defined here
        this.drawTetramino(this.tetraminoName, this.tetraminoDefaultView, this.tetraminoRow, this.tetraminoColumn);

    }

    //---------------------------- rotate Tetramino

    rotateTetramino() {}



    //---------------------- move tetramino left
    moveTetraminoLeft() {
        // clean the tetramino
        this.cleanTetramino()
            // subtract 1 from the tetramino column coordinate so that it tends to the left
        this.tetraminoColumn -= 1;
        // redraw the tetramino with the new coordinates
        this.drawTetramino(this.tetraminoName, this.tetraminoDefaultView, this.tetraminoRow, this.tetraminoColumn);

    }

    //----------------------- move tetramino right
    moveTetraminoRight() {

        // check if the tetraminoGridboxes is in the edge
        if (this.tetraminoGridBoxes.getAttribute('data-edgeColumn') == 'true') {
            console.log('hello world');
        };


        // clean the tetramino
        this.cleanTetramino();
        // add 1 to the tetramino column coordinate so that it tends to the left
        this.tetraminoColumn += 1;
        // redraw the tetramino with the new coordinates
        this.drawTetramino(this.tetraminoName, this.tetraminoDefaultView, this.tetraminoRow, this.tetraminoColumn);
    }

    //------------------ move tetramino down by the second (call on interval)
    moveTetraminoDown() {
        // clean the current tetramino position
        this.cleanTetramino();
        // increment the column to start displaying by 10, as 10 columns will equal one row
        this.tetraminoColumn += 10;
        // draw the tetramino again with  the new coordinates
        this.drawTetramino(this.tetraminoName, this.tetraminoDefaultView, this.tetraminoRow, this.tetraminoColumn);
    }


    //---------------------- pull tetramino down (after user has selected a shape and wants to save time)
    pullTetraminoDown() {}


}

// create an instanceof the tetris game
const tetris = new Tetris();
// build the game and start
// tetris.buildGameEnvironment();
// // get all the gridBoxes
// const gridBoxes = document.querySelectorAll('[data-gridBox]');

tetris.selectTetramino();
setInterval(() => tetris.moveTetraminoRight(), 1000)