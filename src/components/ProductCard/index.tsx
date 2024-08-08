import { FormatCurrency } from "../../utils/formatCurrency";
import { OldPrice, InfoProducts } from "./styles";
import { useNavigate } from "react-router-dom";
import { ProductsProps } from "../../interfaces/ProductsContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/reducers/Cart";

interface productProps {
    product: ProductsProps
}

export const ProductCard = ({ product }: productProps) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleIsNavigatePageProduct = (id: string) => {
        navigate(`/product/${id}`)
    }

    return (
        <>
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
                    {product.original_price && (
                        <OldPrice>{FormatCurrency(product.original_price, 'BRL')}</OldPrice>
                    )}
                    <span>{FormatCurrency(product.price, 'BRL')}</span>
                    <button onClick={() => dispatch(addToCart(product))}>Adicionar ao carrinho</button>
                    <button onClick={() => handleIsNavigatePageProduct(product.id)}>ver mais</button>
                </InfoProducts>
            </div>
        </>
    )
}
