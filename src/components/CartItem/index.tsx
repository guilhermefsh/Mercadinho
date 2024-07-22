import { BsCartDashFill } from "react-icons/bs"
import { CartItemContainer } from "./styles"
import { ProductsProps } from "../../interfaces/ProductsContext"
import { FormatCurrency } from "../../utils/formatCurrency"
import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"


export const CartItem = (cart: ProductsProps) => {

    const { cartItem, setCartItems } = useContext(ProductsContext)

    const handleDeleteCartItem = () => {
        const updateItems = cartItem.filter((item) => item.id != cart.id);
        setCartItems(updateItems)
    }

    return (
        <CartItemContainer>
            <img
                src={cart.thumbnail}
                alt={cart.title}
            />

            <div>
                <h3>{cart.title}</h3>
                <p>{FormatCurrency(cart.price, 'BRL')}</p>

                <button onClick={handleDeleteCartItem} type="button">
                    <BsCartDashFill size={20} />
                </button>
            </div>


        </CartItemContainer>
    )
}
