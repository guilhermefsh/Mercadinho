import axios from "axios";

export const api = axios.create({
    baseURL: `https://api.mercadolibre.com/sites/MLB/search`
})

export const detailProductAPI = axios.create({
    baseURL: `https://api.mercadolibre.com/items`
})

