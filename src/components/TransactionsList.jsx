import styled from "styled-components";
import Transaction from "./Transaction";

const TransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

function TransactionsList({ transactions, deleteTransaction }) {
    return (
        <>
            <TransactionContainer>
                <h1>Transaction history</h1>
                {transactions.map((transaction) => (
                    <Transaction
                        transaction={transaction}
                        deleteTransaction={deleteTransaction}
                        key={transaction.id}
                    />
                ))}
                <Transaction />
            </TransactionContainer>
        </>
    );
}

export default TransactionsList;
