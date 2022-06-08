class Bebida{
    constructor(envase = "Botella", sabor = "Limón"){
        this.envase = envase
        this.sabor = sabor
        this.tamaño 
    }
    
    //definición de getter y setter
    get Envase(){//get -> obtener, consultar
        return this.envase
    }
    
    get Sabor(){
        return this.sabor
    }
    
    set Envase(nuevoEnvase){//set -> asignar, definir, colocar
        this.nuevoEnvase = nuevoEnvase
    }
    
    set Sabor(nuevoSabor){
        this.sabor = nuevoSabor
    }
}

let nuevaBebida = new Bebida();

console.log(nuevaBebida.sabor); //uso del getter

nuevaBebida.sabor = "fresa"; //uso del setter
console.log(nuevaBebida.sabor); //aqui el setter ya hizo el cambio.
