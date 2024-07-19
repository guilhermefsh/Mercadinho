import { HomeContent, InfoProducts, OldPrice, ProductsContainer } from "./styles"


export const Home = () => {
    return (
        <main>
            <HomeContent>

                <h1>Seu produto está aqui!</h1>

                <ProductsContainer>
                    <div>
                        <figure>
                            <img src="https://http2.mlstatic.com/D_969408-MLU75401927010_042024-W.jpg" alt="Celular Samsung S23" />
                        </figure>
                        <InfoProducts>
                            <p>Samsung Galaxy S23 256 Gb 5g Preto 8 Gb Ram</p>
                            <OldPrice>R$6499</OldPrice>
                            <p>R$:3135,51</p>
                            <button>Adicionar ao carrinho</button>
                        </InfoProducts>
                    </div>
                </ProductsContainer>

            </HomeContent>
        </main>
    )
}
