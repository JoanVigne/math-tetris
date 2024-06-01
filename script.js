const container = document.querySelector(".container");
const resultsContainer = document.querySelector(".results");
// size of the game : 15 - 10
const grid = Array.from({ length: 15 }, () => Array(10).fill(false));
const scoreContainer = document.querySelector(".score");
let score = 0;
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
    let resultOfThisLine = document.querySelector(".resultOfLine" + y);
    if (resultOfThisLine) {
      // if line already have a result, we remove it and replace it
      resultOfThisLine.remove();
    }
    const resultline = document.createElement("div");
    resultline.classList.add("resultOfLine" + y);
    resultline.innerText = count;
    resultline.classList.add("result");
    resultline.style.gridRowStart = y;
    resultsContainer.appendChild(resultline);
    //! IF ROW IS 50
    /* if (count === 50) { */
    if (count >= 20) {
      console.log("row is equal to 50");
      score = score + count;
      scoreContainer.innerText = score;

      /*       for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].map(() => false);
      } */
      /* for (let i = 0; i < grid[y - 1].length; i++) {
        if (i - 1 !== false) {
          console.log("false");
          // grid[i] = [...grid[i - 1]]; // error :  TypeError: grid[(i - 1)] is not iterable
        } else {
          console.log("else");
          grid[i] = grid[i].map(() => false);
        }
      } */
      /* for (let i = y; i < grid.length; i++) {
        if (i - 1 !== false) {
          grid[i] = [...grid[i - 1]];
        } else {
          grid[i] = grid[i].map(() => false);
        }
      } */
      // to remove the line
      for (let i = 0; i < grid[y - 1].length; i++) {
        // clear the grid table
        grid[y - 1][i] = false;
        // remove the cell from the DOM
        const cell = document.querySelector(
          `.occupied[style*="grid-column-start: ${
            i + 1
          }"][style*="grid-row-start: ${y}"]`
        );
        if (cell) {
          cell.remove();
        }
      }
    }
    //! IF ROW IS 50 end
  }
  // check if row inder is empty
  checkUnderRow();
  // new cube to keep playing
  createACube();
}
createACube();

function checkUnderRow() {
  // check if row under is empty starting from the last one
  console.log("grid : ", grid);
  for (let i = grid.length - 1; i > 0; i--) {
    if (grid[i].every((cell) => cell === false)) {
      console.log("row under is empty", i);
    } else {
      console.log("row under is not empty");
    }
  }
}
function lost() {
  alert("You lost the game");
}
