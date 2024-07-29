import { createContext, useState } from "react";
import { ContextProvider, ProductContextProps, ProductsProps } from "../interfaces/ProductsContext";


export const ProductsContext = createContext({} as ProductContextProps);


export const ProductsProvider = ({ children }: ContextProvider) => {

    const [cartItem, setCartItems] = useState<ProductsProps[]>([]);
    const [search, setSearch] = useState<string>('book3')
    const [sideBarVisible, setSideBarVisible] = useState(false);

    return (
        <ProductsContext.Provider value={{
            search,
            setSearch,
            cartItem,
            setCartItems,
            sideBarVisible,
            setSideBarVisible,
        }}>
            {children}
        </ProductsContext.Provider>
    )
}
