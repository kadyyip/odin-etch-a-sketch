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

function generateRandomColor() {
    // generate RGB value
    let r = randomInt(257);
    let g = randomInt(257);
    let b = randomInt(257);
    return `rgb(${r}, ${g}, ${b})`
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function fillSquare(event) {
    if (colorMode === "pick") {
        const colorPicker = document.querySelector("#color-picker");
        let selectedColor = colorPicker.value;
        event.target.style.backgroundColor = selectedColor;
    } else if (colorMode === "rainbow") {
        const rainbow = ["#FAEDCB", "#C9E4DE", "#C6DEF1", 
            "#DBCDF0", "#F2C6DE", "#F7D9C4"];
        let color = rainbow[randomInt(7)];
        event.target.style.backgroundColor = color;
    } else if (colorMode === "random") {
        let color = generateRandomColor();
        event.target.style.backgroundColor = color;
    } else if (colorMode === "eraser") {
        event.target.style.backgroundColor = "";
    } else return;
}

function removeGrid() {
    const grid = document.querySelector(".grid");
    grid.replaceChildren();
}

function clearGrid() {
    const squares = document.querySelectorAll(".square");
    for (const square of squares) {
        square.style.backgroundColor = "";
    }
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

function updateColorMode(event) {
    const active = document.querySelector(".active");
    active.classList.remove("active");
    console.log(event.target.id);
    if (event.target.id === "color-picker") {
        console.log(event.target.parentNode);
        colorMode = event.target.parentNode.id;
        event.target.parentNode.classList.add("active");
    } else {
        colorMode = event.target.id;
        event.target.classList.add("active");
    }
}

const slider = document.querySelector(".slider");
const gridSize = document.querySelector(".grid-size");
gridSize.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
slider.addEventListener("change", updateGrid);
slider.addEventListener("input", updateGridSize);

const pick = document.querySelector("#pick");
const random = document.querySelector("#random");
const rainbow = document.querySelector("#rainbow");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector("#clear");
pick.addEventListener("click", updateColorMode);
random.addEventListener("click", updateColorMode);
rainbow.addEventListener("click", updateColorMode);
eraser.addEventListener("click", updateColorMode);
clear.addEventListener("click", clearGrid);

let colorMode = "pick";
createGrid(slider.value);