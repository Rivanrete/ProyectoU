import { Mazo } from "./ListaCircular.js";
import { PilaDescarte } from "./Pila_Descarte.js";
import { Tablero } from "./Tablero";
import { ListaHistorial } from "./ListaDoble.js";
export declare class Jugador {
    nombre: string;
    tablero: Tablero;
    constructor(nombre: string);
    jugarTurno(mazo: Mazo, oponente: Jugador, pilaDescarte: PilaDescarte, historial: ListaHistorial, fila: number, columna: number): boolean;
    calcularPuntuacion(): number;
}
//# sourceMappingURL=Jugador.d.ts.map