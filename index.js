let sketchPad = document.querySelector(".sketch-pad");
let gridSize = document.querySelector("#js-grid-size");
let apply = document.querySelector("#js-apply");
let mouseDown = false;



const draw = (event) => {
  console.log({mouseDown});
  if (mouseDown){
	event.target.classList.add('active');
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
};

apply.addEventListener('click', createGrid)











