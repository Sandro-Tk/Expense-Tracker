import styled from "styled-components";
import MonthlyBudget from "../features/BudgetManagement/MonthlyBudget";
import MonthlySavings from "../features/BudgetManagement/MonthlySavings";
import BudgetByCategories from "../features/BudgetManagement/BudgetByCategories";

const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: var(--spacing-medium);
    padding: var(--spacing-medium);
`;

function BudgetManagement() {
    return (
        <StyledGridContainer>
            <MonthlyBudget />
            <MonthlySavings />
            <BudgetByCategories />
        </StyledGridContainer>
    );
}

export default BudgetManagement;
