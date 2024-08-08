import { CartItem } from "../CartItem"
import { CartResume, ItemsContainer, Overlay, SideBarCartContainer, TitleCart } from "./styles"
import { FaCartShopping } from "react-icons/fa6";
import { FormatCurrency } from "../../utils/formatCurrency";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/rootReducer";
import { sideBarVisible } from "../../Redux/reducers/sidebar";

export const SideBarCart = () => {

    const dispatch = useDispatch()
    const cartItem = useSelector((state: RootState) => state.cart.items)
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
    const isSideBarVisible = useSelector((state: RootState) => state.sideBar.openSideBar);

    const hideSideBar = () => {
        dispatch(sideBarVisible());
    };

    return (
        <>
            <Overlay $visible={isSideBarVisible} onClick={hideSideBar} />
            <SideBarCartContainer $visible={isSideBarVisible}>
                <ItemsContainer>
                    <TitleCart>
                        <i onClick={hideSideBar}><GoArrowLeft size={40} /></i>
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
