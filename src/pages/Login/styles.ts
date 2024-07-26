import styled from "styled-components";
import backgroundImage from '../../assets/images/vector-JUL-2020-129.jpg'

export const LoginContainer = styled.main`
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;

    h3{
        text-align:center;
        color:${({ theme }) => theme.colors.whiteNeve};
        font-style:italic;
        font-size:1.5rem;
        filter:drop-shadow(4px 4px 4px ${({ theme }) => theme.colors.blackColor});
    }
`

export const Formulario = styled.form`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background-color:hsla(0, 0%, 10%, 0.1);
    backdrop-filter:blur(10px);
    border-radius:14px;
    padding:1rem;
    gap:20px;
    
    >fieldset{
        display:flex;
        flex-direction:column;
        color:${({ theme }) => theme.colors.lightGray};
        font-size:1.2rem;
        gap:8px;

        >input{
            width:260px;
            padding: 0.7rem;
            border-radius:4px;
            background-color:hsla(0, 0%, 10%, 0.1);
            border:1px solid ${({ theme }) => theme.colors.primary};
            color:${({ theme }) => theme.colors.whiteNeve};
        }
    }

    >div{
        button{
            padding:.7rem;
            border-radius:4px;
            width:260px;
            cursor: pointer;
            border:1px solid ${({ theme }) => theme.colors.primary};
            background-color:hsla(0, 0%, 10%, 0.1);
            color:${({ theme }) => theme.colors.whiteNeve};
            text-transform:uppercase;
            font-weight:bold;

            &:hover{
                background-color:${({ theme }) => theme.colors.primary};
            }
        }
    }

    p{
        color:${({ theme }) => theme.colors.whiteNeve}; 
    }

    a{
        color:${({ theme }) => theme.colors.primaryHover};
    }
`

export const Title = styled.span`
    color:${({ theme }) => theme.colors.whiteNeve};
    font-size:1.2rem;
`

export const TextError = styled.span`
    color:${({ theme }) => theme.colors.red};
    font-size:1rem;
`
