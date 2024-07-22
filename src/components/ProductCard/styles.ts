import styled from "styled-components"

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

        &:hover{
            background-color:${props => props.theme['blueHover']}
        }
    }
`

export const OldPrice = styled.s`
    color:${props => props.theme['gray-400']}
`