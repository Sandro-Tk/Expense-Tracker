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
    font-size: var(--font-size-medium);
    color: var(--color-4);
`;

const StyledBalance = styled.span`
    font-size: var(--font-size-large);
    color: var(--color-4);
    margin-bottom: var(--spacing-small);
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
