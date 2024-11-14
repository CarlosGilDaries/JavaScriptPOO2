class Punto {
    constructor(x, y){
        if (isNaN(x))
            this.x = 0;
        else
            this.x = x;

        if (isNaN(y))
            this.y = 0;
        else
            this.y = y;
    }

    cambiar(a, b) {
        if (!isNaN(a) && !isNaN(b)) {
            this.x = a;
            this.y = b;
        }
    }

    copia() {
        let a = new Punto(this.x, this.y);
        return a;
    }

    suma (a) {
        if (a instanceof Punto) {
            let b = new Punto(this.x + a.x, this.y + a.y);
    
            return b;
        }
    }
}

let puntoA = new Punto(1,2);
let puntoB = new Punto(3,4);
let puntoC = new Punto('a', 'b');

console.log(puntoC);

puntoA.cambiar(5,6);
console.log(puntoA);

console.log(puntoB.copia());

console.log(puntoA.suma(puntoB));