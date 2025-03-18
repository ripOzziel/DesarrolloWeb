
interface Hero {
    nombre: String,
    edad: Number,
    apodo: String,
    poder?: String
}

/*
Step 1: crear la interfaz
2: 
*/
interface CreateNewHero{
    nombre: String,
    edad: Number,
    apodo: String,
    poder?: String

}

const persona      = {
    nombre: 'Saul',
    edad: 20,
    apodo: 'Paulillo'
}

const createNewHero = ({nombre, edad, apodo, poder}: CreateNewHero) => ({
    id: 1234,
    nombre: nombre,
    edad: edad,
    apodo: apodo,
    poder: poder ?? "No tiene poderes" //nueva condicional ternaria, si le entiendes no seas mamon
})
console.log(createNewHero({...persona, poder: 'Andar brinque y brinque'}))

const rene: Hero = {
    nombre: 'Rene',
    edad: 666,
    apodo: 'renegul',
    poder: 'UWU'

}


console.log(createNewHero(rene))

/*
console.log(persona.nombre) //imprimir propiedades de los objetos forma 1
console.log(persona['nombre']) //igual, pero de otra manera
console.log({
    nombre : persona.nombre     //another way
})
!La forma mas importante segun xeni bb
const {nombre} = persona
console.log(nombre)

*/

