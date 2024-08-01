import { useQuery } from "@tanstack/react-query"
import { api } from "../lib/axios"

const fetchDetailsProducts = async (id: string) => {
    const response = await api.get(`items/${id}`)
    return response
}

export const useFetchDetailsProducts = (id: string) => {
    const query = useQuery({
        queryKey: ['DetailProduct', id],
        queryFn: () => fetchDetailsProducts(id)
    })

    return { ...query, data: query.data?.data };
}