import { HiXMark } from "react-icons/hi2";
import { formatCurrency } from "../helpers";
import styled from "styled-components";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const StyledTransaction = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    padding: ${({ theme }) => theme.spacing.small};
    background-color: ${({ theme }) => theme.colors.color2};
    border: 1px solid ${({ theme }) => theme.colors.color4};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.02);
    }
`;

const Description = styled.span`
    flex: 1;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-left: ${({ theme }) => theme.spacing.small};
    color: ${({ theme }) => theme.colors.color4};
`;

const Amount = styled.span`
    flex: 0;
    margin-left: ${({ theme }) => theme.spacing.medium};
    text-align: right;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${(props) =>
        props.$isPositive
            ? props.theme.colors.positive
            : props.theme.colors.negative};
`;

const Button = styled.button`
    background: ${({ theme }) => theme.colors.negative};
    border: none;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
    margin-left: ${({ theme }) => theme.spacing.small};
    cursor: pointer;

    & svg {
        color: white;
        stroke-width: 2px;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.negative_hover};
    }
`;

function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(TransactionContext);

    if (!transaction) return null;

    const isPositive = transaction.amount >= 0;

    return (
        <StyledTransaction>
            <Description>{transaction.description}</Description>
            <Amount $isPositive={isPositive}>
                {isPositive ? "+" : ""}
                {formatCurrency(transaction.amount)}
            </Amount>
            <Button onClick={() => deleteTransaction(transaction.id)}>
                <HiXMark />
            </Button>
        </StyledTransaction>
    );
}

export default Transaction;
