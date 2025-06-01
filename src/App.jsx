import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import AppLayout from "./components/AppLayout";
import TransactionProvider from "./context/TransactionContext";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import BudgetManagement from "./pages/BudgetManagement";
import Profile from "./pages/Profile";
import AllTransactions from "./pages/AllTransactions";

function App() {
    return (
        <TransactionProvider>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route index element={<Navigate replace to="home" />} />
                        <Route path="home" element={<Home />} />
                        <Route path="analytics" element={<Analytics />} />
                        <Route
                            path="budget_management"
                            element={<BudgetManagement />}
                        />
                        <Route path="profile" element={<Profile />} />
                        <Route
                            path="all_transactions"
                            element={<AllTransactions />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </TransactionProvider>
    );
}

export default App;
