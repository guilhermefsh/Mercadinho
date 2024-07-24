import styled, { css } from "styled-components"
import { HiOutlineLocationMarker, HiOutlineClock, HiOutlineChatAlt2 } from "react-icons/hi"

const iconCSS = css`
    width:30px;
    height:30px;
    color:${({ theme }) => theme.colors.textColor};
`

export const Container = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  `

export const Title = styled.div`
    font-size:1.1rem;
    font-weight:600;;
    margin-bottom:1.3rem;
    color:${({ theme }) => theme.colors.textColor};
`

export const LocationCard = styled.div`
    display:flex;
    align-items:center;
    padding: 0.5rem 0;

    div{
        margin-left:0.6rem;

        p{
            font-size:1rem;
            color:${({ theme }) => theme.colors.textColor};
        }
        strong{
            font-size:0.8rem;
            font-weight:normal;
            color:${({ theme }) => theme.colors.textColor};
        }
    }

`
export const ReputationCard = styled.div`
    margin-top:2rem;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const ReputationRow = styled.div`
    margin-top:0.8rem;
    display:flex;
    align-items:flex-start;

    div{
        width:33%;
        padding: 0 0.8rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
        color:${({ theme }) => theme.colors.textColor};

        strong{
            font-size:1.5rem;
            font-weight:normal;
            height:1.8rem;
        }

        span{
            font-size:.8rem;
        }

        position:relative;

        & + div{
        &::before{
            content:'';
            position:absolute;
            left:0;
            top:50%;
            transform:translateY(-50%);
            height:36px;
            border-left:1px solid ${({ theme }) => theme.colors.textColor};
        }
}
    }

`

export const ReputationThermometer = styled.ol`
    list-style:none;

    width:100%;
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap:.5rem;
    padding: 0 .3rem;

    li{
        width:100%;
        height: 0.5rem;

        &:nth-child(1){
            background:${({ theme }) => theme.colors.reputation1};
        }
        &:nth-child(2){
            background:${({ theme }) => theme.colors.reputation2};
        }
        &:nth-child(3){
            background:${({ theme }) => theme.colors.reputation3};
        }
        &:nth-child(4){
            background:${({ theme }) => theme.colors.reputation4};
        }
        &:nth-child(5){
            background:${({ theme }) => theme.colors.reputation5};
        }
    }

`
export const More = styled.a`
    margin-top:1.5rem;
    color:${({ theme }) => theme.colors.primaryHover};
    font-size:.9rem;
    font-weight:600;
`

export const LocationIcon = styled(HiOutlineLocationMarker)`${iconCSS}`
export const SupportIcon = styled(HiOutlineChatAlt2)`${iconCSS}`
export const ClockIcon = styled(HiOutlineClock)`${iconCSS}`