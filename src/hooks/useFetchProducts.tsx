import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { api } from '../lib/axios'

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
