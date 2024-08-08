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





