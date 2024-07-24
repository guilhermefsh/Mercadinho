
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
    return (
        <Container>
            <Condition>Novo</Condition>

            <Row>
                <h1>Samsumg Book3</h1>
                <HeartIcon />
            </Row>

            <DispatchTag>Enviando normalmente</DispatchTag>

            <PriceCard>
                <PriceRow>
                    <span>R$</span>
                    <span>3499,00</span>
                </PriceRow>

                <InstallmentsInfo>Em 12x de R$ 129,78</InstallmentsInfo>
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
                <Button solid>Comprar agora</Button>
                <Button >Adicionar ao carrinho</Button>
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
    )
}
