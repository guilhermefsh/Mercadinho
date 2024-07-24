import styled from "styled-components"
import { HiOutlineHeart, HiOutlineShieldCheck } from 'react-icons/hi'
import { RiTruckFill } from "react-icons/ri";


export const Container = styled.div`
    padding:2rem;
    display:flex;
    flex-direction:column;
    color:${({ theme }) => theme.colors.textColor};
`

export const Condition = styled.div`
    font-size:0.9rem;
    color:${({ theme }) => theme.colors.textColor};
    margin-bottom:1rem;
`
export const Row = styled.div`
    display:flex;
    justify-content:space-between;

    h1{
        width:100%;
        font-size:1.5rem;
        font-weight:600;
    }
`

export const DispatchTag = styled.div`
    margin-top:.7rem;
    background-color:${({ theme }) => theme.colors.primaryHover};
    color:${({ theme }) => theme.colors.white};
    border-radius:14px;
    padding:.5rem 0.8rem;
    font-size:0.9rem;
    font-weight:600;
    width:fit-content;
`

export const PriceCard = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:1.1rem;
`

export const PriceRow = styled.div`
    display:flex;
    align-items:flex-start;
    font-size:2.8rem;
    font-weight:300;
    gap:4px;
`

export const InstallmentsInfo = styled.div`
    font-size:1rem;
`
export const StockStatus = styled.div`
    margin-top:1.5rem;
    font-size:1.1rem;
`
export const MethodCard = styled.div`
    margin-top:18px;
    display:flex;

    div{
        margin-left:.5rem;
        display:flex;
        flex-direction:column;

        .title{
            color:${({ theme }) => theme.colors.green};
            font-size:1rem;
        }
        .details{
            margin-top:.3rem;
            color:${({ theme }) => theme.colors.gray};
            font-size:.9rem;
        }
        .more{
            margin-top:5px;
            color:${({ theme }) => theme.colors.primaryHover};
            font-size:.9rem;
            font-weight:600;
        }
    }
`
export const Actions = styled.div`
    margin-top:1rem;
    display:flex;
    flex-direction:column;
`

export const Benefits = styled.ul`
    margin-top:1rem;
    list-style:none;
    display:flex;
    flex-direction:column;

    li{
        display:flex;

        p{
            margin-left: .7rem;
        }

        p{
            margin-left:.7rem;
            font-size:.8rem;
            color:${({ theme }) => theme.colors.primaryHover};
        }
    }
`

type ButtonProps = {
    $variant?: 'solid';
}

export const Button = styled.button<ButtonProps>`
    display:flex;
    align-items:center;
    justify-content:center;

    font-size:1rem;
    border-radius:4px;
    padding: .8rem .7rem;
    margin-top:.7rem;
    cursor: pointer;

    background-color: ${({ $variant, theme }) => ($variant ? theme.colors.primary : theme.colors.blue)};
    color: ${({ theme }) => theme.colors.white};

    &:hover{
        background-color:${({ theme }) => theme.colors.primaryHover};
    }

`

export const HeartIcon = styled(HiOutlineHeart)`
    width:1.8rem;
    height:1.8rem;
    color:${({ theme }) => theme.colors.primaryHover};
    flex-shrink:0;

    margin-left:1rem;
    cursor: pointer;
`
export const CheckIcon = styled(RiTruckFill)`
    width:1.5rem;
    height:1.5rem;
    color:${({ theme }) => theme.colors.green};
`
export const ShieldIcon = styled(HiOutlineShieldCheck)`
    width:1.2rem;
    height:1.2rem;
    color:${({ theme }) => theme.colors.primary};
`