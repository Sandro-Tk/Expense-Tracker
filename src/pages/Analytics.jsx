import styled from "styled-components";
import TodayTransactions from "../features/Analytics/TodayTransactions";
import ExpensesChart from "../features/Analytics/ExpensesChart";
import CashFlow from "../features/Analytics/CashFlow";

const StyledAnalytics = styled.div`
    padding: var(--spacing-medium);
    padding: 10px 100px;
`;

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
`;

const StyledHeader = styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: var(--font-size-medium);
    margin-bottom: var(--spacing-medium);
    color: var(--color-4);
    
`;

function Analytics() {
    return (
        <StyledAnalytics>
            <StyledHeader>
                <span>Analytics</span>
                <div>FILTERS</div>
            </StyledHeader>
            <StyledContainer>
                <TodayTransactions />
                <ExpensesChart />
                <CashFlow />
            </StyledContainer>
        </StyledAnalytics>
    );
}

export default Analytics;
