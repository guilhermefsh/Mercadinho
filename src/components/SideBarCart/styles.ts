import styled from "styled-components";

export const Overlay = styled.div< SideBarCartContainerProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
    transition: opacity 0.5s ease-in-out;
    z-index: 10; 
`;

interface SideBarCartContainerProps {
    $visible: boolean
}

export const SideBarCartContainer = styled.aside< SideBarCartContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 330px;
    height: 100vh;
    padding: 0px 20px 20px;
    position: fixed;
    top: 0;
    right: 0;
    background-color:${({ theme }) => theme.colors.backgroundColor};
    transform: ${({ $visible }) => ($visible ? "translateX(0)" : "translateX(100%)")};
    transition: transform 1s ease-in-out;
    z-index: 20;
`;

export const TitleCart = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin:1rem 0;
    border-bottom:1px solid ${({ theme }) => theme.colors.primary};
    gap:20px;
        span{
            font-size:1.25rem;
            color:${({ theme }) => theme.colors.textColor};
            text-align:center;
        }

        i{
            cursor: pointer;
            color:${({ theme }) => theme.colors.textColor};;
        }

`

export const ItemsContainer = styled.div`
    overflow-y:scroll;
    &::-webkit-scrollbar{
        display:none;
    } 
`

export const CartResume = styled.div`
    display:flex;
    flex-direction:column;
    color:${({ theme }) => theme.colors.textColor};
    gap:16px;
        span{
            font-weight:800;
            font-size:1.5rem;
        }
        button{
            padding:1rem;
            border-radius:14px;
            background-color:${({ theme }) => theme.colors.primary};
            color:${({ theme }) => theme.colors.white};
            cursor: pointer;

            &:hover{
                opacity:80%;
            }
        }
`