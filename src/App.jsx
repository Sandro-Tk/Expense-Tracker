import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./GlobalStyles";
import AppLayout from "./components/AppLayout";
import TransactionProvider from "./context/TransactionContext";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <TransactionProvider>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <GlobalStyle />
                    <AppLayout />
                </BrowserRouter>
            </ThemeProvider>
        </TransactionProvider>
    );
}

export default App;
