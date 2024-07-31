import styled from "styled-components";

export const MainContainer = styled.main`
    display:flex;
    justify-content:space-around;
    margin-top:6rem;
    color:${({ theme }) => theme.colors.textColor};

    span{
        font-weight:bold;
    }
`

export const ProductContent = styled.section`
    display:flex;
    flex-direction:column;
    border:2px solid ${({ theme }) => theme.colors.primaryHover};
    padding:1rem;
    gap:20px;
    width:100%;
    max-width:900px;

    div{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        padding:1rem;

        figure{
            img{
                width:150px;
            }
        }
    }
`

export const InfoContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
        i{
            cursor: pointer;
        }
`

export const InfoPrice = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
        i{
            cursor: pointer;
            display:flex;
            align-items:center;
        }
`

export const InfoQuantity = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
    margin-top:1rem;
`

export const Resume = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    border:2px solid ${({ theme }) => theme.colors.primaryHover};
    padding:1rem;
    height:200px;

    div{
        display:flex;
        flex-direction:column;
        gap:10px;
        h5{
            font-size:1.3rem;
        }
    }

    a{
        background-color:${({ theme }) => theme.colors.primaryHover};
        padding:1rem;
        border-radius:14px;
        color:${({ theme }) => theme.colors.whiteNeve};
    }
`