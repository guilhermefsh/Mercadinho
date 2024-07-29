/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import { HomeContent, MainContainer, ProductsContainer } from "./styles"
import { ProductsContext } from "../../context/ProductsContext"
import { Loader } from "../../components/Loader";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { ProductCard } from "../../components/ProductCard";

export const Home = () => {

    const { loading, search } = useContext(ProductsContext);
    const { fetchProducts } = useFetchProducts();

    useEffect(() => {
        fetchProducts(search);
    }, [])

    return (
        <MainContainer>
            <HomeContent>

                <h1>Seu produto está aqui!</h1>

                {loading ? (
                    <Loader />
                ) : (
                    <ProductsContainer>
                        <ProductCard />
                    </ProductsContainer>)}

            </HomeContent>
        </MainContainer>
    )
}
