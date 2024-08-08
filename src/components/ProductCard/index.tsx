import { FormatCurrency } from "../../utils/formatCurrency";
import { OldPrice, InfoProducts } from "./styles";
import { useNavigate } from "react-router-dom";
import { ProductsProps } from "../../interfaces/CartContext";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

interface productProps {
    product: ProductsProps
}

export const ProductCard = ({ product }: productProps) => {

    const { handleAddToCart } = useContext(CartContext);
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
                    <button onClick={() => handleAddToCart(product)}>Adicionar ao carrinho</button>
                    <button onClick={() => handleIsNavigatePageProduct(product.id)}>ver mais</button>
                </InfoProducts>
            </div>
        </>
    )
}
