import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { api, detailProductAPI } from '../lib/axios'

export const useFetchProducts = () => {
    const { setLoading, setProducts } = useContext(ProductsContext)
    const fetchProducts = async (query: string) => {
        try {
            setLoading(true)
            const response = await api.get('', {
                params: {
                    q: query
                }
            })
            setProducts(response.data.results);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    return { fetchProducts };
}

export const useFetchDetailsProducts = () => {

    const { setViewProduct, setLoading } = useContext(ProductsContext)

    const fetchDetailsProducts = async (id: string) => {
        try {
            setLoading(true)
            const res = await detailProductAPI.get(`/${id}`)
            setViewProduct([res.data])
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    return { fetchDetailsProducts };
}
