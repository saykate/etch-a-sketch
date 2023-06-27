let rows = 16; 
let columns = 16; 

let sketchPad = document.querySelector(".sketch-pad");

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