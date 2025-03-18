import { GIFResponse} from "../interface/gif.response";
const apiKey = '6yTwPZ2kgiri5vNhHjqr1szwkpSC8L6A'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then((resp) => resp.json())
.then((body: GIFResponse) => console.log(body.data.images.fixed_width.url))
.catch((err) => console.error(err));