import { Carta } from "./Carta.js";
import { NodoCarta } from "./NodoCarta.js";
export declare class PilaDescarte {
    Top: NodoCarta | null;
    insertarFin(carta: Carta): void;
    estaVacia(): boolean;
    obtenerTodas(): Carta[];
    vaciarYDevolver(): Carta[];
    limpiar(): void;
    imprimir(): void;
    barajar(): void;
}
//# sourceMappingURL=Pila_Descarte.d.ts.map