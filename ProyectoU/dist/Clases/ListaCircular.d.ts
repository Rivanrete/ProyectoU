import { Carta } from "./Carta";
import { NodoCarta } from "./NodoCarta";
export declare class Mazo {
    cabeza: NodoCarta | null;
    cola: NodoCarta | null;
    constructor();
    crearMazoInicial(): void;
    estaVacio(): boolean;
    numeroAleatorio(): number;
    barajar(): void;
    robarCarta(): Carta | null;
}
//# sourceMappingURL=ListaCircular.d.ts.map