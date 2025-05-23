import styled from "styled-components";
import Transaction from "./Transaction";

const TransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    gap: 1px;
`;

const StyledHeader = styled.h2`
    font-weight: 400;
    margin-bottom: 10px;
    display: flex;
    justify-content: left;
`;

function TransactionsList({ transactions, deleteTransaction }) {
    return (
        <>
            <TransactionContainer>
                <StyledHeader>Transaction history</StyledHeader>
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
