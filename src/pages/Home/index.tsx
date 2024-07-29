import { HomeContent, MainContainer, ProductsContainer } from "./styles"
import { Loader } from "../../components/Loader";
import { ProductCard } from "../../components/ProductCard";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { ProductsProps } from "../../interfaces/ProductsContext";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

export const Home = () => {

    const { search } = useContext(ProductsContext);
    const { data: products, isLoading } = useFetchProducts(search);

    return (
        <MainContainer>
            <HomeContent>

                <h1>Seu produto está aqui!</h1>

                {isLoading ? (
                    <Loader />
                ) : (
                    <ProductsContainer>
                        {products?.results.map((product: ProductsProps) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ProductsContainer>)}

            </HomeContent>
        </MainContainer>
    )
}
