let paises = ["Mexico", "Panama", "Guatemala", "El salvador", "Chingapandapio"]

function longestCountry(array){
    array.sort( function(a,b) {
        return b.length-a.length //ordena el array de mayor a menor
    });
    return array[0];
}
console.log(longestCountry(paises));