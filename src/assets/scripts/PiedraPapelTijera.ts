interface Configuration {
  intents?: number;
  finished: (resutl: any) => any;
}

interface Result {
  loss: number;
  success: number;
  tie: number;
}

export default class PiedraPapelTijera {
  private _loss: number = 0;
  private _success: number = 0;
  private _tie: number = 0;
  private _counter: number = 0;
  private _intents: number;
  private _finished: (result: Result) => void;

  /**
   * Creates an instance of PiedraPapelTijera.
   * @param {Configuration} config
   */
  constructor(config: Configuration) {
    this._intents = config["intents"] ?? 3;
    this._finished = config.finished;
  }
  /**
   * Adivinar el numero
   *
   * @param {number} assert
   */
  public play(assert: number): void {
    if (this._counter <= this._intents) {
      // Obtener lo que homero a seleccionado
      const homero = this.random();
      // Validar la asercion con el de homero
      this.validate(assert, homero);
      // Añadir en uno el contador de intentos
      this._counter += 1;
    } else {
      this.stop();
    }
  }
  /**
   * Reiniciar el juego
   *
   */
  public restart(): void {
    this._loss = 0;
    this._success = 0;
    this._tie = 0;
    this._counter = 0;
  }
  /**
   * Parar el juego
   *
   * @private
   */
  private stop(): void {
    // Accionar el callback de finalizacion del juego
    this._finished({
      loss: this._loss,
      success: this._success,
      tie: this._tie,
    });
  }
  /**
   * Obtener un numero aleatorio del 0 al 2
   *
   * @private
   * @return {*}  {number}
   */
  private random(): number {
    return Math.floor(Math.random() * 3);
  }
  /**
   * Validar la asercion con el de Homero
   *
   * @private
   * @param {number} assert
   * @param {number} homero
   */
  private validate(assert: number, homero: number): void {
    // piedra:0 > tijera
    // papel:1 > piedra
    // tijera:2 > papel

    // piedra = 0
    // papel = 1
    // tijera = 2

    let validate = [
      [0, 2], // piedra > tijera
      [1, 0], // papel > piedra
      [2, 1], // tijera > piedra
    ];

    if (validate[assert][0] === homero) {
      // Empate
      this._loss += 1;
    } else if (validate[assert][1] === homero) {
      // Gana
      this._success += 1;
    } else {
      // Pierde
      this._loss += 1;
    }
  }
}
