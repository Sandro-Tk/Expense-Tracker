import styled from "styled-components";
import MonthlyBudget from "../features/BudgetManagement/MonthlyBudget";
import MonthlySavings from "../features/BudgetManagement/MonthlySavings";
import BudgetByCategories from "../features/BudgetManagement/BudgetByCategories";

const StyledBudgetManagement = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-medium);
`;

const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: var(--spacing-medium);
    padding: 5px 40px;
`;

const StyledHeader = styled.h2`
    font-weight: 600;
    font-size: var(--font-size-medium);
    margin-bottom: var(--spacing-small);
    margin-top: var(--spacing-small);
    color: var(--color-4);
    text-align: center;
`;

function BudgetManagement() {
    return (
        <StyledBudgetManagement>
            <StyledHeader>Budget Management</StyledHeader>
            <StyledGridContainer>
                <MonthlyBudget />
                <MonthlySavings />
                <BudgetByCategories />
            </StyledGridContainer>
        </StyledBudgetManagement>
    );
}

export default BudgetManagement;
