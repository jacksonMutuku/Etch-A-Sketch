
document.addEventListener("DOMContentLoaded", function () {
const container=document.getElementById('grid-container')
const newGridBtn = document.getElementById('new-grid-btn');

function createGridCell(content){
    const cell=document.createElement('div')
    cell.classList.add('grid-cell')
    cell.textContent=content
    
    cell.addEventListener("mouseenter", function () {
        cell.style.backgroundColor = "blue"; 
    });
  
      
    cell.addEventListener("mouseleave", function () {
        cell.style.backgroundColor = ""; 
    });
    return cell
}

function createGrid(size){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const cellSize = `${100 / size}%`;
    for (let row = 1; row <= 16; row++){
        for (let col = 1; col <= 16; col++){
            const cellContent = row * col;
            const gridCell=createGridCell(cellContent)
            gridCell.style.width = cellSize;
            gridCell.style.height = cellSize;
            container.appendChild(gridCell)
        }
    }
}
// Function to prompt the user for the grid size and create a new grid accordingly
function promptForGridSize() {
    const gridSizeInput = parseInt(prompt("Enter the number of squares per side (maximum 100):"));
    if (!isNaN(gridSizeInput) && gridSizeInput > 0 && gridSizeInput <= 100) {
      createGrid(gridSizeInput);
    } else {
      alert("Invalid input. Please enter a number between 1 and 100.");
    }
}
newGridBtn.addEventListener("click", promptForGridSize);

createGrid(16);
})