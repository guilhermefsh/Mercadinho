import { HomeContent, MainContainer, ProductsContainer } from "./styles"
import { Loader } from "../../components/Loader";
import { ProductCard } from "../../components/ProductCard";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { ProductsProps } from "../../interfaces/CartContext";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Home = () => {

    const { search } = useContext(CartContext);
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
