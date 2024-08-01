import { BsCartDashFill } from "react-icons/bs"
import { AddNewProductContainer, CartItemContainer } from "./styles"
import { ProductsProps } from "../../interfaces/ProductsContext"
import { FormatCurrency } from "../../utils/formatCurrency"
import { ArrowLeft, ArrowRight } from "phosphor-react"
import { useCart } from "../../hooks/useCart"


export const CartItem = (cart: ProductsProps) => {

    const { handleDecreaseQuantity, handleDeleteCartItem, handleIncreaseQuantity } = useCart()

    return (
        <CartItemContainer>
            <img
                src={cart.thumbnail}
                alt={cart.title}
            />

            <div>
                <h3>{cart.title}</h3>

                <AddNewProductContainer>
                    <i onClick={() => handleDecreaseQuantity(cart.id)}><ArrowLeft size={20} /></i>
                    <p>{cart.quantity}</p>
                    <i onClick={() => handleIncreaseQuantity(cart.id)}><ArrowRight size={20} /></i>
                </AddNewProductContainer>

                {cart.quantity ?
                    <p>{FormatCurrency(cart.price * cart.quantity, 'BRL')}</p>
                    :
                    <p>{FormatCurrency(cart.price, 'BRL')}</p>
                }

                <button onClick={() => handleDeleteCartItem((cart.id))} type="button">
                    <BsCartDashFill size={20} />
                </button>
            </div>


        </CartItemContainer>
    )
}
