class Maestro{//superclase, clase padre
    constructor(materia){
        this.materia = materia
        this.promedioGrupo
        this.calificaciones = [] 
    }
    
    asignarCalificaciones(...calificaciones){
        this.calificaciones = this.calificaciones.concat(calificaciones)
    }
    
    calcularPromedio(){
        let suma = 0
        let promedio = 0
        for(let i = 0; i < this.calificaciones.length; i++){
            suma = suma + this.calificaciones[i]
        }
        this.promedioGrupo = suma / this.calificaciones.length
        return this.promedioGrupo
    }
}

class MaestroFisica extends Maestro{//subclase o clase hijo
    constructor(antiguedad){
        super("Física") //super().materia = "Física"
        this.antiguedad = antiguedad
    }
    
    saludar(){
        console.log("Hola soy maestro de " + this.materia)
    }
}

class MaestroMusica extends Maestro{//subclase o clase hijo
    constructor(edad){
        super("Música")
        this.edad = edad
    }
}

let pablo = new MaestroMusica


console.log(pablo);
console.log(pablo.calificaciones);
pablo.asignarCalificaciones(10,2,4,3,3,3,3,3,3);
console.log(pablo.calcularPromedio());