import { useContext } from "react"
import { CartItem } from "../CartItem"
import { CartResume, ItemsContainer, Overlay, SideBarCartContainer, TitleCart } from "./styles"
import { ProductsContext } from "../../context/ProductsContext"
import { FaCartShopping } from "react-icons/fa6";
import { FormatCurrency } from "../../utils/formatCurrency";
import { GoArrowLeft } from "react-icons/go";

export const SideBarCart = () => {

    const { cartItem, setSideBarVisible, sideBarVisible } = useContext(ProductsContext);

    const totalQuantity = cartItem.reduce((acc, product) => acc + (product.quantity || 1), 0);
    const totalPrice = cartItem.reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0);

    return (
        <>
            <Overlay visible={sideBarVisible} onClick={() => setSideBarVisible(false)} />
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
                    <p>Total de Itens: {totalQuantity}</p>
                    <span>Total: {FormatCurrency(totalPrice, 'BRL')}</span>
                    <button>Continuar Comprando</button>
                </CartResume>
            </SideBarCartContainer>
        </>
    )
}
