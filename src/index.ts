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
const resultSpan = <HTMLElement>document.getElementById("resultSpan");
const tijera = <HTMLButtonElement>document.getElementById("tijera");
const successSpan = <HTMLElement>document.getElementById("success");
const lossSpan = <HTMLElement>document.getElementById("loss");
const tieSpan = <HTMLElement>document.getElementById("tie");
let success = 0;
let loss = 0;
let tie = 0;

const game = new PiedraPapelTijera({
  finished: (result) => {
    // Aquí puedes poner tu codigo cuando el juego termine
  },
  result: (result) => {
    resultSpan.innerHTML = "Homero escogió " + game.getHomero(result.homero);
    if (result.validate == 2) {
      // Empate
      tie += 1;
      homero.src = "./assets/img/homero-empate.png";
      tieSpan.innerHTML = tie.toString();
    } else if (result.validate == 1) {
      // Ganas
      success += 1;
      homero.src = "./assets/img/homero-perdiste.png";
      successSpan.innerHTML = success.toString();
    } else if (result.validate == 0) {
      // Pierdes
      loss += 1;
      homero.src = "./assets/img/homero-ganaste.png";
      lossSpan.innerHTML = loss.toString();
    } else {
      homero.src = "./assets/img/homero-pensando.png";
    }

    console.log(result);
  },
});

go.addEventListener("click", () => {
  welcomeContainer.style.display = "none";
  gameConntainer.style.display = "block";
  resultConntainer.style.display = "block";
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
