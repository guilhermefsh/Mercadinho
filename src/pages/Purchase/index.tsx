import { ArrowLeft, ArrowRight, Trash } from "phosphor-react"
import { InfoContent, InfoPrice, InfoQuantity, MainContainer, ProductContent, Resume } from "./styles"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { FormatCurrency } from "../../utils/formatCurrency";

export const Purchase = () => {

    const { cartItem } = useContext(CartContext);
    const {
        totalPrice,
        totalQuantity,
        handleDecreaseQuantity,
        handleDeleteCartItem,
        handleIncreaseQuantity
    } = useContext(CartContext);

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
                                    <i><ArrowLeft onClick={() => handleDecreaseQuantity(product.id)} /></i>
                                    {product.quantity ? <p>{product.quantity}</p> : <p>1</p>}
                                    <i><ArrowRight onClick={() => handleIncreaseQuantity((product.id))} /></i>
                                </InfoQuantity>
                            </InfoContent>
                            <InfoPrice>
                                <i>
                                    <Trash
                                        size={30}
                                        color="red"
                                        onClick={() => handleDeleteCartItem(product.id)}
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
