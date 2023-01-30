import axios from 'axios'

export async function getApi(url: string){
    const api = await axios.create().get(`${url}`)  
    return api.data
} 