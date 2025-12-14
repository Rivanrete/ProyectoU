export class NodoHistorial {
    constructor(turno, jugador, carta, fila, columna, eliminadas) {
        this.siguiente = null;
        this.anterior = null;
        this.turno = turno;
        this.jugador = jugador;
        this.carta = carta;
        this.fila = fila;
        this.columna = columna;
        this.eliminadas = eliminadas;
    }
}
export class ListaHistorial {
    constructor() {
        this.cabeza = null;
        this.cola = null;
    }
    agregar(turno, jugador, carta, fila, columna, eliminadas) {
        const nuevo = new NodoHistorial(turno, jugador, carta, fila, columna, eliminadas);
        if (this.cabeza === null) {
            this.cabeza = nuevo;
            this.cola = nuevo;
        }
        else {
            this.cola.siguiente = nuevo;
            nuevo.anterior = this.cola;
            this.cola = nuevo;
        }
    }
    mostrar() {
        let actual = this.cabeza;
        while (actual !== null) {
            console.log(`Turno ${actual.turno} - ${actual.jugador} colocó ${actual.carta} en (${actual.fila},${actual.columna})`);
            if (actual.eliminadas.length > 0) {
                console.log(`   Eliminadas: ${actual.eliminadas.join(', ')}`);
            }
            actual = actual.siguiente;
        }
    }
}
//# sourceMappingURL=ListaDoble.js.map