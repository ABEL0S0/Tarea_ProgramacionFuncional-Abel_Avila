/*3) Diseñe la función que recibe como parámetro un array de string. 
La función debe devolver el array ordenado. 
(Orden ascendente - consulte el método sort)
*/
//Funcion que ordena un arreglo de palabras de forma acendente
function ordenar(array)
{
    array.sort((a, b) => a.localeCompare(b));
  return array
}
let palabras1=["Zeta","Gundam","Giddean","Iron","Abedul"]
console.log(ordenar(palabras1))
