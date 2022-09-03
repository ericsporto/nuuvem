import axios from "axios";


export function getServerApi() {
    const api = axios.create ({
        baseURL: 'https://api.chucknorris.io/jokes'
    })
    return api
}