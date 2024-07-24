/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom'
import { ProductAction } from '../../components/ProductAction'
import { SellerInfo } from '../../components/SellerInfo'
import { Info } from './components/Description'
import { WarrantySection } from './components/Section'
import { PageProductContainer, Row, Panel, Gallery, Column } from './styles'
import { useContext, useEffect } from 'react'
import { useFetchDetailsProducts } from '../../hooks/useFetchProducts'
import { ProductsContext } from '../../context/ProductsContext'

export const PageProduct = () => {
    const { id } = useParams();
    const { fetchDetailsProducts } = useFetchDetailsProducts()
    const { viewProduct } = useContext(ProductsContext)

    useEffect(() => {
        if (id) {
            fetchDetailsProducts(id);
        }
    }, [id])

    return (
        <>
            <PageProductContainer>
                <Row>
                    <a href="#">Compartilhar</a>
                    <a href="#">Vender um igual</a>
                </Row>

                <Panel>
                    <Column>
                        {viewProduct.map((product) => (
                            <Gallery key={product.id}>
                                <img src={product.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="book3" />
                            </Gallery>
                        ))}
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






