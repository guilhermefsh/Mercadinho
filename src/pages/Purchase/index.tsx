import { ArrowLeft, ArrowRight, Trash } from "phosphor-react"
import { InfoContent, InfoPrice, InfoQuantity, MainContainer, ProductContent, Resume } from "./styles"
import { FormatCurrency } from "../../utils/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, deleteCartItem, increaseQuantity } from "../../Redux/reducers/Cart";
import { RootState } from "../../Redux/rootReducer";

export const Purchase = () => {
    const dispatch = useDispatch()
    const cartItem = useSelector((state: RootState) => state.cart.items);
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

    return (
        <MainContainer>
            <div>
                <ProductContent>
                    {cartItem.map(product => (
                        <div key={product.id}>
                            <figure>
                                <img src={product.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="" />
                            </figure>
                            <InfoContent>
                                <div>
                                    <p>{product.title}</p>
                                </div>
                                <InfoQuantity>
                                    <i><ArrowLeft onClick={() => dispatch(decreaseQuantity(product.id))} /></i>
                                    {product.quantity ? <p>{product.quantity}</p> : <p>1</p>}
                                    <i><ArrowRight onClick={() => dispatch(increaseQuantity(product.id))} /></i>
                                </InfoQuantity>
                            </InfoContent>
                            <InfoPrice>
                                <i>
                                    <Trash
                                        size={30}
                                        color="red"
                                        onClick={() => dispatch(deleteCartItem(product.id))}
                                    />
                                </i>
                                {product.quantity ?
                                    <span>total: {FormatCurrency(product.price * product.quantity, 'BRL')}</span>
                                    :
                                    <span>total: {FormatCurrency(product.price, 'BRL')}</span>}
                            </InfoPrice>
                        </div>
                    ))}
                </ProductContent>
            </div>
            <Resume>
                <div>
                    <h5>Resumo</h5>
                    <p>Total de produtos:{totalQuantity}</p>
                    <span>Total: {FormatCurrency(totalPrice, 'BRL')}</span>
                </div>
                <a href="#">Finalizar Compra</a>
            </Resume>
        </MainContainer>
    )
}
