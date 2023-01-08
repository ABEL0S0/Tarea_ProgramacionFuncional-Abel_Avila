/*
2) Diseñe la función que recibe como parámetro un array de enteros. 
La función debe devolver el array ordenado. 
(Orden ascendente - consulte el método sort)
*/
//Funcion que ordena un arreglo de numeros de forma acendente
function ordenar(array)
{
  array.sort((a, b) => a - b)
  return array
}
let numeros1=[15, 12, 2, 4, 1, 5];
console.log(ordenar(numeros1));
