import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.header`
    font-size: 15px;
    color: gray;
`;

const StyledBalance = styled.span`
    font-size: 2rem;
`;

function Balance({ transactions }) {
    return (
        <>
            <StyledContainer>
                <Header>Your Balance</Header>
                <StyledBalance>
                    {transactions.reduce((acc, cur) => cur.amount + acc, 0)}
                </StyledBalance>
            </StyledContainer>
        </>
    );
}

export default Balance;
