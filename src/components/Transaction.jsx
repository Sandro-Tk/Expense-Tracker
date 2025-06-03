import { HiXMark } from "react-icons/hi2";
import { formatCurrency } from "../helpers";
import styled from "styled-components";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import toast from "react-hot-toast";

const StyledTransaction = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    padding: var(--spacing-small);
    background-color: var(--color-2);
    border: 1px solid var(--color-4);
    border-radius: var(--border-radius);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.02);
    }
`;

const Description = styled.span`
    flex: 1;
    text-align: left;
    font-size: var(--font-size-medium);
    margin-left: var(--spacing-small);
    color: var(--color-4);
`;

const Amount = styled.span`
    flex: 0;
    margin-left: var(--spacing-medium);
    text-align: right;
    font-size: var(--font-size-medium);
    color: ${(props) =>
        props.$isPositive ? "var(--color-positive)" : "var(--color-negative)"};
`;

const Button = styled.button`
    background: var(--color-negative);
    border: none;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
    margin-left: var(--spacing-small);
    cursor: pointer;

    & svg {
        color: white;
        stroke-width: 2px;
    }

    &:hover {
        background-color: var(--color-negative-hover);
    }
`;

function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(TransactionContext);

    if (!transaction) return null;

    const isPositive = transaction.amount >= 0;

    return (
        <StyledTransaction>
            <Description>
                {transaction.description} <br />
                <small>Category: {transaction.category}</small>
                <br />
                <small>
                    Date: {new Date(transaction.date).toLocaleDateString()}
                </small>
            </Description>
            <Amount $isPositive={isPositive}>
                {isPositive ? "+" : ""}
                {formatCurrency(transaction.amount)}
            </Amount>
            <Button
                onClick={() => {
                    deleteTransaction(transaction.id);
                    toast.success("Transaction deleted successfully");
                }}
            >
                <HiXMark />
            </Button>
        </StyledTransaction>
    );
}

export default Transaction;
