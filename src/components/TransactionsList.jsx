import styled from "styled-components";
import Transaction from "./Transaction";
import NoTransactions from "./NoTransactions";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { useNavigate } from "react-router-dom";
import { transactionViewLimit } from "../constants/constants";

const TransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

const StyledButton = styled.button`
    margin-top: var(--spacing-small);
    padding: var(--spacing-small);
    background-color: var(--color-3);
    color: var(--color-1);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
`;

function TransactionsList({ showAll = false }) {
    const { transactions } = useContext(TransactionContext);
    const navigate = useNavigate();
    const limit = transactionViewLimit;
    const displayedTransactions = showAll
        ? transactions
        : transactions.slice(0, limit);

    return (
        <CenterWrapper>
            <TransactionContainer>
                <StyledHeader>Transaction history</StyledHeader>
                {!transactions.length && <NoTransactions />}
                {displayedTransactions.map((transaction) => (
                    <Transaction
                        transaction={transaction}
                        key={transaction.id}
                    />
                ))}
                {!showAll && transactions.length > limit && (
                    <StyledButton onClick={() => navigate("/all_transactions")}>
                        See All Transactions
                    </StyledButton>
                )}
            </TransactionContainer>
        </CenterWrapper>
    );
}

export default TransactionsList;
