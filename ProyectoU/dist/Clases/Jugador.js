import { Mazo } from "./ListaCircular.js";
import { PilaDescarte } from "./Pila_Descarte.js";
import { Tablero } from "./Tablero";
import { ListaHistorial } from "./ListaDoble.js";
export class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.tablero = new Tablero();
    }
    jugarTurno(mazo, oponente, pilaDescarte, historial, fila, columna) {
        // 1. Robar carta
        var carta = mazo.robarCarta();
        if (carta === null) {
            return false;
        }
        var colocado = this.tablero.colocarCarta(carta, fila, columna);
        if (!colocado) {
            return false;
        }
        oponente.tablero.eliminarCartasPorRango(carta.getRango(), pilaDescarte);
        return true;
    }
    calcularPuntuacion() {
        return this.tablero.calcularPuntuacion();
    }
}
//# sourceMappingURL=Jugador.js.map