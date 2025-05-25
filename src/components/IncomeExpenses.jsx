import styled from "styled-components";
import { formatCurrency } from "../helpers";
import { theme } from "../GlobalStyles";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.small};

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const ValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
    border: 1px solid ${({ theme }) => theme.colors.color4};
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 200px;
    padding: ${({ theme }) => theme.spacing.small};
`;

const Label = styled.span`
    color: ${({ theme }) => theme.colors.color4};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.small};
`;

const Amount = styled.span`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.large};
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
                    color={theme.colors.positive}
                />
                <ValueBox
                    label="Expense"
                    amount={`${expense}`}
                    color={theme.colors.negative}
                />
            </Container>
        </>
    );
}

export default IncomeExpenses;
