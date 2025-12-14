export class NodoSimple {
    constructor(dato) {
        this.siguiente = null;
        this.dato = dato;
    }
}
export class ListaSimple {
    constructor() {
        this.cabeza = null;
    }
    agregar(dato) {
        const nuevo = new NodoSimple(dato);
        if (this.cabeza === null) {
            this.cabeza = nuevo;
        }
        else {
            let actual = this.cabeza;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevo;
        }
    }
    imprimir() {
        let actual = this.cabeza;
        while (actual !== null) {
            console.log(actual.dato);
            actual = actual.siguiente;
        }
    }
}
//# sourceMappingURL=ListaSimple.js.map