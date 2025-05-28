import { createContext, useEffect, useState } from "react";

export const TransactionContext = createContext();

function TransactionProvider({ children }) {
    const [transactions, setTransactions] = useState(() => {
        try {
            const savedTransactions = localStorage.getItem("transactions");
            return savedTransactions
                ? JSON.parse(savedTransactions)
                : //TEMPORARY DATA ----- DELETE THE ITEMS IN THE ARRAY AFTER TESTING
                  [
                      {
                          id: 1,
                          description: "Salary",
                          amount: 5000,
                          category: "General",
                          date: new Date("2025-05-26").toISOString(),
                      },
                      {
                          id: 2,
                          description: "Groceries",
                          amount: -200,
                          category: "Food",
                          date: new Date("2025-05-25").toISOString(),
                      },
                      {
                          id: 3,
                          description: "Electricity Bill",
                          amount: -100,
                          category: "Utilities",
                          date: new Date("2025-05-24").toISOString(),
                      },
                      {
                          id: 4,
                          description: "Freelance Work",
                          amount: 1500,
                          category: "Health",
                          date: new Date("2025-05-23").toISOString(),
                      },
                      {
                          id: 5,
                          description: "Dining Out",
                          amount: -50,
                          category: "Other",
                          date: new Date("2025-05-22").toISOString(),
                      },
                  ];
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
        const transactionWithISODate = {
            ...transaction,
            date: new Date(transaction.date).toISOString(),
        };
        setTransactions([transactionWithISODate, ...transactions]);
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
