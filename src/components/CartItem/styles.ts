import styled from "styled-components";

export const CartItemContainer = styled.section`
    display:flex;
    align-items:flex-start;
    border-bottom:1px solid ${({ theme }) => theme.colors.gray};
    margin-bottom:20px;
    background-color:${({ theme }) => theme.colors.backgroundColor};
    position: relative;

    img{
        width:70px;
    }

    div{
        color:${({ theme }) => theme.colors.textColor};
        margin:0 30px;
        h3{
            font-size:0.85rem;
            font-weight:500;
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
        color:${({ theme }) => theme.colors.red};;
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
    color:${({ theme }) => theme.colors.textColor};

    i{
        cursor: pointer;
        color:${({ theme }) => theme.colors.textColor};
    }
`