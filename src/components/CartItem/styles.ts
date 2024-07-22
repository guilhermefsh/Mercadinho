import styled from "styled-components";

export const CartItemContainer = styled.section`
    display:flex;
    align-items:flex-start;
    border-bottom:1px solid ${props => props.theme['gray-300']};
    margin-bottom:20px;
    position: relative;

    img{
        width:70px;
    }

    div{
        margin:0 30px;
        h3{
            font-size:0.85rem;
            font-weight:500;
            color:${props => props.theme['black']};
            margin-bottom:8px;
        }

        p{
            font-size:1.2rem;
            font-weight:500;
            padding:0.2rem;
        }
    }

    button{
        position:absolute;
        top:0;
        right:0;
        color:red;
        border:none;
        background:none;
        cursor: pointer;
    }
`

export const AddNewProductContainer = styled.div`
    display:flex;
    justify-content:left;
    align-items:center;
    gap:8px;

    i{
        cursor: pointer;
    }
`