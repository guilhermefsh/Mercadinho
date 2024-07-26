import { MoonLoader } from 'react-spinners'
import styled from 'styled-components'

const LoaderContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

export const LoaderForm = () => {
    return (
        <LoaderContainer>
            <MoonLoader size={20} color='#ffffff' />
        </LoaderContainer>
    )
}
