import axios from "axios";

// ! lembrar de verificar

export const api = axios.create({
    baseURL: `https://api.mercadolibre.com/`
})

export const authAPI = axios.create({
    baseURL: `http://localhost:3333/`
})
