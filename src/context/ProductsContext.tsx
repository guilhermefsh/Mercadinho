import { createContext, useState } from "react";
import { ContextProvider, ProductContextProps, ProductsProps } from "../interfaces/ProductsContext";


export const ProductsContext = createContext({} as ProductContextProps);

export const ProductsProvider = ({ children }: ContextProvider) => {

    const [products, setProducts] = useState<ProductsProps[]>([]);
    const [loading, setLoading] = useState(true);

    return (
        <ProductsContext.Provider value={{ setProducts, products, loading, setLoading }}>
            {children}
        </ProductsContext.Provider>
    )
}
