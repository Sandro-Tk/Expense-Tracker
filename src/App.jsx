import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./GlobalStyles";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionsList from "./components/TransactionsList";
import AddTransaction from "./components/AddTransaction";
import AppLayout from "./components/AppLayout";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppLayout>
                <Header />
                <Balance />
                <IncomeExpenses />
                <TransactionsList />
                <AddTransaction />
            </AppLayout>
        </ThemeProvider>
    );
}

export default App;
