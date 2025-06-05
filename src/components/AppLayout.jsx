import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: 6rem 1fr;
    height: 100vh;
`;

const Main = styled.main`
    background-color: var(--color-1);
    overflow-y: auto;
    grid-column: 2;
    grid-row: 2;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <Header />
            <Sidebar />
            <Main>
                <Container>
                    <Outlet />
                </Container>
            </Main>
        </StyledAppLayout>
    );
}

export default AppLayout;
