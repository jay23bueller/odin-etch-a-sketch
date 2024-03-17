const containerElement = document.getElementById("container");

const containerStyles = getComputedStyle(containerElement);
const CONTAINER_GAP_SIZE = window.parseInt(containerStyles.getPropertyValue("gap"));

console.log(CONTAINER_GAP_SIZE);

const INIT_GRID_SIZE = 16;
const CONTAINER_SIZE = 960;

const MAX_GRID_SIZE = 100;

// Create the initial grid
for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const size = (CONTAINER_SIZE/INIT_GRID_SIZE) - CONTAINER_GAP_SIZE;
        const style = `flex: 0 0 ${size}px;
        background-color: black;
        height: ${size}px;`;
    
        const etchSketchBoxElement = document.createElement("div");
        etchSketchBoxElement.setAttribute("style", style);
    
        containerElement.appendChild(etchSketchBoxElement);
    }


}