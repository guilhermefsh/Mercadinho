import { FormatCurrency } from '../../utils/formatCurrency'
import { ViewProductProps } from '../../interfaces/CartContext'
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
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'


export const ProductAction = ({ viewProduct }: ViewProductProps) => {

    const { handleAddToCart } = useContext(CartContext);
    return (

        <>
            <Container key={viewProduct.id}>
                <Condition>Novo</Condition>

                <Row>
                    <h1>{viewProduct.title}</h1>
                    <HeartIcon />
                </Row>

                <DispatchTag>Enviando normalmente</DispatchTag>

                <PriceCard>
                    <PriceRow>
                        <span>{FormatCurrency(viewProduct.price, 'BRL')}</span>
                    </PriceRow>

                    <InstallmentsInfo>
                        {viewProduct.price > 250 ?
                            `Em 12x de R$ ${FormatCurrency(viewProduct.price / 12, 'BRL')} sem juros!`
                            :
                            `em até 4x de R$ ${FormatCurrency(viewProduct.price / 4, 'BRL')} sem juros!`
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
                    <Button onClick={() => handleAddToCart(viewProduct)}>Adicionar ao carrinho</Button>
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
        </>
    )
}
