import styled from "styled-components";

export const Section = styled.section`
    border-top:1px solid ${({ theme }) => theme.colors.gray};
    padding: 48px 32px;

    display:flex;
    flex-direction:column;

    h4{
        font-size:1.2rem;
        margin-bottom:2.5rem;
        color:${({ theme }) => theme.colors.textColor};
    }

    div{
        display:flex;
        flex-direction:column;

        span + span{
            margin-top:1rem;
        }
    }

    a{
        margin-top:20px;
        font-size:.8rem;
        font-weight:600;
        color:${({ theme }) => theme.colors.primaryHover};
        text-decoration:none;
    }
`

export const Title = styled.p`
    font-size:1rem;
    color:${({ theme }) => theme.colors.textColor};
`

export const Description = styled.p`
    margin-top:5px;
    font-size:0.8rem;
    color:${({ theme }) => theme.colors.textColor};
    line-height:1.1rem;
`