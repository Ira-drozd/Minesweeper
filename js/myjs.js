function createGrid( row, col) {
    let grid = [];
    for (let i = 0; i < row; i++) {
        grid[i] = [];
        for (let j = 0; j < col; j++) {

            grid[i][j] = 0;

        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (i == j) {
                grid[i][j] = 'bomb';
                grid.sort(function () {
                    return Math.random() - 0.5;
                });
            }

        }
    }

   generateHelp(grid);
   printGrid(grid);
  // console.log(grid);
   // return grid;

}

function generateHelp(grid) {

    //right
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] == 'bomb') {
                let counter;
                //right
                if (j + 1 < grid.length) { //&& j-1>-1 && i-1>-1 && i + 1<grid.length

                    counter = grid[i][j + 1];
                    if (grid[i][j + 1] == 'bomb') {
                        grid[i][j + 1] = counter;
                    } else {
                        grid[i][j + 1] = counter + 1;
                    }
                    //right-top
                    if (i - 1 > -1) {
                        counter = grid[i - 1][j + 1];
                        if (grid[i][j] == 'bomb') {

                            if (grid[i - 1][j + 1] == 'bomb') {
                                grid[i - 1][j + 1] = counter;
                            } else {
                                grid[i - 1][j + 1] = counter + 1;
                            }
                        }
                    }
                    //right-bottom
                    if (i + 1 < grid.length) {
                        counter = grid[i + 1][j + 1];
                        if (grid[i][j] == 'bomb') {

                            if (grid[i + 1][j + 1] == 'bomb') {
                                grid[i + 1][j + 1] = counter;
                            } else {
                                grid[i + 1][j + 1] = counter + 1;
                            }
                        }
                    }
                }
                //left
                if (j - 1 > -1) {

                    counter = grid[i][j - 1];
                    if (grid[i][j - 1] == 'bomb') {
                        grid[i][j - 1] = counter;
                    } else {
                        grid[i][j - 1] = counter + 1;
                    }
                    //left-top
                    if (i - 1 > -1) {
                        counter = grid[i - 1][j - 1];
                        if (grid[i][j] == 'bomb') {

                            if (grid[i - 1][j - 1] == 'bomb') {
                                grid[i - 1][j - 1] = counter;
                            } else {
                                grid[i - 1][j - 1] = counter + 1;
                            }
                        }
                    }
                    //left-bottom
                    if (i + 1 < grid.length) {
                        counter = grid[i + 1][j - 1];
                        if (grid[i][j] == 'bomb') {

                            if (grid[i + 1][j - 1] == 'bomb') {
                                grid[i + 1][j - 1] = counter;
                            } else {
                                grid[i + 1][j - 1] = counter + 1;
                            }
                        }
                    }
                }
                //top
                if (i - 1 > -1) {
                    counter = grid[i - 1][j];
                    if (grid[i][j] == 'bomb') {

                        if (grid[i - 1][j] == 'bomb') {
                            grid[i - 1][j] = counter;
                        } else {
                            grid[i - 1][j] = counter + 1;
                        }

                    }
                }
                //bottom
                if (i + 1 < grid.length) {
                    counter = grid[i + 1][j];
                    if (grid[i][j] == 'bomb') {

                        if (grid[i + 1][j] == 'bomb') {
                            grid[i + 1][j] = counter;
                        } else {
                            grid[i + 1][j] = counter + 1;
                        }
                    }
                }

            }
        }
    }
    return grid;
}

function printGrid(grid) {

    const printG = document.querySelector('.grid');
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {

            let divElem = document.createElement('div');
            divElem.classList.add('elem') ;
            divElem.innerHTML = grid[i][j];
            printG.append(divElem);

            if (divElem.innerHTML == 1) {
                divElem.style.color = 'green';
            }
            if (divElem.innerHTML == 2) {
                divElem.style.color = 'blue';
            }
            if (divElem.innerHTML == 3) {
                divElem.style.color = 'red';
            }
        }
    }
}

/*document.getElementById("button").addEventListener("click", function(){
    let width = parseInt(document.getElementById("width").value);
    let height = parseInt(document.getElementById("height").value);
    createGrid(width, height);

});*/

document.getElementById("button").addEventListener("click", createGrid(10,10));

//document.addEventListener("DOMContentLoaded", createGrid(10, 10));

/*document.getElementById("button").onclick = function(){
    let width = parseInt(document.getElementById("width").value);
    let height = parseInt(document.getElementById("height").value);
   let grid =createGrid(width, height);

}*/

//////////////////
/*
function stayFor(){
        let width = parseInt(document.getElementById("width").value);
        let height = parseInt(document.getElementById("height").value);
        let grid =createGrid(width, height);
}


//button.addEventListener("click", stayFor);
button.onclick=stayFor;
*/

