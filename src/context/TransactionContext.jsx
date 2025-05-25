import { createContext, useState } from "react";

export const TransactionContext = createContext();

function TransactionProvider({ children }) {
    const [transactions, setTransactions] = useState([
        {
            id: 1,
            description: "bought groceries",
            amount: -100,
        },
        {
            id: 2,
            description: "car repairs",
            amount: -400,
        },
        {
            id: 3,
            description: "pay day",
            amount: 1000,
        },
    ]);

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
