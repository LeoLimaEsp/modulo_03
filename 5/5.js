class Alumnos {
    constructor( nombre, apellido, caliFinal, inscrito){
        this.nombre = nombre;
        this.apellido = apellido;
        this.caliFinal = caliFinal;
        this.inscrito = inscrito;
        this.ObtenerInicialesDeAlumno();
    }

    ObtenerInicialesDeAlumno(){
        let inicial = this.nombre;
        let inicial2 = inicial.split('');
        let apellido2 = this.apellido;
        let apellido22 = apellido2.split('');
        console.log(`Iniciales del alumno: ${inicial2[0]}, ${apellido22[0]}`);
    }
}

let alumno1 = new Alumnos("Leo","Lima", 8, true)


let alumno2 = new Alumnos("Alan","Najera", 9, false)


let alumno3 = new Alumnos("Miguel","Lozano", 6, true)

console.log(alumno1);
console.log(alumno2);
console.log(alumno3);

