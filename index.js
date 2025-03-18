//Funcion que recibe una matriz (array de arrays) y devuelve su transpuesta
const transpuesta = (matriz) =>{
    let nuevoArreglo =[]
    for (let i = 0; i < matriz[0].length; i++) {
        nuevoArreglo.push([])
