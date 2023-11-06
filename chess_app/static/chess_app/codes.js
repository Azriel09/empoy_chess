// //draw pieces on squares
// function drawPiece(piece, x, y) {
//     const svgString = getSvgStringForPiece(piece);
//     const image = new Image();
    
//     // Create a data URL for the SVG image
//     const blob = new Blob([svgString], { type: 'image/svg+xml' });
//     const url = URL.createObjectURL(blob);

//     image.onload = function () {
//         context.drawImage(image, x, y, square_size, square_size);
//         URL.revokeObjectURL(url); // Clean up the URL
//     };

//     image.src = url;
// }

// function getSvgStringForPiece(piece) {
//     // Define SVG strings for each chess piece
//     let svgString = '';
//     let pieceHeight = '1em';
//     if (square_size < 50) {
//         pieceHeight = '0.5em';
//     }
//     switch (piece) {
//         case 'king':
//             svgString = '<svg id ="king" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"> <path d="M224 0c17.7 0 32 14.3 32 32V48h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H256v48H408c22.1 0 40 17.9 40 40c0 5.3-1 10.5-3.1 15.4L368 400H80L3.1 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40H192V112H176c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V32c0-17.7 14.3-32 32-32zM38.6 473.4L80 432H368l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H54.6C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16z"/></svg>'
//             break;
//         // case 'queen':
//         //     svgString = '<svg id = "queen" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"> <path d="M256 0a56 56 0 1 1 0 112A56 56 0 1 1 256 0zM134.1 143.8c3.3-13 15-23.8 30.2-23.8c12.3 0 22.6 7.2 27.7 17c12 23.2 36.2 39 64 39s52-15.8 64-39c5.1-9.8 15.4-17 27.7-17c15.3 0 27 10.8 30.2 23.8c7 27.8 32.2 48.3 62.1 48.3c10.8 0 21-2.7 29.8-7.4c8.4-4.4 18.9-4.5 27.6 .9c13 8 17.1 25 9.2 38L399.7 400H384 343.6 168.4 128 112.3L5.4 223.6c-7.9-13-3.8-30 9.2-38c8.7-5.3 19.2-5.3 27.6-.9c8.9 4.7 19 7.4 29.8 7.4c29.9 0 55.1-20.5 62.1-48.3zM256 224l0 0 0 0h0zM112 432H400l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H86.6C74.1 512 64 501.9 64 489.4c0-6 2.4-11.8 6.6-16L112 432z"/></svg>';
//         //     break;
//         // case 'knight':
//         //     svgString = '<svg id = "knight" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"> <path d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5V238.9c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400H384l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H409.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64L22.6 473.4z"/> </svg>';
//         //     break;
//         // case 'bishop':
//         //     svgString = '<svg id = "bishop" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"> <path d="M128 0C110.3 0 96 14.3 96 32c0 16.1 11.9 29.4 27.4 31.7C78.4 106.8 8 190 8 288c0 47.4 30.8 72.3 56 84.7V400H256V372.7c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L270.8 154.6c-23.2-38.1-51.8-69.5-74.2-90.9C212.1 61.4 224 48.1 224 32c0-17.7-14.3-32-32-32H128zM48 432L6.6 473.4c-4.2 4.2-6.6 10-6.6 16C0 501.9 10.1 512 22.6 512H297.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L272 432H48z"/></svg>';
//         //     break;
//         // case 'rook':
//         //     svgString = '<svg id = "rook" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"> <path d="M32 192V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V192c0 10.1-4.7 19.6-12.8 25.6L352 256l16 144H80L96 256 44.8 217.6C36.7 211.6 32 202.1 32 192zm176 96h32c8.8 0 16-7.2 16-16V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM22.6 473.4L64 432H384l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H38.6C26.1 512 16 501.9 16 489.4c0-6 2.4-11.8 6.6-16z"/></svg>';
//         //     break;
//         // case 'pawn':
//         //     svgString = '<svg id = "pawn" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"> <path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/> </svg>';
//         //     break;
//     }
//     return svgString;
// }


// function draw_darksquares(fillFunction){
//     let square_counter_dark = 0;
//     let square_x = starting_pointx;
//     let square_y = starting_pointy;
//     for (let a = 0; a < 8; a++) {
//         for (let b = 0; b < 4; b++) {
 
//             fillFunction(square_x, square_y, square_size);
//             square_y = square_y + square_size * 2;
//         }
//         square_counter_dark = square_counter_dark + 1;
//         square_x = square_x + square_size;
//         if (square_counter_dark % 2 === 1) {
//             square_y = starting_pointy + square_size;
//         } else {
//             square_y = starting_pointy;
//         }
//     }
// }

// function draw_lightsquares(fillFunction, i) {
//     let square_counter_white = 0;
//     let square_x = starting_pointx;
//     let square_y = starting_pointy + square_size;
//     for (let a = 0; a < 8; a++) {
//         for (let b = 0; b < 4; b++) {
//             fillFunction(square_x, square_y, square_size);
//             square_y = square_y + square_size * 2;
//         }
//         square_counter_white = square_counter_white + 1;
//         square_x = square_x + square_size;
//         if (square_counter_white % 2 === 1) {
//             square_y = starting_pointy;
//         } else {
//             square_y = starting_pointy + square_size;
//         }
//     }
// }


//Verifies if the Start button is clicked and only then allows the draw_chessboard() function to be called
function draw_chessboard() {
    //checks if start button is clicked
    if (!chessboardStarted) {
        return;
    }
    for (let row = 0; row < 8; row++) {
            play_white();
            player_choice === "black" ? play_black() : play_white()
        }
    }
    let switchState = true; // Initial state
    function switch_chessboard(){
        if (switchState) {
            player_choice = "black";
            draw_chessboard();
        } else {
            player_choice =  "white";
            draw_chessboard();
        }
        // Toggle the switch state for the next call
        switchState = !switchState;
    }



document.getElementById("startbtn").addEventListener("click", function () {
    chessboardStarted = true; // Set the chessboard as started
    draw_chessboard(); // Draw the chessboard
});


    //board POV
    function play_white(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        // draw_darksquares(fill_white);
        // draw_lightsquares(fill_dark);
        draw_squares();
        draw_letters(lettersAscending);
        draw_numbers(numbersDescending);
        draw_chessborder();
    }
    function play_black(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        // draw_darksquares(fill_white);
        // draw_lightsquares(fill_dark);
        draw_squares();
        draw_letters(lettersDescending);
        draw_numbers(numbersAscending);
        draw_chessborder();
    }



    // add svg to arrow buttons
// document.addEventListener("DOMContentLoaded", function () {
//     // Set the SVG data as the src attribute for the image elements
//     document.getElementById("arrowUpIcon").src = "data:image/svg+xml," + encodeURIComponent(arrowUp);
//     document.getElementById("arrowDownIcon").src = "data:image/svg+xml," + encodeURIComponent(arrowDown);
//     document.getElementById("arrowLeftIcon").src = "data:image/svg+xml," + encodeURIComponent(arrowLeft);
//     document.getElementById("arrowRightIcon").src = "data:image/svg+xml," + encodeURIComponent(arrowRight);
// });


//onclick buttons for resizing
function sbtn() {
    square_size = 35;
    draw_chessboard();
}
function mbtn() {

    square_size = 50;
    draw_chessboard();

}
function bbtn() {

    square_size = 65;
    draw_chessboard();

}

//theme colors
function tournament_color(){
    color_choice = "tournament";
    draw_chessboard();
}
function classic_color(){
    color_choice = "classic";
    draw_chessboard();
}
function wooden_color(){
    color_choice = "wooden";
    draw_chessboard();
}
function moveUp() {
if (starting_pointy == 0) {
    draw_chessboard();
}else{
    starting_pointy = starting_pointy - 10;
    draw_chessboard();
}
}

function moveDown() {

    starting_pointy = starting_pointy + 10;
    draw_chessboard();

}

function moveLeft() {
if (starting_pointx == 20) {
    draw_chessboard();
} else {
    starting_pointx = starting_pointx - 10;
    draw_chessboard();
}
}

function moveRight() {

    starting_pointx = starting_pointx + 10;
    draw_chessboard();

}

function addsize() {

    square_size = square_size + 4;
    draw_chessboard();

}

function minussize() {

    square_size = square_size - 4;
    draw_chessboard();

}


//svg for the arrow buttons
const arrowUp = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>'
const arrowDown = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"/></svg>'
const arrowLeft = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>'
const arrowRight = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>'

//svg for the pieces


const numbersAscending = ['1', '2', '3', '4', '5', '6', '7', '8'];
const numbersDescending = [...numbersAscending].reverse();
const lettersAscending = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const lettersDescending = [...lettersAscending].reverse();


let starting_pointx = 350; // add move right minus move left
let starting_pointy = 0; // add move down minus move up
let square_size = 45;


//draw chessborder
function draw_chessborder() {
    const borderSize = 2; // Adjust the size of the border as needed
    // Set the stroke color and width for the border
    context.strokeStyle = "black";
    context.lineWidth = borderSize;
    // Calculate the dimensions of the entire chessboard, including the border
    const chessboardWidth = square_size * 8;
    const chessboardHeight = square_size * 8;

    // Draw the border around the entire chessboard
    context.strokeRect(starting_pointx + borderSize / 2 , starting_pointy + borderSize / 2, chessboardWidth, chessboardHeight);
}

//draw annotations
function draw_numbers(numbers) {
    context.fillStyle = "black";
    context.font = "16px Arial";
    // Calculate the dimensions of the entire chessboard, including the border
    const borderSize = 2; // The same border size as in draw_chessborder
    const chessboardWidth = square_size * 8 + 2 * borderSize; // Include borderSize
    const chessboardHeight = square_size * 8 + 2 * borderSize; // Include borderSize

    for (let i = 0; i < numbers.length; i++) {
        // Calculate the x-coordinate for the left side of each square
        const squareLeftX = starting_pointx - 16; // 16 is the font size for spacing
        
        // Calculate the y-coordinate for the center of each square
        const squareCenterY = starting_pointy + borderSize + (i + 0.6) * square_size; 

        // Draw the number at the calculated position
        context.fillText(numbers[i], squareLeftX, squareCenterY);
    }
}

function draw_letters(letters) {
    context.fillStyle = "black";
    context.font = "16px Arial";
    // Calculate the dimensions of the entire chessboard, including the border
    const borderSize = 2; // The same border size as in draw_chessborder
    const chessboardWidth = square_size * 8 + 2 * borderSize; // Include borderSize
    const chessboardHeight = square_size * 8 + 2 * borderSize; // Include borderSize
    for (let i = 0; i < letters.length; i++) {
        // Calculate the x-coordinate for the center of each square
        const squareCenterX = starting_pointx + (i + 0.4) * square_size; //I used 0.4 because the array started at 0, therefore using .5 would exceed 1px
        
        // Calculate the y-coordinate for the bottom of the chessboard plus a little offset
        const y = starting_pointy + chessboardHeight + 16; // 16 is the font size for spacing

        // Draw the letter at the calculated position
        context.fillText(letters[i], squareCenterX , y);
    }
}

        // if ( i <= 15){
        // square.querySelector('svg').classList.add('blackpieces');
        // square.firstChild.firstChild.classList.add('blackpieces');
        // }
        //  if ( i >= 48){
        //     // square.querySelector('svg').classList.add('whitepieces');
        //     square.firstChild.firstChild.classList.add('whitepieces')
        //  }
        



    //fill colors for the squares (themes)
function fill_dark(x, y, size) {
    if (color_choice == "classic"){
        context.fillStyle = "rgb(170, 170, 170)"; 
        context.fillRect(x, y, size, size); 
    }
    else if (color_choice == "wooden"){
        context.fillStyle = "rgb(208, 138, 65)"; 
        context.fillRect(x, y, size, size); 
    }
    else if(color_choice == "tournament"){
        context.fillStyle = "rgb(117, 150, 85)"; 
        context.fillRect(x, y, size, size);
    }
    else{
        context.fillStyle = "rgb(170, 170, 170)"; 
        context.fillRect(x, y, size, size); 
    }
}
function fill_white(x, y, size) {
    if(color_choice == "classic"){
        context.fillStyle = "rgb(220, 220, 220)"; 
        context.fillRect(x, y, size, size);
    }
    else if(color_choice == "wooden"){
        context.fillStyle = "rgb(255, 199, 153)";
        context.fillRect(x, y, size, size); 
    }
    else if(color_choice == "tournament"){
        context.fillStyle = "rgb(237, 237, 209)"; 
        context.fillRect(x, y, size, size);
    }
    else{
        context.fillStyle = "rgb(220, 220, 220)"; 
        context.fillRect(x, y, size, size);
    }
}


// const canvas = document.getElementById("myCanvas");
// const context = canvas.getContext("2d");

const wking = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M248 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V56H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v40H59.6C26.7 144 0 170.7 0 203.6c0 8.2 1.7 16.3 4.9 23.8L59.1 352h52.3L49 208.2c-.6-1.5-1-3-1-4.6c0-6.4 5.2-11.6 11.6-11.6H224 388.4c6.4 0 11.6 5.2 11.6 11.6c0 1.6-.3 3.2-1 4.6L336.5 352h52.3l54.2-124.6c3.3-7.5 4.9-15.6 4.9-23.8c0-32.9-26.7-59.6-59.6-59.6H248V104h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V24zM101.2 432H346.8l16.6 32H84.7l16.6-32zm283.7-30.7c-5.5-10.6-16.5-17.3-28.4-17.3H91.5c-12 0-22.9 6.7-28.4 17.3L36.6 452.5c-3 5.8-4.6 12.2-4.6 18.7C32 493.8 50.2 512 72.8 512H375.2c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2z"/></svg>'


//switch board
    // let switchState = true; // Initial state
    // function switch_chessboard(){
    //     if (switchState) {
    //         player_choice = "black";
    //         draw_chessboard();
    //     } else {
    //         player_choice =  "white";
    //         draw_chessboard();
    //     }
    //     // Toggle the switch state for the next call
    //     switchState = !switchState;
    // }


    //Verifies if the Start button is clicked and only then allows the draw_chessboard() function to be called
function draw_chessboard(){
    //checks if start button is clicked
    // if (!chessboardStarted) {
    //     return;
    // }
    // else{
    draw_squares();

    // }
    }


//let theme1 = "tournament";
// let theme2 = "classic";
// let theme3 = "wooden";
// player_choice = 0;
// color_choice = 0;