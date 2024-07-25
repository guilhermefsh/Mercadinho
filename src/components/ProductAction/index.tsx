import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { FormatCurrency } from '../../utils/formatCurrency'
import { useCart } from '../../hooks/useCart'
import {
    Container,
    Condition,
    Row,
    HeartIcon,
    DispatchTag,
    PriceCard,
    InstallmentsInfo,
    StockStatus,
    MethodCard,
    CheckIcon,
    Actions,
    Button,
    Benefits,
    ShieldIcon,
    PriceRow
} from './styles'

export const ProductAction = () => {

    const { viewProduct } = useContext(ProductsContext)
    const { addToCart } = useCart();
    return (

        <>
            {viewProduct.map((product) => (
                <Container key={product.id}>
                    <Condition>Novo</Condition>

                    <Row>
                        <h1>{product.title}</h1>
                        <HeartIcon />
                    </Row>

                    <DispatchTag>Enviando normalmente</DispatchTag>

                    <PriceCard>
                        <PriceRow>
                            <span>{FormatCurrency(product.price, 'BRL')}</span>
                        </PriceRow>

                        <InstallmentsInfo>
                            {product.price > 250 ?
                                `Em 12x de R$ ${FormatCurrency(product.price / 12, 'BRL')} sem juros!`
                                :
                                `em até 4x de R$ ${FormatCurrency(product.price / 4, 'BRL')} sem juros!`
                            }
                        </InstallmentsInfo>
                    </PriceCard>
                    <StockStatus>Estoque disponível:</StockStatus>

                    <MethodCard>
                        <CheckIcon />

                        <div>
                            <span className='title'>Frete grátis</span>
                            <span className='details'>São Paulo e região!</span>
                            <a href="#" className='more'>Ver mais opções</a>
                        </div>
                    </MethodCard>

                    <Actions>
                        <Button $variant='solid'>Comprar agora</Button>
                        <Button onClick={() => addToCart(product)}>Adicionar ao carrinho</Button>
                    </Actions>

                    <Benefits>
                        <li>
                            <ShieldIcon />

                            <p>
                                Compra garantida, compre e receba o seu produto ou
                                tenha seu dinheiro de volta!
                            </p>
                        </li>
                    </Benefits>
                </Container>
            ))}
        </>
    )
}
