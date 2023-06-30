let sketchPad = document.querySelector(".sketch-pad");
let gridSize = document.querySelector("#js-grid-size");
let apply = document.querySelector("#js-apply");
let column = 0;
let row = 0
let mouseDown = false;

sketchPad.onmousedown = () => (mouseDown = true);
sketchPad.onmouseup = () => (mouseDown = false);

const draw = (event) => {
  if (mouseDown){
	event.target.classList.toggle('active');
	console.log(event)}
}

const createGrid = () => {
  let rows = gridSize.value;
  let columns = gridSize.value;

	//reset grid when apply is clicked
	sketchPad.innerHTML = ''

  // create column in the number of given columns
  for (let i = 0; i < columns; i++) {
    column = document.createElement("div");
    column.className = "column";
    //create row in the number of given rows
    for (let j = 0; j < rows; j++) {
      row = document.createElement("div");
      row.className = "row";
      column.appendChild(row);
    }
    sketchPad.appendChild(column);
    sketchPad.addEventListener('mousedown', draw);
    sketchPad.addEventListener('mouseover', draw);
  }   
};

apply.addEventListener('click', createGrid)



//row.addEventListener isn't recognized as a valid DOM 
//element?, but if I do sketchPad it sometimes selects
//the whole column. So row is what needs to be targeted....how?









