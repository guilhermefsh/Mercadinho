import { HomeContent, MainContainer, ProductsContainer } from "./styles"
import { Loader } from "../../components/Loader";
import { ProductCard } from "../../components/ProductCard";
import { ProductsProps } from "../../interfaces/ProductsTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/rootReducer";
import { useEffect } from "react";
import { fetchProductsStart } from "../../Redux/reducers/products";


export const Home = () => {

    const { loading, products } = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductsStart())
    }, [dispatch])


    return (
        <MainContainer>
            <HomeContent>

                <h1>Seu produto está aqui!</h1>

                {loading ? (
                    <Loader />
                ) : (
                    <ProductsContainer>
                        {products.map((product: ProductsProps) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ProductsContainer>)}

            </HomeContent>
        </MainContainer>
    )
}
