const soundtrack = new Audio("../crappy_tetris-soundtrack.mp3");
const soundLine = new Audio("../crappy_line.mp3");
const buttonSound = document.querySelector(".sound");
buttonSound.addEventListener("click", () => {
  if (soundtrack.paused) {
    soundtrack.play();
    buttonSound.classList.remove("fa-play");
    buttonSound.classList.add("fa-pause");
  } else {
    soundtrack.pause();
    buttonSound.classList.remove("fa-pause");
    buttonSound.classList.add("fa-play");
  }
});
const volumeControl = document.querySelector("#volume");
volumeControl.addEventListener("input", () => {
  soundtrack.volume = volumeControl.value;
  soundLine.volume = volumeControl.value;
});
