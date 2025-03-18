import { GIFResponse } from '../interface/gif.response'
import {giphyApi} from './axios'

export const  obtenerImagen = async() => {

    try {
        const respuesta = giphyApi.get<GIFResponse>('/random1')
    
        return (await respuesta).data.data.images.fixed_width.url
    } catch (error) {
        throw "URL no encontrada"
    }
}
/*
export const obtenerImagenPromesa =  () => {
    return new Promise((resolve, reject) => {
        resolve('ola')
    })
}
*/
obtenerImagen()
.then((url) => console.log({url}))
.catch((err) => console.log(err))