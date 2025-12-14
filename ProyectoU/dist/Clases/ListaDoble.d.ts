export declare class NodoHistorial {
    turno: number;
    jugador: string;
    carta: string;
    fila: number;
    columna: number;
    eliminadas: string[];
    siguiente: NodoHistorial | null;
    anterior: NodoHistorial | null;
    constructor(turno: number, jugador: string, carta: string, fila: number, columna: number, eliminadas: string[]);
}
export declare class ListaHistorial {
    cabeza: NodoHistorial | null;
    cola: NodoHistorial | null;
    agregar(turno: number, jugador: string, carta: string, fila: number, columna: number, eliminadas: string[]): void;
    mostrar(): void;
}
//# sourceMappingURL=ListaDoble.d.ts.map