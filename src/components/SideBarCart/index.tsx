import { useContext } from "react"
import { CartItem } from "../CartItem"
import { CartResume, ItemsContainer, Overlay, SideBarCartContainer, TitleCart } from "./styles"
import { ProductsContext } from "../../context/ProductsContext"
import { FaCartShopping } from "react-icons/fa6";
import { FormatCurrency } from "../../utils/formatCurrency";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export const SideBarCart = () => {

    const { cartItem, setSideBarVisible, sideBarVisible } = useContext(ProductsContext);
    const { totalQuantity, totalPrice } = useCart();



    return (
        <>
            <Overlay $visible={sideBarVisible} onClick={() => setSideBarVisible(false)} />
            <SideBarCartContainer $visible={sideBarVisible}>
                <ItemsContainer>
                    <TitleCart>
                        <i onClick={() => setSideBarVisible(false)}><GoArrowLeft size={40} /></i>
                        <span>Carrinho de compras </span>
                        <i><FaCartShopping size={24} /></i>
                    </TitleCart>
                    {cartItem.map((cart) => <CartItem key={cart.id} {...cart} />)}
                </ItemsContainer>

                <CartResume>
                    <hr />
                    <p>Total de Itens: {totalQuantity}</p>
                    <span>Total: {FormatCurrency(totalPrice, 'BRL')}</span>
                    <Link to='/purchase'>Continuar Comprando</Link>
                </CartResume>
            </SideBarCartContainer>
        </>
    )
}
