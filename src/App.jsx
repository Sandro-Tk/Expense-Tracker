import { useState } from "react";
import GlobalStyle from "./GlobalStyles";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionsList from "./components/TransactionsList";
import AddTransaction from "./components/AddTransaction";

function App() {
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
        <>
            <GlobalStyle />
            <Header />
            <Balance transactions={transactions} />
            <IncomeExpenses transactions={transactions} />
            <TransactionsList
                transactions={transactions}
                deleteTransaction={deleteTransaction}
            />
            <AddTransaction addTransaction={addTransaction} />
        </>
    );
}

export default App;
