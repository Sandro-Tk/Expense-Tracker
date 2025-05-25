import styled from "styled-components";

const StyledDiv = styled.div`
    color: ${({ theme }) => theme.colors.color4};
    font-size: ${({ theme }) => theme.fontSizes.medium};
`;

function NoTransactions() {
    return <StyledDiv>No transactions to be displayed!</StyledDiv>;
}

export default NoTransactions;
