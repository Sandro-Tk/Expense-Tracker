import styled from "styled-components";
import { formatCurrency } from "../helpers";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-small);

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const ValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-small);
    border: 1px solid var(--color-4);
    border-radius: var(--border-radius);
    width: 200px;
    padding: var(--spacing-small);
`;

const Label = styled.span`
    color: var(--color-4);
    font-weight: bold;
    font-size: var(--font-size-small);
`;

const Amount = styled.span`
    font-weight: bold;
    font-size: var(--font-size-large);
    color: ${({ color }) => color};
`;

function ValueBox({ label, amount, color }) {
    return (
        <ValueContainer>
            <Label>{label}</Label>
            <Amount color={color}>{amount}</Amount>
        </ValueContainer>
    );
}

function IncomeExpenses() {
    const { transactions } = useContext(TransactionContext);
    const income = formatCurrency(
        transactions
            .filter((tr) => tr.amount > 0)
            .reduce((acc, cur) => acc + cur.amount, 0)
    );

    const expense = formatCurrency(
        transactions
            .filter((tr) => tr.amount < 0)
            .reduce((acc, cur) => acc + cur.amount, 0)
    );

    return (
        <>
            <Container>
                <ValueBox
                    label="Income"
                    amount={`${income}`}
                    color="var(--color-positive)"
                />
                <ValueBox
                    label="Expense"
                    amount={`${expense}`}
                    color="var(--color-negative)"
                />
            </Container>
        </>
    );
}

export default IncomeExpenses;
