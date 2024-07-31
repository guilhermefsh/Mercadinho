import { createContext, useState } from "react";
import { ContextProvider, ProductContextProps, ProductsProps } from "../interfaces/ProductsContext";


export const ProductsContext = createContext({} as ProductContextProps);


export const ProductsProvider = ({ children }: ContextProvider) => {

    const [cartItem, setCartItems] = useState<ProductsProps[]>([]);
    const [search, setSearch] = useState<string>('book3')
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);

    return (
        <ProductsContext.Provider value={{
            search,
            setSearch,
            cartItem,
            setCartItems,
            sideBarVisible,
            setSideBarVisible,
            quantity,
            setQuantity
        }}>
            {children}
        </ProductsContext.Provider>
    )
}
