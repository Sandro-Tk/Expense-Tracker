import { useContext, useState } from "react";
import { formatCurrency } from "../../helpers";
import { TransactionContext } from "../../context/TransactionContext";
import { BudgetContext } from "../../context/BudgetContext";
import styled from "styled-components";
import toast from "react-hot-toast";

const StyledContainer = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px var(--color-4);
    border-radius: var(--border-radius);
`;

const StyledHeader = styled.h2`
    font-weight: 600;
    font-size: var(--font-size-medium);
    margin-bottom: var(--spacing-small);
    margin-top: var(--spacing-small);
    color: var(--color-4);
    text-align: center;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-medium);
    width: 70%;
`;

const StyledInput = styled.input`
    height: 40px;
    width: 250px;
    padding-inline: var(--spacing-small);
    border: 1px solid var(--color-3);
    border-radius: var(--border-radius);
    font-size: var(--font-size-medium);
    color: var(--color-4);
    background-color: var(--color-2);
    transition: border-color 0.2s;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &:focus {
        border-color: var(--color-4);
        outline: none;
    }

    &::placeholder {
        color: var(--color-4);
    }
`;

const StyledButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: var(--border-radius);
    background-color: var(--color-3);
    color: var(--color-1);
    font-size: var(--font-size-small);
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
    margin-top: var(--spacing-medium);

    &:hover {
        background-color: var(--color-4);
        transform: scale(1.02);
    }

    &:active {
        transform: scale(0.98);
    }
`;

const StyledProgress = styled.progress`
    width: 70%;
    height: 20px;
    appearance: none;

    &::-webkit-progress-bar {
        background-color: var(--color-2);
        border-radius: var(--border-radius);
        overflow: hidden;
    }

    &::-webkit-progress-value {
        background-color: var(--color-positive);
        border-radius: var(--border-radius);
    }

    &::-moz-progress-bar {
        background-color: var(--color-positive);
        border-radius: var(--border-radius);
    }
`;

const StyledMessage = styled.p`
    font-size: var(--font-size-small);
    color: ${(props) =>
        props.$hasSavings
            ? props.$overSavings
                ? "var(--color-positive)"
                : "var(--color-4)"
            : "var(--color-negative)"};
`;

function MonthlySavings() {
    const { monthlySavings, updateMonthlySavings } = useContext(BudgetContext);
    const { transactions } = useContext(TransactionContext);
    const [inputSavings, setInputSavings] = useState("");

    const curMonth = new Date().getMonth();
    const curYear = new Date().getFullYear();

    const monthlyIncome = transactions
        .filter((transaction) => {
            const transactionDate = new Date(transaction.date);
            return (
                transaction.amount > 0 &&
                transactionDate.getMonth() === curMonth &&
                transactionDate.getFullYear() === curYear
            );
        })
        .reduce((sum, transaction) => sum + Math.abs(transaction.amount), 0);

    const savingsUsedPercentage = Math.min(
        (monthlyIncome / monthlySavings) * 100,
        100
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputSavings || Number(inputSavings) <= 0) {
            toast.error("Please enter a valid amount");
            return;
        }

        updateMonthlySavings(Number(inputSavings));
        setInputSavings("");
        toast.success("Monthly savings successfully added");
    };

    return (
        <StyledContainer>
            {!monthlySavings && (
                <StyledForm onSubmit={handleSubmit}>
                    <StyledHeader>Set Your Monthly Savings Goal</StyledHeader>
                    <StyledInput
                        type="number"
                        id="savings"
                        value={inputSavings}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value === "" || Number(value) > 0) {
                                setInputSavings(value);
                            }
                        }}
                        placeholder="Enter your savings goal"
                    />
                    <StyledButton type="submit">Set Savings</StyledButton>
                </StyledForm>
            )}
            {monthlySavings > 0 && (
                <StyledHeader>Your monthly savings</StyledHeader>
            )}
            {monthlySavings > 0 && (
                <StyledProgress
                    value={savingsUsedPercentage}
                    max={100}
                ></StyledProgress>
            )}
            <StyledMessage
                $hasSavings={monthlySavings > 0}
                $overSavings={savingsUsedPercentage >= 100}
            >
                {monthlySavings > 0
                    ? savingsUsedPercentage >= 100
                        ? "You have reached your savings goal"
                        : `Remaining savings goal: ${formatCurrency(
                              monthlySavings - monthlyIncome
                          )}`
                    : "Please set a savings goal to track your income"}
            </StyledMessage>
            {monthlySavings > 0 && (
                <StyledButton
                    onClick={() => {
                        updateMonthlySavings(0);
                        toast.success("Monthly savings successfully reset");
                    }}
                >
                    Reset Monthly Savings
                </StyledButton>
            )}
        </StyledContainer>
    );
}

export default MonthlySavings;
