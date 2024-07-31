import { Dispatch, SetStateAction } from "react";

export interface ProductContextProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    cartItem: ProductsProps[]
    setCartItems: Dispatch<SetStateAction<ProductsProps[]>>;
    sideBarVisible: boolean,
    setSideBarVisible: Dispatch<SetStateAction<boolean>>;
    quantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
}

export interface ProductsProps {
    id: string;
    title: string;
    thumbnail: string;
    original_price?: number;
    price: number;
    quantity?: number;
    description: string;
    pictures?: string;
}
export interface ViewProductProps {
    viewProduct: ProductsProps;
}

export interface ProductsDataResponse {
    results: ProductsProps[];

}





