import styled from "styled-components";
import MonthlyBudget from "../features/BudgetManagement/MonthlyBudget";
import BudgetByCategories from "../features/BudgetManagement/BudgetByCategories";

const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: var(--spacing-medium);
    padding: var(--spacing-medium);

    .div2 {
        grid-area: 1 / 2 / 2 / 3;
        background-color: red;
    }
    .div3 {
        grid-area: 1 / 3 / 2 / 4;
        background-color: green;
    }
    .div5 {
        grid-area: 2 / 3 / 3 / 4;
        background-color: blue;
    }
`;

function BudgetManagement() {
    return (
        <StyledGridContainer>
            <MonthlyBudget />
            <div className="div2"></div>
            <div className="div3"></div>
            <BudgetByCategories />
            <div className="div5"></div>
        </StyledGridContainer>
    );
}

export default BudgetManagement;
