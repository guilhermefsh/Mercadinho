import { ProductAction } from '../../components/ProductAction'
import { SellerInfo } from '../../components/SellerInfo'
import { Info } from './components/Description'
import { WarrantySection } from './components/Section'
import { PageProductContainer, Row, Panel, Gallery, Column } from './styles'


export const PageProduct = () => {
    return (
        <>
            <PageProductContainer>
                <Row>
                    <a href="#">Compartilhar</a>
                    <a href="#">Vender um igual</a>
                </Row>

                <Panel>
                    <Column>
                        <Gallery>
                            <img src="http://http2.mlstatic.com/D_704912-MLU72628163578_112023-W.jpg" alt="book3" />
                        </Gallery>
                        <Info />
                    </Column>

                    <Column>
                        <ProductAction />
                        <SellerInfo />

                        <WarrantySection />
                    </Column>
                </Panel>
            </PageProductContainer>
        </>
    )
}






