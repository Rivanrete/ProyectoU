import { Carta } from "./Carta";
import { PilaDescarte } from "./Pila_Descarte";
export declare class Tablero {
    casillas: (Carta | null)[][];
    constructor();
    colocarCarta(carta: Carta, fila: number, columna: number): boolean;
    eliminarCartasPorRango(rango: number, pilaDescarte: PilaDescarte): void;
    calcularPuntuacionColumna(columna: number): number;
    calcularPuntuacion(): number;
    estaLleno(): boolean;
}
//# sourceMappingURL=Tablero.d.ts.map