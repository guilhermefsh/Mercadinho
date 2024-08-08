import { useContext } from "react"
import { CartItem } from "../CartItem"
import { CartResume, ItemsContainer, Overlay, SideBarCartContainer, TitleCart } from "./styles"
import { ProductsContext } from "../../context/ProductsContext"
import { FaCartShopping } from "react-icons/fa6";
import { FormatCurrency } from "../../utils/formatCurrency";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/rootReducer";

export const SideBarCart = () => {

    const { setSideBarVisible, sideBarVisible } = useContext(ProductsContext);
    const cartItem = useSelector((state: RootState) => state.cart.items)
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

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
