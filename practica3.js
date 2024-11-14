class Ordenador {
    constructor (marca, modelo, ram = 4, hardDrive = 512, pulgadas = 17) {
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.hardDrive = hardDrive;
    this.pulgadas = pulgadas;
    }

    toString() {
        return `Marca: ${this.marca} || Modelo: ${this.modelo} || RAM: ${this.ram} GB || Disco duro: ${this.hardDrive} GB || Pulgadas: ${this.pulgadas}''`;
    }
}

class Portatil extends Ordenador {
    constructor (marca, modelo, ram = 4, hardDrive = 256, pulgadas = 12, autonomia = 4) {
        super(marca, modelo, ram, hardDrive, pulgadas);
        this.autonomia = autonomia;
    }
    toString() {
        return super.toString() + " || Autonomía: " + this.autonomia + " horas.";
    }
}

let a = new Ordenador('AMD', 'Ryzen 5');
let b = new Ordenador('Intel', 'i7', 16, 256, 27);
let c = new Portatil('Asus', '24lkG');

console.log(a.toString());
console.log(b.toString());
console.log(c.toString());
