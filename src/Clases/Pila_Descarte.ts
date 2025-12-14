import { Carta } from "./Carta.js";
import { NodoCarta } from "./NodoCarta.js";

export class PilaDescarte {
  cabeza: NodoCarta | null = null;
  insertarFin(carta: Carta): void {
    const nuevo = new NodoCarta(carta);

    if (this.cabeza === null) {
      this.cabeza = nuevo;
    } else {
      let actual = this.cabeza;
      while (actual.siguiente !== null) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevo;
    }
  }
  estaVacia(): boolean {
    return this.cabeza === null;
  }
  obtenerTodas(): Carta[] {
    const resultado: Carta[] = [];
    let actual = this.cabeza;

    while (actual !== null) {
      resultado.push(actual.carta);
      actual = actual.siguiente;
    }
    return resultado;
  }
  vaciarYDevolver(): Carta[] {
    const cartas = this.obtenerTodas();
    this.cabeza = null;
    return cartas;
  }
  limpiar(): void {
    this.cabeza = null;
  }
  imprimir(): void {
    let actual = this.cabeza;
    while (actual !== null) {
      console.log(actual.carta.toString());
      actual = actual.siguiente;
    }
  }
}
