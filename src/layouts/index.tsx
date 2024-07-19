import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import styled from "styled-components"

const Container = styled.div`
    max-width:1440px;
`

export const Layout = () => {
    return (
        <div>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}
