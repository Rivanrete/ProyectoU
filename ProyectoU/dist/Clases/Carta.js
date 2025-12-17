export class Carta {
    constructor(rango, palo) {
        this.rango = rango;
        this.palo = palo;
        this.valor = rango;
    }
    getValor() {
        return this.valor;
    }
    getRango() {
        return this.rango;
    }
    getPalo() {
        return this.palo;
    }
    getColor() {
        if (this.palo === 'Corazones' || this.palo === 'Diamantes') {
            return 'Rojo';
        }
        else {
            return 'Negro';
        }
    }
    convertirRango() {
        if (this.rango === 11)
            return 'J';
        if (this.rango === 12)
            return 'Q';
        if (this.rango === 13)
            return 'K';
        if (this.rango === 14)
            return 'A';
        return this.rango.toString();
    }
    convertirPalo() {
        if (this.palo === 'Corazones')
            return '♥';
        if (this.palo === 'Diamantes')
            return '♦';
        if (this.palo === 'Picas')
            return '♠';
        if (this.palo === 'Tréboles')
            return '♣';
        return this.palo;
    }
    toString() {
        return this.convertirRango() + this.convertirPalo();
    }
}
//# sourceMappingURL=Carta.js.map