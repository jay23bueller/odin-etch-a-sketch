const containerElement = document.getElementById("container");

const containerStyles = getComputedStyle(containerElement);
const CONTAINER_GAP_SIZE = window.parseInt(containerStyles.getPropertyValue("gap"));


const INIT_GRID_SIZE = 16;
const CONTAINER_SIZE = 960;
let currentGridSize = INIT_GRID_SIZE;

const MAX_GRID_SIZE = 100;
const BORDER_WIDTH_SIZE = 2;

//Initial grid
createGrid();

const resizeButtonElement = document.getElementById("resize-button");

resizeButtonElement.addEventListener("click", () => {
    let gridSize;
    do {
        gridSize = parseInt(prompt("Please enter a valid number between 16 and 100, inclusive."))
    } while (Number.isNaN(gridSize) || gridSize > 100 || gridSize < 16)
    containerElement.innerHTML = "";
    createGrid(gridSize);
});


function createGrid(gridSize = 16) {
    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            const size = (CONTAINER_SIZE/gridSize)-CONTAINER_GAP_SIZE- BORDER_WIDTH_SIZE;
            const style = `flex: 0 0 ${size}px;
            height: ${size}px;`;
            console.log(style);
            const etchSketchBoxElement = document.createElement("div");
            etchSketchBoxElement.setAttribute("style", style);
            etchSketchBoxElement.classList.add("white");
            containerElement.appendChild(etchSketchBoxElement);

            etchSketchBoxElement.addEventListener("mouseover", (e) => { 
                if(!e.target.classList.contains("black")) {
                    e.target.classList.replace("white","black");
                }
            });
        }


    }
}