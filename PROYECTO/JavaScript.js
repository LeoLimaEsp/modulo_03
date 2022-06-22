let search_input = document.getElementById("search_input")
let  = document.getElementById("container")
let json = JSON.parse(file)
let personajes = json.results


function fetchStarWars () {  // foreach dentro de funcion para poder ser llamada en diferentes partes del codigo
  personajes.forEach(element => {
    container.innerHTML+= loadCard(element.name,element.gender,element.birth_year, element.mass)
  });
}

fetchStarWars() // al cargar la pagina se llama esta funcion por si sola, mostrando todos los personajes

search_input.addEventListener("keyup", (event) => {

  container.innerHTML = "";
  let searching = personajes.filter(({ name }) => name
                                    .toLocaleLowerCase()
                                    .includes(event.target.value
                                    .toLocaleLowerCase()));
                                    
  searching.forEach(element =>container.innerHTML+= loadCard(element.name,element.gender,element.birth_year,  element.mass));

  if(event.target.value === ""){ 
    container.innerHTML = "";  //Limpia el container
    fetchStarWars();  //si no escribio nada, cargar todos los personajes
}
});

function loadCard(name,gender,birth_year,mass){
  return `
  <div class="card" style="width: 18rem;">
      <img src="./img/${name}.jpg" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h5 class="card-title"> Gender: ${gender}</h5>
          <h5 class="card-title"> Birth-Year: ${birth_year}</h5>
          <h5 class="card-title"> Mass: ${mass}</h5>
      </div>
  </div>`
}