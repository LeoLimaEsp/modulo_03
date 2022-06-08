class Bebida{
    constructor(envase = "Botella", sabor = "Limón"){
        this.envase = envase
        this.sabor = sabor
        this.tamaño 
    }
    
    //definición de getter y setter
    // getEnvase(){//get -> obtener, consultar
    //     return this.envase
    // }
    
    // getSabor(){
    //     return this.sabor
    // }
    
    set envase(nuevoEnvase){//set -> asignar, definir, colocar
        this.nuevoEnvase = nuevoEnvase
    }
    
    set setSabor(nuevoSabor){
        this.sabor = nuevoSabor
    }
}
let nuevaBebida = new Bebida();
nuevaBebida.envase = "cartón";
nuevaBebida.setSabor = "uva";
console.log(nuevaBebida);
