import styled from "styled-components";

export const Overlay = styled.div<{ visible: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); // Preto com 50% de opacidade
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
    transition: opacity 0.5s ease-in-out;
    z-index: 10; // Deve estar acima da sidebar
`;

export const SideBarCartContainer = styled.aside<{ visible: boolean }>`
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
    background-color: ${props => props.theme['white']};
    transform: ${({ visible }) => (visible ? "translateX(0)" : "translateX(100%)")};
    transition: transform 1s ease-in-out;
    z-index: 20;
`;

export const TitleCart = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin:1rem 0;
    border-bottom:1px solid ${props => props.theme['blue']};
    gap:20px;
        span{
            font-size:1.25rem;
            color:${props => props.theme['blue']};
            text-align:center;
        }

        i{
            cursor: pointer;
            color:${props => props.theme['blue']}
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
    gap:16px;
        span{
            font-weight:800;
            font-size:1.5rem;
        }
        button{
            padding:1rem;
            border-radius:14px;
            background-color:${props => props.theme['blue']};
            color:${props => props.theme['white']};
            cursor: pointer;

            &:hover{
                opacity:80%;
            }
        }
`