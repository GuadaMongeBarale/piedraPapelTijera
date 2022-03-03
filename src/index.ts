import "./assets/styles/main.css";
import PiedraPapelTijera from "./assets/scripts/PiedraPapelTijera";

// Elemnts
const play = <HTMLButtonElement>document.getElementById("play");
const welcomeContainer = <HTMLElement>document.getElementById("container");
const gameConntainer = <HTMLElement>document.getElementById("game");

const game = new PiedraPapelTijera({
  finished: (result) => {},
});

play.addEventListener("click", () => {
  welcomeContainer.style.display = "none";
  gameConntainer.style.display = "block";
});
