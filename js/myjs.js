function createGrid(row, col) {


    let array = [];
    for (let i = 0; i < row; i++) {
        array[i] = [];
        for (let j = 0; j < col; j++) {
            array[i][j] = 0;


            /*var div = document.createElement('div');
                     div.className = 'cell';
                     array[i][j] = div;
                   div.innerHTML = (3 * i) + j + 1;*/

            // array[i][j]= 0;
            //Math.floor(Math.random() * Math.floor(2));
        }
    }

    //diagonal ramdom


    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            //  array[i][j]= 0;

            if (i == j) {
                array[i][j] = 'bomb';
                array.sort(function () {
                    return Math.random() - 0.5;
                });
            }
        }
    }


    //right
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] == 'bomb') {
                let counter;
                //right
                if (j + 1 < array.length) { //&& j-1>-1 && i-1>-1 && i + 1<array.length

                    counter = array[i][j + 1];
                    if (array[i][j + 1] == 'bomb') {
                        array[i][j + 1] = counter;
                    } else {
                        array[i][j + 1] = counter + 1;
                    }
                }
                //left
                if (j - 1 > -1) {

                    counter = array[i][j - 1];
                    if (array[i][j - 1] == 'bomb') {
                        array[i][j - 1] = counter;
                    } else {
                        array[i][j - 1] = counter + 1;
                    }
                }
                //top
                if (i - 1 > -1) {
                    counter = array[i - 1][j];
                    if (array[i][j] == 'bomb') {

                        if (array[i - 1][j] == 'bomb') {
                            array[i - 1][j] = counter;
                        } else {
                            array[i - 1][j] = counter + 1;
                        }

                    }
                }
                //bottom
                if (i + 1 < array.length) {
                    counter = array[i + 1][j];
                    if (array[i][j] == 'bomb') {

                        if (array[i + 1][j] == 'bomb') {
                            array[i + 1][j] = counter;
                        } else {
                            array[i + 1][j] = counter + 1;
                        }
                    }
                }
//
            }
        }
    }

        /*
          //right
         for (let i = 0; i < array.length; i++) {
             for (let j = 0; j < array.length - 1; j++) {
                 let counter = array[i][j + 1];
                 if (array[i][j] == 'bomb') {

                     if (array[i][j + 1] == 'bomb') {
                         array[i][j + 1] = counter;
                     } else {
                         array[i][j + 1] = counter + 1;
                     }
                 }
             }
         }
        //left
         for (let i = 0; i < array.length; i++) {
             for (let j = 1; j < array.length; j++) {
                 let counter = array[i][j - 1];
                 if (array[i][j] == 'bomb') {

                     if (array[i][j - 1] == 'bomb') {
                         array[i][j - 1] = counter;
                     } else {
                         array[i][j - 1] = counter + 1;
                     }
                 }
             }
         }

         //top
         for (let i = 1; i < array.length; i++) {
             for (let j = 0; j < array.length; j++) {
                 let counter = array[i - 1][j];
                 if (array[i][j] == 'bomb') {

                     if (array[i - 1][j] == 'bomb') {
                         array[i - 1][j] = counter;
                     } else {
                         array[i - 1][j] = counter + 1;
                     }
                 }
             }
         }

         //bottom
         for (let i = 0; i < array.length - 1; i++) {
             for (let j = 0; j < array.length; j++) {
                 let counter = array[i + 1][j];
                 if (array[i][j] == 'bomb') {

                     if (array[i + 1][j] == 'bomb') {
                         array[i + 1][j] = counter;
                     } else {
                         array[i + 1][j] = counter + 1;
                     }
                 }
             }
         }

         //right-top
         for (let i = 1; i < array.length; i++) {
             for (let j = 0; j < array.length - 1; j++) {
                 let counter = array[i - 1][j + 1];
                 if (array[i][j] == 'bomb') {

                     if (array[i - 1][j + 1] == 'bomb') {
                         array[i - 1][j + 1] = counter;
                     } else {
                         array[i - 1][j + 1] = counter + 1;
                     }
                 }
             }
         }

         //left-top
         for (let i = 1; i < array.length; i++) {
             for (let j = 1; j < array.length; j++) {
                 let counter = array[i - 1][j - 1];
                 if (array[i][j] == 'bomb') {

                     if (array[i - 1][j - 1] == 'bomb') {
                         array[i - 1][j - 1] = counter;
                     } else {
                         array[i - 1][j - 1] = counter + 1;
                     }
                 }
             }
         }

         //right-bottom
         for (let i = 0; i < array.length - 1; i++) {
             for (let j = 0; j < array.length - 1; j++) {
                 let counter = array[i + 1][j + 1];
                 if (array[i][j] == 'bomb') {

                     if (array[i + 1][j + 1] == 'bomb') {
                         array[i + 1][j + 1] = counter;
                     } else {
                         array[i + 1][j + 1] = counter + 1;
                     }
                 }
             }
         }

         //left-bottom
         for (let i = 0; i < array.length - 1; i++) {
             for (let j = 1; j < array.length; j++) {
                 let counter = array[i + 1][j - 1];
                 if (array[i][j] == 'bomb') {

                     if (array[i + 1][j - 1] == 'bomb') {
                         array[i + 1][j - 1] = counter;
                     } else {
                         array[i + 1][j - 1] = counter + 1;
                     }
                 }
             }
         }*/


        const grid = document.querySelector('.grid');
        //gread html
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {

                const divElem = document.createElement('div');
                divElem.className = 'elem';
                divElem.innerHTML = array[i][j];
                grid.append(divElem);

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

        console.log(array);
        return array;

    }

    function createBomb(array) {

    }

//console.log(createGrid(3,3));
//createGrid(10,10);

    document.addEventListener("DOMContentLoaded", createGrid(10, 10));
