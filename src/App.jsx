import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "./GlobalStyles";
import AppLayout from "./components/AppLayout";
import TransactionProvider from "./context/TransactionContext";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import BudgetManagement from "./pages/BudgetManagement";
import AllTransactions from "./pages/AllTransactions";
import BudgetProvider from "./context/BudgetContext";
import PageNotFound from "./components/PageNotFound";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
    return (
        <DarkModeProvider>
            <TransactionProvider>
                <BudgetProvider>
                    <GlobalStyle />
                    <BrowserRouter>
                        <Routes>
                            <Route element={<AppLayout />}>
                                <Route
                                    index
                                    element={<Navigate replace to="home" />}
                                />
                                <Route path="home" element={<Home />} />
                                <Route
                                    path="analytics"
                                    element={<Analytics />}
                                />
                                <Route
                                    path="budget_management"
                                    element={<BudgetManagement />}
                                />
                                <Route
                                    path="all_transactions"
                                    element={<AllTransactions />}
                                />
                                <Route path="*" element={<PageNotFound />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                    <Toaster
                        position="top-center"
                        gutter={12}
                        containerStyle={{
                            margin: "8px",
                        }}
                        toastOptions={{
                            success: {
                                duration: 3000,
                            },
                            error: {
                                duration: 5000,
                            },
                            style: {
                                fontSize: "16px",
                                maxWidth: "500px",
                                padding: "16px 24px",
                                backgroundColor: "var(--color-1)",
                                color: "var(--color-4)",
                            },
                        }}
                    />
                </BudgetProvider>
            </TransactionProvider>
        </DarkModeProvider>
    );
}

export default App;
