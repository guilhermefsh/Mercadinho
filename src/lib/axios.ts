import axios from "axios";

export const api = axios.create({
    baseURL: `https://api.mercadolibre.com/sites/MLB/search`
})

export const itemAPI = axios.create({
    baseURL: `https://api.mercadolibre.com/items`
})

