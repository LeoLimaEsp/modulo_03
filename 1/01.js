function esUnPalindromo(texto)
{
    const str = texto.replace(/[\W_]/g,"");
    const stri = str.split("").reverse().join("");

    return str === stri ? "True" : "False";

}

console.log(esUnPalindromo("anita lava la tina"));
console.log(esUnPalindromo("oso"));

