import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";

export const PageProductContainer = styled.div`
    display:flex;
    flex-direction:column;
`

export const ArrowLeft = styled(GoArrowLeft)`
    width:2rem;
    height:2rem;
    cursor: pointer;
    color:${({ theme }) => theme.colors.primaryHover};
`

export const Row = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 1rem 0;

    div{
        a{
            font-size:0.8rem;
            text-decoration:none;
            color: ${({ theme }) => theme.colors.primary};
            padding: 2.5px;
    
            & + a {
                padding-left: 10px;
                border-left:1px solid ${({ theme }) => theme.colors.gray};
            }
        }
    }
`

export const Panel = styled.div`
    background-color:${({ theme }) => theme.colors.backgroundColor};
    box-shadow:${({ theme }) => theme.colors.blackColor};

    display:grid;
    grid-template-columns:65fr 35fr;
`

export const Column = styled.div`
    &:first-child{
        border-right:1px solid ${({ theme }) => theme.colors.gray}
    }
`
export const Gallery = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    height:530px;

    img{
        height:73%;
    }
`