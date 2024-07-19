import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ProductContextProps {
    products: products[];
    setProducts: Dispatch<SetStateAction<ProductsProps[]>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface ProductsProps {
    id: string;
    title: string;
    thumbnail: string;
    original_price: number;
    price: number;
}

export interface ContextProvider {
    children: ReactNode;
}



