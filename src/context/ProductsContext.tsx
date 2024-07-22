import { createContext, useState } from "react";
import { ContextProvider, ProductContextProps, ProductsProps } from "../interfaces/ProductsContext";


export const ProductsContext = createContext({} as ProductContextProps);


export const ProductsProvider = ({ children }: ContextProvider) => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<ProductsProps[]>([]);
    const [search, setSearch] = useState<string>('book3')
    const [cartItem, setCartItems] = useState<ProductsProps[]>([]);
    const [sideBarVisible, setSideBarVisible] = useState(false);

    return (
        <ProductsContext.Provider value={{
            setProducts,
            products,
            loading,
            setLoading,
            search,
            setSearch,
            cartItem,
            setCartItems,
            sideBarVisible,
            setSideBarVisible
        }}>
            {children}
        </ProductsContext.Provider>
    )
}
