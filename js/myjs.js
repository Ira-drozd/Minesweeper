// create zero array

function createGrid(row, col) {
    let grid = [];

    for (let i = 0; i < row; i++) {
        grid[i] = [];
        for (let j = 0; j < col; j++) {
            grid[i][j] = 0;
        }
    }

//add expansion function

    createMines(grid);
    expansionGrid(grid);
    generateNeighbors(grid);
    displayGrid(grid);
    console.log(grid);
    return grid;
}

//create and random mines

function createMines(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (i == j) {
                grid[i][j] = 'bomb';
            }

            for (let i = grid.length - 1; i > 0; i--) {
                let randomIndex = Math.floor(Math.random() * (i + 1));
                let randomElement = grid[randomIndex];
                grid[randomIndex] = grid[i];
                grid[i] = randomElement;
            }

        }
    }
    return grid;
}

// expansion grid (add 0-row-col around) to search for neighbors

function expansionGrid(grid) {
    let nullRow = [];

    for (let i = 0; i < grid.length; i++) {
        grid[i].push(0);
        grid[i].unshift(0);
    }
    for (let j = 0; j < grid.length + 2; j++) {
        nullRow[j] = 0;
    }
    grid.push(nullRow);
    grid.unshift(nullRow);

    return grid;
}

// create neighbors-counter

function generateNeighbors(grid) {

    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid.length - 1; j++) {

            let arrayNeighbor = [[i, j + 1], [i, j - 1], [i - 1, j], [i + 1, j], [i - 1, j + 1], [i + 1, j + 1], [i - 1, j - 1], [i + 1, j - 1]];
            for (let subarrayNeighbor = 0; subarrayNeighbor < arrayNeighbor.length; subarrayNeighbor++) {

                if (grid[i][j] == 'bomb') {

                    let neighborRow = arrayNeighbor[subarrayNeighbor][0];
                    let neighborCol = arrayNeighbor[subarrayNeighbor][1];

                    let counter = grid[neighborRow][neighborCol];
                    if (grid[neighborRow][neighborCol] == 'bomb') {
                        grid[neighborRow][neighborCol] = counter;
                    } else {
                        grid[neighborRow][neighborCol] = counter + 1;
                    }
                }
            }
        }
    }
    return grid;
}

// display finished grid

function displayGrid(grid) {
    const elementGrid = document.querySelector('.grid');
    const countRow = grid.length - 2;
    const widthGrid = countRow * 50.2 + "px";

    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid.length - 1; j++) {
//from width grid
            elementGrid.style.width = widthGrid;
            let divElem = document.createElement('div');
            divElem.classList.add('elem');
            divElem.innerHTML = grid[i][j];
            elementGrid.append(divElem);
        }
    }
}

// get dimension grid

function getSizeGrid() {
    /*let width = parseInt(document.getElementById("width").value);
    let height = parseInt(document.getElementById("height").value);*/
    let complexity = parseInt(document.getElementById("complexity").value);
    if (complexity) {
        createGrid(complexity, complexity);
        document.querySelector(".create-grid").style.display = "none";
    }
}

document.getElementById("create-button").addEventListener("click", getSizeGrid);

// open div-element in grid

function openCells() {
    let divElem = document.querySelectorAll(".elem");
    //  console.log(typeof (divElem));//collection obj set
    for (let elem of divElem) {
        //   console.log(typeof (elem));
        elem.addEventListener("click", function () {
            elem.style.backgroundColor = "#828282";
            if (elem.innerHTML == 1) {
                elem.style.color = 'green';
            }
            if (elem.innerHTML == 2) {
                elem.style.color = 'blue';
            }
            if (elem.innerHTML == 3) {
                elem.style.color = 'red';
            }
            if (elem.innerHTML == "bomb") {
                elem.innerHTML = "\uD83D\uDCA3";
                alert("Game over");
            }
            if (elem.innerHTML == 0) {
                elem.innerHTML = " ";
            }
        });
    }
}

document.addEventListener("click", openCells);

//create toggle flags

function toggleFlag() {
    let divElem = document.querySelectorAll(".elem");
    for (let elem of divElem) {
        elem.addEventListener('contextmenu', function () {

            elem.classList.toggle("elem-flag");
        });
    }
}

//cancel default contextmenu

document.addEventListener('contextmenu', e => {
    e.preventDefault();
    toggleFlag();
});
