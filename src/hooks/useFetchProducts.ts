import { api } from '../lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosPromise } from 'axios'
import { ProductsDataResponse } from '../interfaces/ProductsContext'

export const fetchProducts = async (query: string): AxiosPromise<ProductsDataResponse> => {
    const response = await api.get<ProductsDataResponse>('sites/MLB/search', {
        params: {
            q: query,
        },
    });
    return response;
}

export const useFetchProducts = (query: string) => {
    const queryResult = useQuery({
        queryKey: ['products-data', query],
        queryFn: () => fetchProducts(query),
    });


    return {
        ...queryResult,
        data: queryResult.data?.data ?? { results: [] }
    };
}

