import styled from "styled-components";
import AddTransaction from "../components/AddTransaction";
import TransactionsList from "../components/TransactionsList";
import Balance from "../components/Balance";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import IncomeExpenses from "../components/IncomeExpenses";

// const StyledContainer = styled.div`
//     background-color: var(--color-2);
//     width: 70%;
//     margin: auto;
//     height: 100vh;
// `;

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`;

const Main = styled.main`
    background-color: var(--color-1);
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
                    <Balance />
                    <IncomeExpenses />
                    <TransactionsList />
                    <AddTransaction />
                </Container>
            </Main>
        </StyledAppLayout>
    );
}

export default AppLayout;
