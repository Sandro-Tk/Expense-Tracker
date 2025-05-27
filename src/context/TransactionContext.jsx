import { createContext, useEffect, useState } from "react";

export const TransactionContext = createContext();

function TransactionProvider({ children }) {
    const [transactions, setTransactions] = useState(() => {
        try {
            const savedTransactions = localStorage.getItem("transactions");
            return savedTransactions ? JSON.parse(savedTransactions) : [];
        } catch (error) {
            console.error(
                "Error parsing transactions from localStorage:",
                error
            );
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    function addTransaction(transaction) {
        setTransactions([transaction, ...transactions]);
    }

    function deleteTransaction(id) {
        setTransactions(
            transactions.filter((transaction) => transaction.id !== id)
        );
    }

    return (
        <TransactionContext.Provider
            value={{ transactions, addTransaction, deleteTransaction }}
        >
            {children}
        </TransactionContext.Provider>
    );
}
export default TransactionProvider;
