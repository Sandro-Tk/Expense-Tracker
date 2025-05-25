import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import TransactionProvider from "./context/TransactionContext.jsx";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TransactionProvider>
            <App />
        </TransactionProvider>
    </React.StrictMode>
);
