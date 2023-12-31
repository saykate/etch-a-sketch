let sketchPad = document.querySelector(".sketch-pad");
let gridSize = document.querySelector('.grid-size');
let apply = document.querySelector('.apply');
let mouseDown = false;
let eraseButton = document.querySelector('.erase');
let eraseMode = false;

const draw = (mouseDownEvent) => {
  if (mouseDown) {
    if(eraseMode) {
      eraseButton.textContent = "Draw";
      mouseDownEvent.target.classList.remove('active');
    }else {
      eraseButton.textContent = "Erase";
      mouseDownEvent.target.classList.add('active');
    }
}
}

const createGrid = () => {
  let rows = gridSize.value;
  let columns = gridSize.value;

	//reset grid when apply is clicked
	sketchPad.innerHTML = ''

  // create column in the number of given columns
  for (let i = 0; i < columns; i++) {
    let column = document.createElement("div");
    column.className = "column";
    //create row in the number of given rows
    for (let j = 0; j < rows; j++) {
      let row = document.createElement("div");
      row.className = "row";
      column.appendChild(row);
      row.onmousedown = () => (mouseDown = true);
      row.onmouseup = () => (mouseDown = false);
      row.addEventListener('mousedown', draw);
      row.addEventListener('mouseover', draw); 
  }
    sketchPad.appendChild(column);
  }
}

apply.addEventListener('click', createGrid);

eraseButton.addEventListener('click', (e) =>{eraseMode = !eraseMode});











