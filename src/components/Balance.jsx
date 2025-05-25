import styled from "styled-components";
import { formatCurrency } from "../helpers";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.header`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.color4};
`;

const StyledBalance = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.color4};
    margin-bottom: ${({ theme }) => theme.spacing.small};
`;

function Balance() {
    const { transactions } = useContext(TransactionContext);

    return (
        <>
            <StyledContainer>
                <Header>Your Balance</Header>
                <StyledBalance>
                    {formatCurrency(
                        transactions.reduce((acc, cur) => cur.amount + acc, 0)
                    )}
                </StyledBalance>
            </StyledContainer>
        </>
    );
}

export default Balance;
