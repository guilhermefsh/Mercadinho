import { BsCartDashFill } from "react-icons/bs"
import { AddNewProductContainer, CartItemContainer } from "./styles"
import { ProductsProps } from "../../interfaces/ProductsContext"
import { FormatCurrency } from "../../utils/formatCurrency"
import { useContext, useState } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import { ArrowLeft, ArrowRight } from "phosphor-react"


export const CartItem = (cart: ProductsProps) => {

    const { cartItem, setCartItems, updateCartItemQuantity } = useContext(ProductsContext)
    const [quantity, setQuantity] = useState(cart.quantity || 1);

    const handleDeleteCartItem = () => {
        const updateItems = cartItem.filter((item) => item.id != cart.id);
        setCartItems(updateItems)
    }
    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateCartItemQuantity(cart.id, newQuantity);
        }
    };

    const handleIncreaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateCartItemQuantity(cart.id, newQuantity);
    };


    return (
        <CartItemContainer>
            <img
                src={cart.thumbnail}
                alt={cart.title}
            />

            <div>
                <h3>{cart.title}</h3>

                <AddNewProductContainer>
                    <i onClick={handleDecreaseQuantity}><ArrowLeft size={20} /></i>
                    <p>{quantity}</p>
                    <i onClick={handleIncreaseQuantity}><ArrowRight size={20} /></i>
                </AddNewProductContainer>

                <p>{FormatCurrency(cart.price * quantity, 'BRL')}</p>

                <button onClick={handleDeleteCartItem} type="button">
                    <BsCartDashFill size={20} />
                </button>
            </div>


        </CartItemContainer>
    )
}
