import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { formatCurrency } from "../helpers";

const StyledTransaction = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    height: 40px;
`;

const Description = styled.span`
    flex: 1;
    text-align: left;
    font-size: 20px;
    margin-left: 10px;
`;
const Amount = styled.span`
    flex: 0;
    margin-left: 20px;
    text-align: right;
    color: ${(props) => (props.$isPositive ? "green" : "red")};
`;

const Button = styled.button`
    background: red;
    border: none;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    margin-left: 5px;
    cursor: pointer;
    & svg {
        color: white;
        stroke-width: 2px;
    }

    &:hover {
        background-color: darkred;
    }
`;

function Transaction({ deleteTransaction, transaction }) {
    if (!transaction) return null;

    const isPositive = transaction.amount >= 0;

    return (
        <StyledTransaction>
            <Description>{transaction.description}</Description>
            <Amount $isPositive={isPositive}>
                {isPositive ? "+" : ""}
                {formatCurrency(transaction.amount)}
            </Amount>
            <Button onClick={() => deleteTransaction(transaction.id)}>
                <HiXMark />
            </Button>
        </StyledTransaction>
    );
}

export default Transaction;
