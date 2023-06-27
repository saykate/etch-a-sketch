
let sketchPad = document.querySelector('.sketch-pad');
let gridSize = document.querySelector('#grid-size');
let apply = document.querySelector('.apply');
let rows = 16; 
let columns = 16; 

const createGrid = () => {
    rows = gridSize; 
    columns = gridSize
    //create column in the number of given columns
for (let i = 0; i < columns; i++) {
    let column = document.createElement('div'); 
    column.className = 'column';
    //create row in the number of given rows
    for (let j = 0; j < rows; j++) {
        let row = document.createElement('div');
        row.className = 'row';
        column.appendChild(row)
    }
    sketchPad.append(column)
}
}

// createGrid();

apply.addEventListener('click', createGrid);


