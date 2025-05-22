import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledTransaction = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
`;

const Description = styled.span`
    display: flex;
    justify-content: left;
`;
const Amount = styled.span`
    display: flex;
    justify-content: right;
    align-items: right;
`;

const Button = styled.button`
    background: red;
    border: none;
    border-radius: 10px;
    transition: all 0.2s;
    margin-left: 5px;

    &:hover {
        color: darkred;
    }

    & svg {
        width: 1rem;
        height: 1rem;
    }
`;

function Transaction({ deleteTransaction, transaction }) {
    if (!transaction) return null;

    return (
        <StyledTransaction>
            <Description>{transaction.description}</Description>
            <Amount>{transaction.amount}</Amount>
            <Button onClick={() => deleteTransaction(transaction.id)}>
                <HiXMark />
            </Button>
        </StyledTransaction>
    );
}

export default Transaction;
