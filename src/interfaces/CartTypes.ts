import { ProductsProps } from "./ProductsContext";

export interface UpdateCartItemPayload {
    id: string;
    newQuantity: number;
}

export type CartState = {
    items: ProductsProps[];
    totalQuantity: number;
    totalPrice: number;
}