function createGrid(numSquaresPerSide) {
    const grid = document.querySelector(".grid");
    let totalSquares = numSquaresPerSide ** 2
    let borderPx = 0.5;
    let squareLength = (grid.offsetWidth / numSquaresPerSide) - borderPx * 2;
    
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.cssText = `width: ${squareLength}px; 
            height: ${squareLength}px; border: #a6a6a6 solid ${borderPx}px;`;
        square.addEventListener("mouseover", fillSquare); 
        grid.appendChild(square);
    }
}

function fillSquare(event) {
    event.target.classList.add("fill");
}

function removeGrid() {
    const grid = document.querySelector(".grid");
    grid.replaceChildren();
}

function updateGridSize(event) {
    let numSquaresPerSide = event.target.value
    gridSize.textContent = `Grid Size: ${numSquaresPerSide} x ${numSquaresPerSide}`;
}

function updateGrid(event) {
    let numSquaresPerSide = event.target.value;
    removeGrid();
    createGrid(numSquaresPerSide);
}

const slider = document.querySelector(".slider");
const gridSize = document.querySelector(".grid-size");
gridSize.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
slider.addEventListener("change", updateGrid);
slider.addEventListener("input", updateGridSize);

createGrid(slider.value);