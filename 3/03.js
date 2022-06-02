const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

let grados = prompt("Ingresa los grados fahrenheiteit");
let resultadoGrados = fahrenheitToCelsius(grados);
alert("Los grados celsius son: " + resultadoGrados.toFixed(2)) /* para tener dos decimales nada mas */
