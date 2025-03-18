import axios from "axios";
import { GIFResponse } from "../interface/gif.response";
const apiKey = '6yTwPZ2kgiri5vNhHjqr1szwkpSC8L6A'

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,

    },
});

giphyApi.get<GIFResponse>('/random')
.then((resp)=> console.log(resp.data.data.images.fixed_width.url))
.catch((err) => console.error(err))
