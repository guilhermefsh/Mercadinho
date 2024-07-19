import styled from "styled-components";

export const HomeContent = styled.section`
    margin:1rem 1rem;
    h1{
        text-align:center;
        text-transform:uppercase;
        margin:1rem 0;
        font-size:2.5rem;
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

export const InfoProducts = styled.div`
    display:flex;
    flex-direction:column;
    height:200px;
    justify-content:space-around;
    padding:.5rem;
    border-top:1px solid ${props => props.theme['gray-100']};

    span{
        font-weight:bold;
        text-align:center;
        font-size:1.4rem;
    }
    p{
        text-align:center;
        font-size:1.1rem;
        max-width:180px;
    }

    button{
        background-color:${props => props.theme['blue']};
        color:${props => props.theme['white']};
        padding: .5rem;
        border-radius:14px;
        cursor: pointer;
        margin: .4rem 0;
    }
`

export const OldPrice = styled.s`
    color:${props => props.theme['gray-400']}
`