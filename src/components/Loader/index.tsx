import { MoonLoader } from 'react-spinners'
import styled from 'styled-components'

const LoaderContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`


export const Loader = () => {
    return (
        <LoaderContainer>
            <MoonLoader size={60} color='#0065ED' />
        </LoaderContainer>
    )
}
