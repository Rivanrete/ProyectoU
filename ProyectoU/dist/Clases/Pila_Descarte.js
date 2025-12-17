import { Carta } from "./Carta.js";
import { NodoCarta } from "./NodoCarta.js";
export class PilaDescarte {
    constructor() {
        this.Top = null;
    }
    insertarFin(carta) {
        const nuevo = new NodoCarta(carta);
        if (this.Top === null) {
            this.Top = nuevo;
        }
        else {
            let actual = this.Top;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevo;
        }
    }
    estaVacia() {
        return this.Top === null;
    }
    obtenerTodas() {
        const resultado = [];
        let actual = this.Top;
        while (actual !== null) {
            resultado.push(actual.carta);
            actual = actual.siguiente;
        }
        return resultado;
    }
    vaciarYDevolver() {
        const cartas = this.obtenerTodas();
        this.Top = null;
        return cartas;
    }
    limpiar() {
        this.Top = null;
    }
    imprimir() {
        let actual = this.Top;
        while (actual !== null) {
            console.log(actual.carta.toString());
            actual = actual.siguiente;
        }
    }
    barajar() {
        if (this.estaVacia())
            return;
        const todasLasCartas = this.obtenerTodas();
        for (let i = todasLasCartas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [todasLasCartas[i], todasLasCartas[j]] = [todasLasCartas[j], todasLasCartas[i]];
        }
        this.Top = null;
        for (const carta of todasLasCartas) {
            this.insertarFin(carta);
        }
    }
}
//# sourceMappingURL=Pila_Descarte.js.map