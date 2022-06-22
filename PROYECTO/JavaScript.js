let search_input = document.getElementById("search_input")
let container = document.getElementById("container")

let json = JSON.parse(file)
let personajes = json.results

container.innerHTML = personajes.name;
function search() {
  let personaje = search_personaje(search_input.value)
  
  container.innerHTML = `
  <p>
    Name: ${personaje.name}<br/>
    Gender: ${personaje.gender}<br/>
    Birth: ${personaje.birth_year}
  </p>
  `

}

function search_personaje(personaje_name) {
  for(let i = 0; i<personajes.length; i++) {
    //console.log(personajes[i].name)
    
    if(personajes[i].name == personaje_name) {
      return personajes[i]
    }
  }
}

console.log(personajes)