import styled from "styled-components";

const StyledDiv = styled.div`
    color: var(--color-4);
    font-size: var(--font-size-medium);
`;

function NoTransactions() {
    return <StyledDiv>No transactions to be displayed!</StyledDiv>;
}

export default NoTransactions;
