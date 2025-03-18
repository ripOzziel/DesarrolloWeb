//funcion tradicional
function saludarPersona(nombre:string) {
    return `Hola ${nombre}`;
}
console.log(saludarPersona('shiram'))

//funcion de flecha (primera edicion)
const funcionFlecha = (nombre: string)=>{
    return `Ola ${nombre}`
}
console.log(funcionFlecha('hiram'))

//truquito
if (true) console.log('trukito');

    //funcion de flecha (segunda edicion)
const funcionFlecha2 = (nombre: string)=> `Ola ${nombre}`
console.log(funcionFlecha2('iransito'))

const obtenerUsuario = () => 
    (
    {
        uid: 'abc-12345',
        nombre: 'hyseme'
    }
)
console.log(obtenerUsuario())


//!PRUEBA
const heroes = [
    {
        id: 1,
        nombre: 'SuperWero'
    },
    {
        id : 2,
        nombre: 'Don Gatsby',
        poder: 'periquear en el baño'
    }
]
