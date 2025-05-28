import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import AppLayout from "./components/AppLayout";
import TransactionProvider from "./context/TransactionContext";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

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
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </TransactionProvider>
    );
}

export default App;
