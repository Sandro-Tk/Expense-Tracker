import { useContext } from "react";
import styled from "styled-components";
import { formatCurrency } from "../../helpers";
import { BudgetContext } from "../../context/BudgetContext";
import toast from "react-hot-toast";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-medium);
    grid-area: 2 / 1 / 3 / 3;
`;

const StyledHeader = styled.h2`
    font-weight: 600;
    font-size: var(--font-size-medium);
    margin-bottom: var(--spacing-small);
    color: var(--color-4);
    text-align: center;
`;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-medium);
    width: 100%;
`;

const StyledGridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--spacing-small);
    border: 1px solid var(--color-4);
    border-radius: var(--border-radius);
    background-color: var(--color-1);
    color: var(--color-4);
`;

const StyledInput = styled.input`
    height: 30px;
    width: 80%;
    margin-top: var(--spacing-small);
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

const StyledProgress = styled.progress`
    width: 100%;
    height: 20px;
    appearance: none;
    margin-top: var(--spacing-medium);

    &::-webkit-progress-bar {
        background-color: var(--color-2);
        border-radius: var(--border-radius);
        overflow: hidden;
    }

    &::-webkit-progress-value {
        background-color: ${(props) =>
            props.value >= 100
                ? "var(--color-negative)"
                : "var(--color-positive)"};
        border-radius: var(--border-radius);
    }

    &::-moz-progress-bar {
        background-color: ${(props) =>
            props.value >= 100
                ? "var(--color-negative)"
                : "var(--color-positive)"};
        border-radius: var(--border-radius);
    }
`;

function BudgetByCategories() {
    const { categories, updateCategoryBudget, monthlyBudget, setCategories } =
        useContext(BudgetContext);

    const handleBudgetChange = (categoryName, value, inputElement) => {
        const newBudget = parseFloat(value) || 0;

        const category = categories.find((cat) => cat.name === categoryName);
        if (category && category.budget === newBudget) {
            return;
        }

        const totalBudget = categories.reduce((sum, category) => {
            return category.name === categoryName
                ? sum + newBudget
                : sum + category.budget;
        }, 0);

        if (totalBudget > monthlyBudget) {
            inputElement.value = category.budget;
            toast.error(
                "Total category budgets cannot exceed the monthly budget."
            );
            return;
        }

        const updatedCategories = categories.map((category) =>
            category.name === categoryName
                ? { ...category, newBudget }
                : category
        );

        setCategories(updatedCategories);
        updateCategoryBudget(categoryName, value);
        toast.success("Category budget updated successfully");
    };

    return (
        <StyledContainer>
            <StyledHeader>Set Monthly Budgets by Category</StyledHeader>
            <StyledGrid>
                {categories.map((category) => (
                    <StyledGridItem key={category.name}>
                        <span>{category.name}</span>
                        <StyledInput
                            type="number"
                            min="0"
                            defaultValue={category.budget || ""}
                            id={category.name}
                            disabled={!monthlyBudget}
                            onBlur={(e) =>
                                handleBudgetChange(
                                    category.name,
                                    e.target.value,
                                    e.target
                                )
                            }
                            placeholder="Enter budget"
                        />
                        <StyledProgress
                            value={
                                category.budget > 0
                                    ? Math.min(
                                          (category.spent / category.budget) *
                                              100,
                                          100
                                      )
                                    : 0
                            }
                            max={100}
                        />
                        <span>
                            {`Spent: ${formatCurrency(category.spent)}`}
                        </span>
                        <span>
                            {`Budget: ${formatCurrency(category.budget)}`}
                        </span>
                    </StyledGridItem>
                ))}
            </StyledGrid>
        </StyledContainer>
    );
}

export default BudgetByCategories;
