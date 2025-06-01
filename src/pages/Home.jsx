import AddTransaction from "../components/AddTransaction";
import TransactionsList from "../components/TransactionsList";
import Balance from "../components/Balance";
import CashFlow from "../components/CashFlow";

function Home() {
    return (
        <div>
            <Balance />
            <CashFlow />
            <TransactionsList />
            <AddTransaction />
        </div>
    );
}

export default Home;
