// tetris game
// important!!!!!!!! grid positions (gridBoxes) are 1 based(not zero based) for the purpose of calculations

//------------- define tetraminoes
// there are five tetraminoes and each have been rotated
// therefore each tetramino has an array of possible rotations
// so theres an two-dimensional array


// ---------------------------------------------------delete

<<<<<<< HEAD

=======
>>>>>>> 04f772f9e6897296da50c5eb8948af76277a6cd3
// define the tetris environment
let tetrisEnvironment = document.querySelector('[data-tetrisContainer]');
// create the grid boxes inside the tetris environment
// this script is majorly  one-based instead of ZeroBased
const totalNumberOfGridBoxes = 221;
// number of grid boxes built
let numberOfGridBoxesBuilt = 1;

// define the number of columns that the tetris environment would have
const totalNumberOfColumns = 10;
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
<<<<<<< HEAD

=======
    // append the built gridbox to the gameEnvironment
>>>>>>> 04f772f9e6897296da50c5eb8948af76277a6cd3
    tetrisEnvironment.appendChild(buildGridBox);

    //---------- divide the environment into rows and columns
    // grid position (y-coordinate)
    let y = 0;
    if (numberOfGridBoxesBuilt % totalNumberOfColumns == 0) y = totalNumberOfColumns;
    else y = numberOfGridBoxesBuilt % totalNumberOfColumns;

    buildGridBox.setAttribute('data-gridColumn', y);
<<<<<<< HEAD
    // add gridRows attribute per gridbox
    buildGridBox.setAttribute('data-gridRow', gridRows);

    // grid rows
    if (numberOfGridBoxesBuilt % totalNumberOfColumns == 0) {
        gridRows++;
    }


    // define the gridboxes in the last row
    // if the built grid box (gridbox attribute) is less than the total number of gridboxes minus the total number of columns, it is in the bottom row
    if (buildGridBox.getAttribute('data-gridBox') > totalNumberOfGridBoxes - totalNumberOfColumns - 1) {

        buildGridBox.setAttribute('data-bottomRow', true);
        // make the bottom sticky to trap tetraminoes
        buildGridBox.setAttribute('data-gridBoxStack', true);

=======

    // grid rows
    if (numberOfGridBoxesBuilt % totalNumberOfColumns == 0 || numberOfGridBoxesBuilt % totalNumberOfColumns == 1) {
        buildGridBox.setAttribute('data-gridRow', gridRows);
        gridRows++;
    }
    // define the gridboxes in the last row
    // if the built grid box (gridbox attribute) is less than the total number of gridboxes minus the total number of columns, it is in the bottom row
    if (buildGridBox.getAttribute('data-gridBox') > totalNumberOfGridBoxes - totalNumberOfColumns - 1) {
        buildGridBox.setAttribute('data-bottomRow', true);
>>>>>>> 04f772f9e6897296da50c5eb8948af76277a6cd3
    }



    // define the columns at the edges
    if (numberOfGridBoxesBuilt % totalNumberOfColumns == 0 || numberOfGridBoxesBuilt % totalNumberOfColumns == 1) buildGridBox.setAttribute('data-edgeColumn', true);

    // inncrement the number of gridboxes built by adding one
    numberOfGridBoxesBuilt++;
}
<<<<<<< HEAD
// select all the gridBoxes
const gridBoxes = document.querySelectorAll('[data-gridBox]');

// select all the gridrows
const allGridRows = document.querySelectorAll('[data-gridrow]');

// -----------------------------------/delete

// score board
const scoreBoard = document.querySelector('[data-scoreBoard]');
=======
const gridBoxes = document.querySelectorAll('[data-gridBox]');

// -----------------------------------/delete

>>>>>>> 04f772f9e6897296da50c5eb8948af76277a6cd3


const tetraminoes = [
    //T-Tetraminos
    [
        // Tetramino cssClassName
        'T-Tetramino',
        // view one
        [1, 2, 3, 12],
        // rotation two
        [1, 11, 12, 21],
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
<<<<<<< HEAD
    buildGameEnvironment() {}
=======
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
            // grid position (y-coordinate)
            let y = 0;
            if (numberOfGridBoxesBuilt % totalNumberOfColumns == 0) y = totalNumberOfColumns;
            else y = numberOfGridBoxesBuilt % totalNumberOfColumns;

            buildGridBox.setAttribute('data-gridColumn', y);

            // grid rows
            if (numberOfGridBoxesBuilt % totalNumberOfColumns == 0 || numberOfGridBoxesBuilt % totalNumberOfColumns == 1) {
                buildGridBox.setAttribute('data-gridRow', gridRows);
                gridRows++;
            }

            // define the columns at the edges
            if (numberOfGridBoxesBuilt % totalNumberOfColumns == 0 || numberOfGridBoxesBuilt % totalNumberOfColumns == 1) buildGridBox.setAttribute('data-edgeColumn', true);

            // inncrement the number of gridboxes built by adding one
            numberOfGridBoxesBuilt++;
        }

    }
>>>>>>> 04f772f9e6897296da50c5eb8948af76277a6cd3

    // -------basic game functionality

    //------------- start the game
<<<<<<< HEAD
    startGame() {
        this.score = 0.00;
        this.interval = 700;
        this.gameTimer = setInterval(() => this.moveTetraminoDown(), this.interval)
    }
=======
    startGame() {}
>>>>>>> 04f772f9e6897296da50c5eb8948af76277a6cd3

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

    // clear defaults (reste all tetramino properties )
    resetTetramino() {
<<<<<<< HEAD
        this.rightEdge = '';
        this.leftEdge = '';
        this.interval = '';
=======
>>>>>>> 04f772f9e6897296da50c5eb8948af76277a6cd3
        this.tetramino = '';
        this.tetraminoName = '';
        this.tetraminoViewOne = '';
        this.tetraminoViewTwo = '';
        this.tetraminoViewThree = '';
        this.tetraminoViewFour = '';
        this.tetraminoCoordinates = '';
        this.tetraminoColumn = '';
        this.tetraminoName = '';
        this.selectTetramino();
    }

<<<<<<< HEAD

    // ---------tetraminoes
    selectTetramino() {

        //--------------------- select a random tetramino
        // the interval for moving tetraminoes
        this.interval = 700;
=======
    // ---------tetraminoes
    selectTetramino() {


        //--------------------- select a random tetramino
>>>>>>> 04f772f9e6897296da50c5eb8948af76277a6cd3

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

        // array of tetramino views  (you should be able to loop through this array, find the currently displayed array and then display the next one or previous one);
        this.tetraminoViews = [this.tetraminoViewOne, this.tetraminoViewTwo, this.tetraminoViewThree, this.tetraminoViewFour];


        // Default tetramino view
        this.tetraminoView = this.tetraminoViewOne;
        //------------ tetramino position
        // by default, let the tetraminoes start to drop from close to the center of the tetris container
        this.tetraminoRow = 1;
        this.tetraminoColumn = 4;
        // --------------draw the tetramino
        // pass parameters to the drawTetramino method to actually draw the tetramino that has been defined here
        this.drawTetramino(this.tetraminoName, this.tetraminoView, this.tetraminoRow, this.tetraminoColumn);

    }

    //---------------------------- rotate Tetramino

    rotateTetramino() {

        // check if rotatating the tetramino would make it overlap into the next row
        // if it would, move it one or two steps back(column wise)
        // if at left edge
        if (this.leftEdge) return;
        if (this.rightEdge) return;


<<<<<<< HEAD

=======
>>>>>>> 04f772f9e6897296da50c5eb8948af76277a6cd3
        // reset edges(confer tetris.movetetraminoRight, tetris.moveTetraminoLeft)
        // so tha the tetraminoes would be able to rotate after having visited the edge boxes
        // visiting the leftedge for example would make you only able to move right so you have to reset it

        this.rightEdge = false;
        this.leftEdge = false;

        //  clean the currently displayed tetramino views
        this.cleanTetramino();
        // find the index position of the current view position
        let index = this.tetraminoViews.indexOf(this.tetraminoView);

        // increment the index
        index++;
        // reset the value of the index if it goes out of range
        if (index >= this.tetraminoViews.length) index = 0;
        // reassign values
        this.tetraminoView = this.tetraminoViews[index];
        // redraw the tetramino
        this.drawTetramino(this.tetraminoName, this.tetraminoView, this.tetraminoRow, this.tetraminoColumn);

    }



    //---------------------- move tetramino left
    moveTetraminoLeft() {
        // reset the right edge (confer moveTetraminoRight)
        if (this.rightEdge == true) this.rightEdge = false;
        // return if the grid box is at the left edge
        if (this.leftEdge == true) return;
        //check if adding 1 to the present grid columns would make it spill over beyond the edge columns
        // select all the edgecolumns and loop through them.
        let edgecolumns = document.querySelectorAll('[data-edgecolumn]');
        edgecolumns.forEach((edgecolumn) => {
            // loop through the present grid coordinates(positions) check if adding one would make it display beyound the edge column
            this.tetraminoCoordinates.forEach((coordinate) => {
                if ((edgecolumn.getAttribute('data-gridBox') == coordinate - 1) && (edgecolumn.getAttribute('data-gridBox') % totalNumberOfColumns == 1)) {
                    this.leftEdge = true;
                }
            });
        });

        // clean the tetramino
        this.cleanTetramino();
        // subtract 1 from the tetramino column coordinate so that it tends to the left

        this.tetraminoColumn -= 1;

<<<<<<< HEAD
=======

>>>>>>> 04f772f9e6897296da50c5eb8948af76277a6cd3
        // redraw the tetramino with the new coordinates
        this.drawTetramino(this.tetraminoName, this.tetraminoView, this.tetraminoRow, this.tetraminoColumn);
    }

    //----------------------- move tetramino right
    moveTetraminoRight() {
        // reset the left edges (confer movetetraminoRight())
        if (this.leftEdge == true) { this.leftEdge = false; }
        // if the tetramino is at the right edge, return
        if (this.rightEdge == true) return;

        //check if adding 1 to the present grid columns would make it spill over beyond the edge columns (if so, the tetramino is at the edge)
        // select all the edgecolumns and loop through them.
        let edgecolumns = document.querySelectorAll('[data-edgecolumn]');
        edgecolumns.forEach((edgecolumn) => {
            // loop through the present grid coordinates(positions) check if adding one would make it display beyound the edge column
            this.tetraminoCoordinates.forEach((coordinate) => {
                if (edgecolumn.getAttribute('data-gridBox') == coordinate + 1) {
                    this.rightEdge = true;
                }
            });
        });

        // clean the tetramino
        this.cleanTetramino();
        // add 1 to the tetramino column coordinate so that it tends to the left
        this.tetraminoColumn += 1;

        // redraw the tetramino with the new coordinates
        this.drawTetramino(this.tetraminoName, this.tetraminoView, this.tetraminoRow, this.tetraminoColumn);
    }

    //------------------ move tetramino down by the second (call on interval)
    moveTetraminoDown() {

<<<<<<< HEAD
        // check if the gridBoxes one row away (10 columns away) has a class list.
        // if it does, call the reset and function and drop the next this.tetramino;




        // check the tetramino has reached the bottom row.
        // if it has, select a new tetramino and start bringing it down
        if (this.tetraminoGridBoxes.getAttribute('data-gridBoxStack')) {

            // add a attribute of 'data-gridBoxStack' so that it sticks  and piles

            // loop through gridBoxes and tetramino coordiinates and add an attribute of 'data-gridBoxStack'

            gridBoxes.forEach((gridBox) => {

                // BUG TO FIX ------> MANY TIMES, THE TETRAMINOES DON'T STACK PROPERLY AND OVERLAP INSTEAD (ESPECIALLY THE Z-TETRAMINO)
                this.tetraminoCoordinates.forEach((coordinate) => {
                    if (gridBox.getAttribute('data-gridBox') == coordinate - totalNumberOfColumns)
                        gridBox.setAttribute('data-gridBoxStack', true);
                });
            });
=======
        // check the tetramino has reached the bottom row.
        // if it has, select a new tetramino and start bringing it down
        if (this.tetraminoGridBoxes.getAttribute('data-bottomRow')) {
            // add a attribute of 'data-bottomRow' so that it sticks  and piles

            // loop through gridBoxes and tetramino coordiinates and add an attribute of 'data-bottomRow'

            gridBoxes.forEach((gridBox) => {
                this.tetraminoCoordinates.forEach((coordinate) => {
                    if (gridBox.getAttribute('data-gridBox') == coordinate - totalNumberOfColumns) gridBox.setAttribute('data-bottomRow', true);
                })
            })
>>>>>>> 04f772f9e6897296da50c5eb8948af76277a6cd3
            this.resetTetramino();
        }


        // clean the current tetramino position
        this.cleanTetramino();
        // increment the column to start displaying by totalNumberOfColumns, as totalNumberOfColumns columns will equal one row
        this.tetraminoColumn += totalNumberOfColumns;
        // draw the tetramino again with  the new coordinates
        this.drawTetramino(this.tetraminoName, this.tetraminoView, this.tetraminoRow, this.tetraminoColumn);
<<<<<<< HEAD

        clearInterval(this.gameTimer);
        this.gameTimer = setInterval(() => this.moveTetraminoDown(), this.interval);

        // award score
        this.awardPoint();
    }

    //---------------------- pull tetramino down (after user has selected a shape and wants to save time)
    pullTetraminoDown() {
        clearInterval(this.gameTimer);
        this.interval = 10;
        this.gameTimer = setInterval(() => { this.moveTetraminoDown(); }, this.interval);

    }


    // awardPoint
    awardPoint() {
        // the current gridRow whose completeness is being checked
        let currentGridRow = 22;
        let completeGridBoxesInRow = 0;
        gridBoxes.forEach((gridBox) => {
            if (gridBox.getAttribute('data-gridRow') == currentGridRow && gridBox.classList.length > 0) {
                completeGridBoxesInRow++;
                if (completeGridBoxesInRow == totalNumberOfColumns) {
                    // loop through the row of gridBoxes to clear and clear them

                    gridBoxes.forEach((gridBoxToClear) => {
                        if (gridBoxToClear.getAttribute('data-gridrow') == currentGridRow) {
                            // clear the class List
                            gridBoxToClear.classList = '';
                        } else {
                            // -----------if the gridbox is not to be cleared, pull it down until it touches the bottom or
                            //----------- touches the next gridBoxStack

                            //find the current location of each coloured gridBox on the screen
                            // check if it can be moved down by one column. if it can, pull it down and keep pulling it down until it
                            // touches either the bottom or the next gridBoxStack

                        }
                    });

                }


            }
        })
    }


    // ----------class ends
=======
    }

    //---------------------- pull tetramino down (after user has selected a shape and wants to save time)
    pullTetraminoDown() {}


>>>>>>> 04f772f9e6897296da50c5eb8948af76277a6cd3
}

// create an instanceof the tetris game
const tetris = new Tetris();
tetris.selectTetramino();


// key presses and key codes (set event listeners for key presses so as to rotate the keys, pull them down etc)
<<<<<<< HEAD
document.addEventListener('keyup', event => {
=======
document.addEventListener('keydown', event => {
>>>>>>> 04f772f9e6897296da50c5eb8948af76277a6cd3

    // rotate tetramino (spacebar / control key)
    if (event.which === 32) {
        tetris.rotateTetramino();
    }
    // move tetramino to the left
    if (event.which === 37) {
        tetris.moveTetraminoLeft();
    }

    // move tetramino to the right
    if (event.which === 39) {
        tetris.moveTetraminoRight();
    }
<<<<<<< HEAD

    // pull tetramino down
    if (event.which === 40) {
        tetris.pullTetraminoDown();
    }
});


// start the game
tetris.startGame();
=======
});


// set interval to move the tetramino down ?
var moveTetrmino = setInterval(() => tetris.moveTetraminoDown(), 700)
>>>>>>> 04f772f9e6897296da50c5eb8948af76277a6cd3
