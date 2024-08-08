/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom'
import { ProductAction } from '../../components/ProductAction'
import { SellerInfo } from '../../components/SellerInfo'
import { Info } from './components/Description'
import { WarrantySection } from './components/Section'
import { PageProductContainer, Row, Panel, Gallery, Column, ArrowLeft } from './styles'
import ImageZoom from '../../components/ImageZoom'
import { Loader } from '../../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Redux/rootReducer'
import { useEffect } from 'react'
import { fetchDetailsProductsStart, setQuery } from '../../Redux/reducers/detailProducts'
import { fetchProductsStart } from '../../Redux/reducers/products'


export const PageProduct = () => {
    const { id } = useParams<string>();
    const { loading, products: Product } = useSelector((state: RootState) => state.detailsProduct);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            dispatch(setQuery(id));
        }
        dispatch(fetchDetailsProductsStart());
    }, [id, dispatch]);

    const handleReturnPage = () => {
        navigate(-1);
        dispatch(fetchProductsStart())
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

                {loading ? <Loader /> :
                    Product.map(viewProduct =>
                        <Panel key={viewProduct.id}>
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
                        </Panel>
                    )}
            </PageProductContainer>

        </>
    )
}






