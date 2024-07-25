/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom'
import { ProductAction } from '../../components/ProductAction'
import { SellerInfo } from '../../components/SellerInfo'
import { Info } from './components/Description'
import { WarrantySection } from './components/Section'
import { PageProductContainer, Row, Panel, Gallery, Column, ArrowLeft } from './styles'
import { useContext, useEffect } from 'react'
import { useFetchDetailsProducts } from '../../hooks/useFetchProducts'
import { ProductsContext } from '../../context/ProductsContext'
import ImageZoom from '../../components/ImageZoom'


export const PageProduct = () => {
    const { id } = useParams();
    const { fetchDetailsProducts } = useFetchDetailsProducts()
    const { viewProduct } = useContext(ProductsContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchDetailsProducts(id);
        }
    }, [id])

    const handleReturnPage = () => {
        navigate(-1);
    }

    return (
        <>
            <PageProductContainer>
                <Row>
                    <ArrowLeft onClick={handleReturnPage} />
                    <div>
                        <a href="#">Compartilhar</a>
                        <a href="#">Vender um igual</a>
                    </div>
                </Row>

                <Panel>
                    <Column>
                        {viewProduct.map((product) => (
                            <Gallery key={product.id}>
                                <ImageZoom
                                    imageUrl={product.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
                                    altProduct={product.title}
                                />
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






