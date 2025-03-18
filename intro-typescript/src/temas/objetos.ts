const persona = {
    apellido: 'Mercado',
    edad: '38',
    direccion: {
        ciudad: 'Ensenada',
        cp: 28901,
        lat: 5.62738,
        log: 12.74389
    }
} //as const

console.log(persona)

const persona2 = structuredClone(persona) //esta es la opcion mas optima para hacer una copia de opjetos

persona2.apellido = 'Geffroyd'

console.log(persona2)