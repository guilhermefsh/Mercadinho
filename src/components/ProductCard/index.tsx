import { useContext } from "react";
import { FormatCurrency } from "../../utils/formatCurrency";
import { OldPrice, InfoProducts } from "./styles";
import { ProductsContext } from "../../context/ProductsContext";
import { ProductsProps } from "../../interfaces/ProductsContext";

export const ProductCard = () => {

    const { products, cartItem, setCartItems } = useContext(ProductsContext)

    const handleAddToCart = (product: ProductsProps) => {
        setCartItems([...cartItem, product])
    }

    return (
        <>
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
                            <OldPrice>{FormatCurrency(product.original_price, 'BRL')}</OldPrice> : ''
                        }
                        <span>{FormatCurrency(product.price, 'BRL')}</span>

                        <button onClick={() => handleAddToCart(product)}>Adicionar ao carrinho</button>
                    </InfoProducts>
                </div>
            )}
        </>
    )
}
