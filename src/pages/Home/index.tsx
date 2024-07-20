/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import { HomeContent, InfoProducts, OldPrice, ProductsContainer } from "./styles"
import { ProductsContext } from "../../context/ProductsContext"
import { FormatCurrency } from "../../utils/formatCurrency";
import { Loader } from "../../components/Loader";
import { useFetchProducts } from "../../hooks/useFetchProducts";

export const Home = () => {

    const { products, loading, search } = useContext(ProductsContext);
    const { fetchProducts } = useFetchProducts();

    useEffect(() => {
        fetchProducts(search);
    }, [])


    return (
        <main>
            <HomeContent>

                <h1>Seu produto está aqui!</h1>
                {loading ? (
                    <Loader />
                ) : (
                    <ProductsContainer>
                        {products.map(product =>
                            <div key={product.id}>
                                <figure>
                                    <img
                                        src={product.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
                                        alt={product.title}
                                    />
                                </figure>
                                <InfoProducts>
                                    <p>
                                        {product.title.length > 60 ? product.title.substring(0, 30) + '' : product.title}
                                    </p>

                                    {product.original_price ?
                                        <OldPrice>{FormatCurrency(product.original_price, 'BRL')}</OldPrice>
                                        : ''
                                    }
                                    <span>{FormatCurrency(product.price, 'BRL')}</span>

                                    <button>Adicionar ao carrinho</button>
                                </InfoProducts>
                            </div>
                        )}
                    </ProductsContainer>)}

            </HomeContent>
        </main>
    )
}
