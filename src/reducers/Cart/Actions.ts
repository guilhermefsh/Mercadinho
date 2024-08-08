import { ProductsProps } from "../../interfaces/CartContext"

export enum ActionTypes {
    ADD_PRODUCT_IN_CART = 'ADD_PRODUCT_IN_CART',
    REMOVE_PRODUCT_IN_CART = 'REMOVE_PRODUCT_IN_CART',
    INCREMENT_PRODUCT_IN_CART = 'INCREMENT_PRODUCT_IN_CART',
    DECREMENT_PRODUCT_IN_CART = 'DECREMENT_PRODUCT_IN_CART'
}

export const addProductInCartAction = (cartItem: ProductsProps) => {
    return {
        type: ActionTypes.ADD_PRODUCT_IN_CART,
        payload: {
            cartItem
        }
    }
}

export const removeProductInCartAction = (cartItem: ProductsProps) => {
    return {
        type: ActionTypes.REMOVE_PRODUCT_IN_CART,
        payload: {
            cartItem
        }
    }
}

export const incrementProductInCartAction = (cartItem: ProductsProps) => {
    return {
        type: ActionTypes.ADD_PRODUCT_IN_CART,
        payload: {
            cartItem
        }
    }
}

export const decrementProductInCartAction = (cartItem: ProductsProps) => {
    return {
        type: ActionTypes.DECREMENT_PRODUCT_IN_CART,
        payload: {
            cartItem
        }
    }
}

