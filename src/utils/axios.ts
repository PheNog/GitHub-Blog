import axios from 'axios'

export async function getApi(url: string){
    const api = await axios.create().get(`${url}`)  
    return api.data
} 

// async function getApiGitHub(){
//     const gitApi = await api.get('http://api.github.com/users/PheNog')

//     console.log(gitApi.data)
// }

// useEffect(() => {
//     getApiGitHub()
// },[])