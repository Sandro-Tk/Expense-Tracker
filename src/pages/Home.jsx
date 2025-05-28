import AddTransaction from "../components/AddTransaction";
import TransactionsList from "../components/TransactionsList";
import Balance from "../components/Balance";
import IncomeExpenses from "../components/IncomeExpenses";

function Home() {
    return (
        <div>
            <Balance />
            <IncomeExpenses />
            <TransactionsList />
            <AddTransaction />
        </div>
    );
}

export default Home;
