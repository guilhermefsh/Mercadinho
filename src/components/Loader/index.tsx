import { useContext } from 'react'
import { MoonLoader } from 'react-spinners'
import { ProductsContext } from '../../context/ProductsContext'
import styled from 'styled-components'

const LoaderContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`


export const Loader = () => {
    const { loading } = useContext(ProductsContext)
    return (
        <LoaderContainer>
            <MoonLoader size={60} color='#0065ED' loading={loading} />
        </LoaderContainer>
    )
}
