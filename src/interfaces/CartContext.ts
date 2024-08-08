import { Dispatch, SetStateAction } from "react";

export interface CartContextProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    cartItem: ProductsProps[]
    sideBarVisible: boolean,
    setSideBarVisible: Dispatch<SetStateAction<boolean>>;
    quantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
    handleDeleteCartItem: (id: string) => void
    handleDecreaseQuantity: (id: string) => void
    handleIncreaseQuantity: (id: string) => void
    handleAddToCart: (product: ProductsProps) => void
    totalQuantity: number,
    totalPrice: number,
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





