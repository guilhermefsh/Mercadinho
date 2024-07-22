import { useContext } from "react"
import { CartItem } from "../CartItem"
import { CartResume, ItemsContainer, SideBarCartContainer, TitleCart } from "./styles"
import { ProductsContext } from "../../context/ProductsContext"
import { FaCartShopping } from "react-icons/fa6";
import { FormatCurrency } from "../../utils/formatCurrency";
import { GoArrowLeft } from "react-icons/go";

export const SideBarCart = () => {

    const { cartItem, setSideBarVisible, sideBarVisible } = useContext(ProductsContext);

    const totalPrice = cartItem.reduce((acc, product) => product.price + acc, 0)

    return (
        <SideBarCartContainer visible={sideBarVisible}>
            <ItemsContainer>
                <TitleCart>
                    <i onClick={() => setSideBarVisible(false)}><GoArrowLeft size={40} /></i>
                    <span>Carrinho de compras </span>
                    <FaCartShopping size={24} color="blue" />
                </TitleCart>
                {cartItem.map((cart) => <CartItem key={cart.id} {...cart} />)}
            </ItemsContainer>

            <CartResume>
                <hr />
                <span>Total: {FormatCurrency(totalPrice, 'BRL')}</span>
                <button>Continuar Comprando</button>
            </CartResume>
        </SideBarCartContainer>
    )
}
