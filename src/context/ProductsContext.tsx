import { createContext, useState } from "react";
import { ContextProvider, ProductContextProps, ProductsProps } from "../interfaces/ProductsContext";


export const ProductsContext = createContext({} as ProductContextProps);


export const ProductsProvider = ({ children }: ContextProvider) => {

    const [cartItem, setCartItems] = useState<ProductsProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<ProductsProps[]>([]);
    const [search, setSearch] = useState<string>('book3')
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const [viewProduct, setViewProduct] = useState<ProductsProps[]>([])



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
            setSideBarVisible,
            viewProduct,
            setViewProduct
        }}>
            {children}
        </ProductsContext.Provider>
    )
}
