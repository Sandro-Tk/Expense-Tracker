import styled from "styled-components";
import Transaction from "./Transaction";
import NoTransactions from "./NoTransactions";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const TransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: var(--spacing-medium);
    gap: var(--spacing-small);
    width: 100%;
    max-width: 600px;
`;

const StyledHeader = styled.h2`
    font-weight: 600;
    font-size: var(--font-size-large);
    margin-bottom: var(--spacing-small);
    margin-top: var(--spacing-small);
    color: var(--color-4);
    text-align: center;
`;

const CenterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

function TransactionsList() {
    const { transactions } = useContext(TransactionContext);

    return (
        <CenterWrapper>
            <TransactionContainer>
                <StyledHeader>Transaction history</StyledHeader>
                {!transactions.length && <NoTransactions />}
                {transactions.map((transaction) => (
                    <Transaction
                        transaction={transaction}
                        key={transaction.id}
                    />
                ))}
            </TransactionContainer>
        </CenterWrapper>
    );
}

export default TransactionsList;
