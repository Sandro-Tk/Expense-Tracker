import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { formatCurrency } from "../../helpers";
import styled from "styled-components";
import { transactionViewLimit } from "../../constants/categories";
import { useNavigate } from "react-router-dom";

const StyledToday = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    background: var(--color-2);
    padding: 20px;
    border-radius: var(--border-radius);
`;

const StyledHeader = styled.h3`
    font-size: var(--font-size-medium);
    margin-bottom: var(--spacing-medium);
    color: var(--color-4);
`;

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
`;

const StyledListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    margin-bottom: var(--spacing-small);
    background: var(--color-1);
    border: 1px solid var(--color-2);
    border-radius: var(--border-radius);
    font-size: var(--font-size-small);
    color: var(--color-4);
    transition: all 0.3s;

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        background: var(--color-3);
    }
`;

const StyledAmount = styled.span`
    color: ${(props) =>
        props.$isPositive ? "var(--color-positive)" : "var(--color-negative)"};
`;

const StyledButton = styled.button`
    margin-top: var(--spacing-small);
    padding: var(--spacing-small);
    background-color: var(--color-4);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
`;

function TodayTransactions() {
    const { transactions } = useContext(TransactionContext);
    const navigate = useNavigate();

    const currentDate = new Date().toLocaleDateString("en-CA");
    const todayTransactions = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date).toLocaleDateString(
            "en-CA"
        );
        return transactionDate === currentDate;
    });

    const limit = transactionViewLimit;
    const displayedTransactions = todayTransactions.slice(0, limit);

    return (
        <StyledToday>
            <StyledHeader>Today's Transactions</StyledHeader>
            <StyledList>
                {!todayTransactions && "No transactions for today"}
                {displayedTransactions &&
                    todayTransactions.map((transaction) => (
                        <StyledListItem key={transaction.id}>
                            <span>{transaction.description}</span>
                            <StyledAmount $isPositive={transaction.amount >= 0}>
                                {formatCurrency(transaction.amount)}
                            </StyledAmount>
                        </StyledListItem>
                    ))}
            </StyledList>
            {todayTransactions.length > 5 && (
                <StyledButton onClick={() => navigate("/all_transactions")}>
                    See All Transactions
                </StyledButton>
            )}
        </StyledToday>
    );
}

export default TodayTransactions;
