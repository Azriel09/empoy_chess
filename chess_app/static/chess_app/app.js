let chessboardContainer = document.querySelector("#chessboard-container")
let queen = '<div class = "piece" id = "queen"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0a56 56 0 1 1 0 112A56 56 0 1 1 256 0zM134.1 143.8c3.3-13 15-23.8 30.2-23.8c12.3 0 22.6 7.2 27.7 17c12 23.2 36.2 39 64 39s52-15.8 64-39c5.1-9.8 15.4-17 27.7-17c15.3 0 27 10.8 30.2 23.8c7 27.8 32.2 48.3 62.1 48.3c10.8 0 21-2.7 29.8-7.4c8.4-4.4 18.9-4.5 27.6 .9c13 8 17.1 25 9.2 38L399.7 400H384 343.6 168.4 128 112.3L5.4 223.6c-7.9-13-3.8-30 9.2-38c8.7-5.3 19.2-5.3 27.6-.9c8.9 4.7 19 7.4 29.8 7.4c29.9 0 55.1-20.5 62.1-48.3zM256 224l0 0 0 0h0zM112 432H400l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H86.6C74.1 512 64 501.9 64 489.4c0-6 2.4-11.8 6.6-16L112 432z"/></svg></div>'
let color_choice = 0;
const width = 8;
const chessboardState =[
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '' , queen,'', '', '', '',
]


function draw_chessboard(){
    chessboardContainer.innerHTML = '';
    draw_squares();
}
function draw_squares(){
    chessboardState.forEach((chessState, i) =>{
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('square-id', i);
        square.innerHTML = chessState;
        square.firstChild?.setAttribute('draggable', true)
        if (i % width === 0 || i % width === width - 1 || Math.floor(i / width) === 0 || Math.floor(i / width) === width - 1) {
            square.classList.add('border');
        }
        const row = Math.floor ((63 - i) / 8) + 1
        if (row % 2 == 0 ){
            square.classList.add(i % 2 == 0 ? fill_white(square) : fill_dark(square))
        }else{
            square.classList.add(i % 2 == 0 ? fill_dark(square): fill_white(square))
        }
        chessboardContainer.append(square)
    })
}
draw_squares();
const allSquares = document.querySelectorAll("#chessboard-container .square");
allSquares.forEach(square =>{
    square.addEventListener('dragstart' , dragStart);
    square.addEventListener('dragover' , dragOver);
    square.addEventListener('drop' , dragDrop);
})
let startPositionId 
let draggedElement
function dragStart(e){
    startPositionId = (e.target.parentNode.getAttribute('square-id'));
    draggedElement = e.target
}
function dragOver(e){
    e.preventDefault()
}
function dragDrop(e){
    e.stopPropagation()  
    const valid = checkValid(e.target);
    if(valid){
        e.target.append(draggedElement)
        return
    }
    function checkValid(target) {
        const targetId = Number(target.getAttribute('square-id')) || Number(target.parentNode.getAttribute('square-id'));
        const startId = Number(startPositionId);
        const piece = draggedElement.id;
        console.log('targetId', targetId);
        console.log('startId', startId);
        console.log('piece', piece);
    
        // Calculate the row and column of the start and target squares
        const startRow = Math.floor(startId / width);
        const startCol = startId % width;
        const targetRow = Math.floor(targetId / width);
        const targetCol = targetId % width;
    
        // Check if the move is horizontal, vertical, or diagonal
        const isHorizontal = startRow === targetRow && startCol !== targetCol;
        const isVertical = startCol === targetCol && startRow !== targetRow;
        const rowDiff = Math.abs(startRow - targetRow);
        const colDiff = Math.abs(startCol - targetCol);
        const isDiagonal = rowDiff === colDiff;
    
        if (isHorizontal || isVertical || isDiagonal) {
            return true;
        }
    
        return false;
    }
}
function fill_white(square) {
    if(color_choice == "classic"){
        square.style.backgroundColor = "rgb(220, 220, 220)";
    }
    else if(color_choice == "wooden"){
        square.style.backgroundColor = "rgb(255, 199, 153)";
    }
    else if(color_choice == "tournament"){
        square.style.backgroundColor = "rgb(237, 237, 209)"; 
    }
    else{
        square.style.backgroundColor = "rgb(220, 220, 220)";
    }
}
function fill_dark(square) {
    if(color_choice == "classic"){
        square.style.backgroundColor = "rgb(170, 170, 170)"; 
    }
    else if(color_choice == "wooden"){
        square.style.backgroundColor = "rgb(208, 138, 65)"; 
    }
    else if(color_choice == "tournament"){
        square.style.backgroundColor = "rgb(117, 150, 85)";
    }
    else{
        square.style.backgroundColor = "rgb(170, 170, 170)";
    }
}