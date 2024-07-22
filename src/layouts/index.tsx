import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import styled from "styled-components"
import { SideBarCart } from "../components/SideBarCart"

const Container = styled.div`
    max-width:1440px;
    margin: auto;
`

export const Layout = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}
