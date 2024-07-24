import styled from "styled-components";

export const Description = styled.div`
    border-top:1px solid ${({ theme }) => theme.colors.gray};
    padding: 3rem 2rem;

    h2{
        font-size:1.2rem;
        margin-bottom:2rem;
        color:${({ theme }) => theme.colors.textColor};
    }

    p{
        font-size:1.2rem;
        color:${({ theme }) => theme.colors.textColor};
        line-height:1.7rem;
    }
`