import styled from "styled-components";

export const HomeContent = styled.section`
    margin:1rem 1rem;
    h1{
        text-align:center;
        text-transform:uppercase;
        margin:1rem 0;
        font-size:2.5rem;
        color:${({ theme }) => theme.colors.textColor};
    }

    @media(max-width:474px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`

export const ProductsContainer = styled.div`

    display:grid;
    grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
    gap:40px;

    div{
        width:200px;
        background-color:${props => props.theme['white']};
        figure{
            img{
                width:200px;
            }
        }
    }
`