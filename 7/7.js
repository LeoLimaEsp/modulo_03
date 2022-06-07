
/*2.- Crear la clase construcción que hereda a otras dos 
clases "casa" y "edificio". 
a. Sus atributos son: numPuertas, numVentanas, numPisos,
   direccion, altura, largo y ancho del terreno.
b. Cada uno tiene un método que regresa los metros 
   cuadrados
c. Un método debe regresar la direccion
d. Un método debe permitir modificar la direccion
e. Buscar la mejor manera de aprovechar la herencia*/

class construción {
    constructor(direee) {
        this.altura = 0;
        this.numPuertas = 0;
        this.numVentanas = 0;
        this.numPisos = 2;
        this.largo = 30;
        this.ancho = 35;
        this.dirección = direee;
        this.direccion();
    }

    direccion(){
        if(this.dirección == true){
            console.log("La dirección es sauce 12")
        }
        else{
            console.log("no existe el inmueble.")
        }
    }
}

class casa extends construción {
    constructor() {
        super(false)
        this.altura = 15;
        this.numPuertas = 7;
        this.numVentanas = 10;
        this.numPisos = 2;
        this.dire = "casa"
        this.area();
        this.dirección == false;
    }
    area(){
        let metrosCuadrados = this.largo * this.ancho

        console.log(`Los metros cuadrados del terreno son: ${metrosCuadrados}m2`);
    }
    
}
class edificio extends construción {
    constructor() {
        super(true)
        this.altura = 40;
        this.numPuertas = 30;
        this.numVentanas = 60;
        this.numPisos = 8;
        this.area2();
    }
    area2(){
        let metrosCuadrados = this.largo * this.ancho

        console.log(`Los metros cuadrados del terreno son: ${metrosCuadrados}m2`);
}
}

let inmueble1 = new casa
console.log(inmueble1);

let inmueble2 = new edificio
console.log(inmueble2);

