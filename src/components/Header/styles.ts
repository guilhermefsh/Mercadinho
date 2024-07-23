import styled from "styled-components";

export const HeaderContainer = styled.header`
    width:100%;
    background-color:${({ theme }) => theme.colors.primary};
    box-shadow:0px 0px 14px 0px ${({ theme }) => theme.colors.blackColor};
`
export const HeaderContent = styled.div`
    max-width:1440px;
    margin:auto;
    padding:1rem;
    gap:80px;
    display:flex;
    justify-content:space-around;

    button{
        background-color:transparent;
    }
`

export const LogoContainer = styled.div`
    text-align:center;
        span{
            font-size:1.2rem;
            font-weight:800;
            font-style:italic;
            color:${({ theme }) => theme.colors.whiteNeve};
            filter:drop-shadow(4px 4px 4px ${({ theme }) => theme.colors.blackColor});
        }
`

export const SearchContent = styled.div`
    display:flex;
    align-items:center;
    max-width:400px;
    width:100%;

    form{
        display:flex;
        align-items:center;
        width:100%;

        input{
            flex-grow:1;
            padding:0.4rem;
            border: 1px solid ${({ theme }) => theme.colors.gray};
            border-radius: 10px 0 0 10px;
        }
        button{
            border: 1px solid ${({ theme }) => theme.colors.gray};
            background-color:${({ theme }) => theme.colors.white};
            padding:0.28rem;
            cursor: pointer;
            border-radius: 0px 10px 10px 0px;

            i{
                color:${({ theme }) => theme.colors.primary}
            }
        }
    }
`
export const CartContainer = styled.div`
    display:flex;
    align-items:center;
    gap:30px;
        button{
            display:flex;
            align-items:center;
            position: relative;
            cursor: pointer;
        }

        span{
            position:absolute;
            left:0;
            top:0;
            width:15px;
            height:15px;

            text-align:center;
            font-size:12px;

            background:${({ theme }) => theme.colors.red};
            border-radius: 15px;
            color:${({ theme }) => theme.colors.textColor};
        }
`