import { produce } from "immer";
import { ProductsProps } from "../../interfaces/CartContext";
import { ActionTypes } from "./Actions";

type CartAction =
    | { type: ActionTypes.ADD_PRODUCT_IN_CART; payload: ProductsProps }
    | { type: ActionTypes.REMOVE_PRODUCT_IN_CART; payload: string }
    | { type: ActionTypes.INCREMENT_PRODUCT_IN_CART; payload: string }
    | { type: ActionTypes.DECREMENT_PRODUCT_IN_CART; payload: string };


export const cartReducer = (state: ProductsProps[], action: CartAction) => {

    switch (action.type) {
        case ActionTypes.REMOVE_PRODUCT_IN_CART:
            return state.filter((item) => item.id !== action.payload);

        case ActionTypes.DECREMENT_PRODUCT_IN_CART:
            return produce(state, draft => {
                const item = draft.find(item => item.id === action.payload);
                if (item && item.quantity! > 1) {
                    item.quantity!--;
                }
            });

        case ActionTypes.INCREMENT_PRODUCT_IN_CART:
            return produce(state, draft => {
                const item = draft.find(item => item.id === action.payload);
                if (item) {
                    item.quantity = (item.quantity || 1) + 1;
                }
            });

        case ActionTypes.ADD_PRODUCT_IN_CART: {
            const isProductInCart = state.some(item => item.id === action.payload.id);

            if (isProductInCart) {
                return state;
            }
            return [...state, { ...action.payload, quantity: 1 }];
        }
        default:
            return state;
    }
};