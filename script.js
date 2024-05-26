const container = document.querySelector(".container");
const resultsContainer = document.querySelector(".results");
// size of the game : 15 - 10
const grid = Array.from({ length: 15 }, () => Array(10).fill(false));

function createACube() {
  const cube = document.createElement("div");
  cube.innerText = Math.floor(Math.random() * 11);
  cube.classList.add("item");
  cube.classList.add("cube");
  cube.style.gridColumnStart = 4;
  cube.style.gridRowStart = 1;
  container.appendChild(cube);
}
function placeItem(y, x) {
  // change class item => placed
  const activeItem = document.querySelector(".item");
  let numb = activeItem.innerText;

  activeItem.remove();
  // tell the grid that this place is taken.
  grid[y - 1][x - 1] = numb;

  // Create a new div for the occupied cell
  const occupiedCell = document.createElement("div");
  occupiedCell.innerText = numb;
  occupiedCell.classList.add("occupied");
  occupiedCell.style.gridColumnStart = x;
  occupiedCell.style.gridRowStart = y;
  container.appendChild(occupiedCell);
  console.log(grid);
  if (y === 1) {
    lost();
    return;
  }
  // NEW LINE
  if (grid[y - 1].every((cell) => cell !== false)) {
    let count = grid[y - 1].reduce((a, b) => Number(a) + Number(b), 0);
    const resultline = document.createElement("div");
    resultline.innerText = count;
    resultline.classList.add("result");
    resultline.style.gridRowStart = y;
    resultsContainer.appendChild(resultline);
    //! IF ROW IS 50
    if (count === 50) {
      /*       for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].map(() => false);
      } */
      for (let i = y; i < grid.length; i++) {
        if (i - 1 !== false) {
          grid[i] = [...grid[i - 1]];
        } else {
          grid[i] = grid[i].map(() => false);
        }
      }
      // to remove the line
      /* for (let i = 0; i < grid[y - 1].length; i++) {
        const cell = document.querySelector(
          `.occupied[style*="grid-column-start: ${
            i + 1
          }"][style*="grid-row-start: ${y}"]`
        );
        if (cell) {
          cell.remove();
        }
      } */
      // Shift all rows above the deleted row down by one
    }
    //! IF ROW IS 50 end
  }

  createACube();
}
createACube();

function lost() {
  alert("You lost the game");
}
