/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom'
import { ProductAction } from '../../components/ProductAction'
import { SellerInfo } from '../../components/SellerInfo'
import { Info } from './components/Description'
import { WarrantySection } from './components/Section'
import { PageProductContainer, Row, Panel, Gallery, Column, ArrowLeft } from './styles'
import ImageZoom from '../../components/ImageZoom'
import { Loader } from '../../components/Loader'
import { useFetchDetailsProducts } from '../../hooks/useFetchDetailsProduct'


export const PageProduct = () => {
    const { id } = useParams<string>();
    const { data: viewProduct, isLoading } = useFetchDetailsProducts(id ?? '')
    const navigate = useNavigate();

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

                {isLoading ? <Loader /> :
                    <Panel>
                        <Column>
                            <Gallery>
                                <ImageZoom
                                    imageUrl={viewProduct.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
                                    altProduct={viewProduct.title}
                                />
                            </Gallery>
                            <Info />
                        </Column>

                        <Column>
                            <ProductAction viewProduct={viewProduct} />
                            <SellerInfo />

                            <WarrantySection />
                        </Column>
                    </Panel>}
            </PageProductContainer>

        </>
    )
}






