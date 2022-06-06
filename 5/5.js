class Alumnos {
    constructor( nombre, apellido, inscrito, ...calificacionesFinales){
        this.nombre = nombre;
        this.apellido = apellido;
        this.calificacionesFinales = calificacionesFinales;
        this.inscrito = inscrito;
        this.ObtenerInicialesDeAlumno();
        this.NombreCompleto();
        this.Promedio();
        this.CheckAprocación();
        this.promedioFinal = 0;
    }
    

    ObtenerInicialesDeAlumno(){
        let inicial = this.nombre;
        let inicial2 = inicial.split('');
        let apellido2 = this.apellido;
        let apellido22 = apellido2.split('');
        console.log(`Iniciales del alumno: ${inicial2[0]}, ${apellido22[0]}`);
    }

    NombreCompleto(){
        console.log(`Nombre completo del alumno: ${this.nombre} ${this.apellido}.`)
    }

    Promedio(){
        let suma=0;
        let j=0;
        for(let i=0; j < this.calificacionesFinales.length; j++){
            suma += this.calificacionesFinales[j];
        }
        this.promedioFinal = suma / this.calificacionesFinales.length;
        console.log(`El promedio final es: ${this.promedioFinal}`);
    }

    CheckAprocación(){
        if(this.promedioFinal >=6){
            console.log("todas las calificaciones son aprobatorias.")
        }
        else{
            console.log("Alguna de las calificaciones no son aprobatorias.")
        }
    }
}

let alumno1 = new Alumnos("Leonel","Lima", true, 6,6,6,6,6)


let alumno2 = new Alumnos("Alan","Najera", false, 9,9,9,9,5)


let alumno3 = new Alumnos("Miguel","Lozano", true,6,4,6,4,6 )

console.log(alumno1);
console.log(alumno2);
console.log(alumno3);



