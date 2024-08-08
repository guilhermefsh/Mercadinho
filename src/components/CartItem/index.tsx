import { BsCartDashFill } from "react-icons/bs"
import { AddNewProductContainer, CartItemContainer } from "./styles"
import { ProductsProps } from "../../interfaces/ProductsTypes"
import { FormatCurrency } from "../../utils/formatCurrency"
import { ArrowLeft, ArrowRight } from "phosphor-react"
import { useDispatch } from "react-redux"
import { decreaseQuantity, deleteCartItem, increaseQuantity } from "../../Redux/reducers/Cart"


export const CartItem = (cart: ProductsProps) => {

    const dispatch = useDispatch()

    return (
        <CartItemContainer>
            <img
                src={cart.thumbnail}
                alt={cart.title}
            />

            <div>
                <h3>{cart.title}</h3>

                <AddNewProductContainer>
                    <i onClick={() => dispatch(decreaseQuantity(cart.id))}><ArrowLeft size={20} /></i>
                    <p>{cart.quantity}</p>
                    <i onClick={() => dispatch(increaseQuantity(cart.id))}><ArrowRight size={20} /></i>
                </AddNewProductContainer>

                {cart.quantity ?
                    <p>{FormatCurrency(cart.price * cart.quantity, 'BRL')}</p>
                    :
                    <p>{FormatCurrency(cart.price, 'BRL')}</p>
                }

                <button onClick={() => dispatch(deleteCartItem(cart.id))} type="button">
                    <BsCartDashFill size={20} />
                </button>
            </div>


        </CartItemContainer>
    )
}
