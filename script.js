function createGrid(numSquaresPerSide) {
    const grid = document.querySelector(".grid");
    let totalSquares = numSquaresPerSide ** 2
    let borderPx = 0.5;
    let squareLength = (grid.offsetWidth / numSquaresPerSide) - borderPx * 2;
    
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        console.log(`background-color: blue; width: ${squareLength}px; 
        height: ${squareLength}px; border: black solid ${borderPx}px;`)
        square.style.cssText = `width: ${squareLength}px; 
            height: ${squareLength}px; border: #a6a6a6 solid ${borderPx}px;`;
        square.addEventListener("mouseover", fillSquare); 
        grid.appendChild(square);
    }
}

function fillSquare(e) {
    e.target.classList.add("fill");
}

createGrid(16);