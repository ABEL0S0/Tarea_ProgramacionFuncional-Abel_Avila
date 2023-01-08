/*
4) Una cadena de caracteres contienes los nombres de ciudades. 
Se pide convertir esa cadena en un array, 
y luego ordenarla en forma descendente.
Por ejemplo: "Quito-Barcelona-Lima-Guayaquil-Bogotá-Cali-Esmeraldas"
El resultado sería:
Quito
Lima
Guayaquil
Esmeraldas
Cali
Bogotá
Barcelona
*/
const ciudades="Quito-Barcelona-Lima-Guayaquil-Bogotá-Cali-Esmeraldas"
// Convertimos la cadena en un array
let CiudadesArray = ciudades.split("-")
// Ordenamos el array en forma descendente
CiudadesArray.sort((a, b) => b.localeCompare(a))
//Imprime el array
console.log(CiudadesArray)
