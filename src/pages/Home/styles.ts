import styled from "styled-components";

export const HomeContent = styled.section`
    h1{
        text-align:center;
        text-transform:uppercase;
        margin-top:1rem;
        font-size:2.5rem;
    }
`

export const ProductsContainer = styled.div`

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
    justify-content:center;
    padding:.5rem;
    border-top:1px solid ${props => props.theme['gray-100']};

    span{
        text-align:left;
    }
    p{
        text-align:center;
        font-size:1.2rem;
        font-weight:600;
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