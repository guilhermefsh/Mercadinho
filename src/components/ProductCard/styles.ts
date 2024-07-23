import styled from "styled-components"

export const InfoProducts = styled.div`
    display:flex;
    flex-direction:column;
    height:200px;
    justify-content:space-around;
    padding:.5rem;
    border-top:1px solid ${({ theme }) => theme.colors.gray};
    background-color:${({ theme }) => theme.colors.cardColor};
    color:${({ theme }) => theme.colors.textColor};
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
        background-color:${({ theme }) => theme.colors.primary};
        color:${({ theme }) => theme.colors.white};
        padding: .5rem;
        border-radius:14px;
        cursor: pointer;
        margin: .4rem 0;

        &:hover{
            background-color:${({ theme }) => theme.colors.primaryHover};
        }
    }
`

export const OldPrice = styled.s`
    color:${({ theme }) => theme.colors.red};
`