import { createContext, useReducer, useState } from "react";
import { CartContextProps, ProductsProps } from "../interfaces/CartContext";
import { ContextProvider } from "../interfaces/ContextProvider";
import { cartReducer } from "../reducers/Cart/cartReducers";
import { toast } from "react-toastify";
import { ActionTypes } from "../reducers/Cart/Actions";


export const CartContext = createContext({} as CartContextProps);
const initialCartState: ProductsProps[] = [];

export const CartProvider = ({ children }: ContextProvider) => {

    const [cartItem, dispatch] = useReducer(cartReducer, initialCartState)
    const [search, setSearch] = useState<string>('book3')
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const totalQuantity = cartItem.reduce((acc, product) => acc + (product.quantity || 1), 0);
    const totalPrice = cartItem.reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0);

    const handleDeleteCartItem = (id: string) => {
        dispatch({ type: ActionTypes.REMOVE_PRODUCT_IN_CART, payload: id });
    };

    const handleDecreaseQuantity = (id: string) => {
        dispatch({ type: ActionTypes.DECREMENT_PRODUCT_IN_CART, payload: id });
    };

    const handleIncreaseQuantity = (id: string) => {
        dispatch({ type: ActionTypes.INCREMENT_PRODUCT_IN_CART, payload: id });
    };

    const handleAddToCart = (product: ProductsProps) => {
        dispatch({ type: ActionTypes.ADD_PRODUCT_IN_CART, payload: product });
        toast.success('Produto adicionado no carrinho')
    };

    return (
        <CartContext.Provider value={{
            search,
            setSearch,
            cartItem,
            sideBarVisible,
            setSideBarVisible,
            quantity,
            setQuantity,
            handleAddToCart,
            handleDecreaseQuantity,
            handleIncreaseQuantity,
            handleDeleteCartItem,
            totalQuantity,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}
