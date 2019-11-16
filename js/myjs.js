function createGrid(row, col) {
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
                grid[i][j] = 'b';
                grid.sort(function () {
                    return Math.random() - 0.5;
                });
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        grid[i].push(0);
        grid[i].unshift(0);
    }

    let nullRow=[];
    for(let r=0; r<row+2; r++){
        nullRow[r]=0;
    }
    grid.push(nullRow);
    grid.unshift(nullRow);

    console.log(grid);
    // generateHelp(grid);
    //printGrid(grid);

    return grid;

}


/*
function createGrid(row, col) {
    let grid = [];
    for (let i = 0; i < row; i++) {
        grid[i] = [];
        for (let j = 0; j < col; j++) {
            grid[i][j] =0;

        }
    }



    for (let i = 0; i < grid.length; i++) {
grid[i].push(8);
        grid[i].unshift(8);
        for (let j = 0; j < grid.length; j++) {

        }
    }

    let nullRow=[];
    for(let r=0; r<row+2; r++){
        nullRow[r]=0;
    }
    grid.push(nullRow);
    grid.unshift(nullRow);


    console.log(grid);

}
*/


/*function createGrid(row, col) {
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
    return grid;

}*/

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

/*function generateHelp(grid) {

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
}*/

function printGrid(grid) {
    console.log(grid);
    const printG = document.querySelector('.grid');
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {

            let divElem = document.createElement('div');
            divElem.classList.add('elem');
            divElem.innerHTML = grid[i][j];
            printG.append(divElem);

        }

    }

}


function stayFor() {
    let width = parseInt(document.getElementById("width").value);
    let height = parseInt(document.getElementById("height").value);
    //if (width && height) {
    let grid = createGrid(10, 10);//!!!!!!!!!!
    document.querySelector(".create-grid").style.display = "none";
    // }
    // return false;
}

document.getElementById("create-button").addEventListener("click", stayFor);

//document.getElementById("create-button").onclick=stayFor;

function openDiv() {
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

document.addEventListener("click", openDiv);


function putFlag() {
    let divElem = document.querySelectorAll(".elem");
    /*divElem.addEventListener('contextmenu', e => {
        e.preventDefault();
    });*/
    for (let elem of divElem) {


        elem.addEventListener('contextmenu', function () {
            elem.classList.toggle("elem-flag");
        });

        elem.addEventListener('contextmenu', e => {
            e.preventDefault();
        });

    }
}

document.addEventListener('contextmenu', putFlag);



