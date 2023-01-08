/*1) Una función recibe como parámetro una cadena de caracteres. Las palabras de esta cadena de caracteres están separadas por puntos y comas. La función debe imprimir cada palabra. Por ejemplo
"Este;es;un;mensaje". El resultado sería:
Este
es 
un
mensaje
Nota importante: Debe hacer 5 llamadas a la función creada. En cada llamada debe usar palabras diferentes.
*/
const Cadena= function(palabras,div)
{
    return palabras.split(div).forEach(item => {return console.log(item)});
    
}
//Primera llamada
console.log("1:")
const palabras1="Este;es;un;mensaje";
Cadena(palabras1,";");
//Segunda llamada
console.log("\n2:")
const palabras2="Esto;No;Es;Un;Mensaje";
Cadena(palabras2,";");
//tercera llamada
console.log("\n3:")
const palabras3="No;se;que;más;escribir";
Cadena(palabras3,";");
//Cuarta llamada
console.log("\n4:")
const palabras4="Algo;que;se;puede;escribir";
Cadena(palabras4,";");
//Quinta llamada
console.log("\n5:")
const palabras5="las;redes sociales;son;algo malo";
Cadena(palabras5,";");