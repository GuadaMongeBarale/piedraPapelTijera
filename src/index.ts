import "./assets/styles/main.css";
import PiedraPapelTijera from "./assets/scripts/PiedraPapelTijera";

// Elemnts
const go = <HTMLButtonElement>document.getElementById("go");
const welcomeContainer = <HTMLElement>document.getElementById("container");
const gameConntainer = <HTMLElement>document.getElementById("game");
const resultConntainer = <HTMLElement>document.getElementById("result");
const homero = <HTMLImageElement>document.getElementById("homero");
const piedra = <HTMLButtonElement>document.getElementById("piedra");
const papel = <HTMLButtonElement>document.getElementById("papel");
const tijera = <HTMLButtonElement>document.getElementById("tijera");
const success = <HTMLElement>document.getElementById("success");
const loss = <HTMLElement>document.getElementById("loss");
const tie = <HTMLElement>document.getElementById("tie");

const game = new PiedraPapelTijera({
  finished: (result) => {
    success.innerHTML = result.success.toString();
    loss.innerHTML = result.loss.toString();
    tie.innerHTML = result.tie.toString();
    resultConntainer.style.display = "block";
  },
  result: (result) => {
    if (result.validate == 2) {
      homero.src = "./assets/img/homero-empate.png";
    } else if (result.validate == 1) {
      homero.src = "./assets/img/homero-perdiste.png";
    } else if (result.validate == 0) {
      homero.src = "./assets/img/homero-ganaste.png";
    } else {
      homero.src = "./assets/img/homero-pensando.png";
    }

    console.log(result);
  },
});

go.addEventListener("click", () => {
  welcomeContainer.style.display = "none";
  gameConntainer.style.display = "block";
});

piedra.addEventListener("click", () => {
  game.play(game.getPiedra());
});
papel.addEventListener("click", () => {
  game.play(game.getPapel());
});
tijera.addEventListener("click", () => {
  game.play(game.getTijera());
});
