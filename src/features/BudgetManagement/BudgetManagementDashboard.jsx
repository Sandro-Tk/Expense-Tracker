import { useContext, useState } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import styled from "styled-components";
import { formatCurrency } from "../../helpers";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        background-color: ${(props) =>
            props.$noBudget
                ? "var(--color-1)"
                : props.value > 75
                ? "var(--color-negative)"
                : "var(--color-positive)"};
        border-radius: var(--border-radius);
    }

    &::-moz-progress-bar {
        background-color: ${(props) =>
            props.$noBudget
                ? "var(--color-1)"
                : props.value > 75
                ? "var(--color-negative)"
                : "var(--color-positive)"};
        border-radius: var(--border-radius);
    }
`;

const StyledMessage = styled.p`
    font-size: 1rem;
    color: ${(props) =>
        props.$overBudget ? "var(--color-negative)" : "inherit"};
`;

function BudgetManagementDashboard() {
    const { transactions } = useContext(TransactionContext);
    const [budget, setBudget] = useState(0);
    const [inputBudget, setInputBudget] = useState("");

    const totalSpent = transactions.reduce(
        (sum, transaction) => sum + transaction.amount,
        0
    );

    const budgetUsedPercentage = Math.min((totalSpent / budget) * 100, 100);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBudget(Number(inputBudget));
        setInputBudget("");
    };

    return (
        <StyledContainer>
            {!budget && (
                <StyledForm onSubmit={handleSubmit}>
                    <StyledHeader>Set Your Monthly Budget</StyledHeader>
                    <StyledInput
                        type="number"
                        id="budget"
                        value={inputBudget}
                        onChange={(e) => setInputBudget(e.target.value)}
                        placeholder="Enter your budget"
                    />
                    <StyledButton type="submit">Set Budget</StyledButton>
                </StyledForm>
            )}
            <StyledHeader>
                Monthly Budget:{" "}
                {budget > 0 ? formatCurrency(budget) : "Not Set"}
            </StyledHeader>
            <StyledProgress
                value={budgetUsedPercentage}
                max={100}
                $noBudget={budget === 0}
            ></StyledProgress>
            <StyledMessage $overBudget={budgetUsedPercentage >= 100}>
                {budget > 0
                    ? budgetUsedPercentage >= 100
                        ? "You are over your budget"
                        : `Remaining budget: ${formatCurrency(
                              budget - totalSpent
                          )}`
                    : "Please set a budget to track your expenses."}
            </StyledMessage>
        </StyledContainer>
    );
}

export default BudgetManagementDashboard;
