document.addEventListener("keydown", function (event) {
  const activeItem = document.querySelector(".item");
  let x = Number(activeItem.style.gridColumnStart);
  let y = Number(activeItem.style.gridRowStart);
  if (event.key === "ArrowUp") {
    activeItem.innerText = Math.floor(Math.random() * 11);
    /*  if (grid[y - 1][x - 1]) {
        console.log("taken");
      } */
    /*   activeItem.style.gridRowStart = --y; */
  } else if (event.key === "ArrowDown") {
    if (y < 15 && grid[y][x - 1]) {
      console.log("taken");
      placeItem(y, x);
      return;
    }
    if (y === 15) {
      placeItem(y, x);
      return;
    }
    activeItem.style.gridRowStart = ++y;
  } else if (event.key === "ArrowLeft") {
    activeItem.style.gridColumnStart = --x;
  } else if (event.key === "ArrowRight") {
    if (x === 10) {
      return console.log("le mur");
    }
    activeItem.style.gridColumnStart = ++x;
  }
});
