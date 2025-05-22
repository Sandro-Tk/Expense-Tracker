import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1px;
    align-items: center;
`;

const ValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid gray;
    width: 200px;
`;

const Label = styled.span`
    margin-left: 20px;
    margin-top: 10px;
    color: gray;
    font-weight: bold;
    font-size: 15px;
`;

const Income = styled.span`
    margin-left: 20px;
    color: green;
    font-weight: bold;
    font-size: 30px;
`;

const Expense = styled.span`
    margin-left: 20px;
    color: red;
    font-weight: bold;
    font-size: 30px;
`;

function IncomeExpenses({ transactions }) {
    const income = transactions
        .filter((tr) => tr.amount > 0)
        .reduce((acc, cur) => acc + cur.amount, 0);

    const expense = transactions
        .filter((tr) => tr.amount < 0)
        .reduce((acc, cur) => acc + cur.amount, 0);

    return (
        <>
            <Container>
                <ValueContainer>
                    <Label>Income</Label>
                    <Income>{income}</Income>
                </ValueContainer>
                <ValueContainer>
                    <Label>Expense</Label>
                    <Expense>{expense}</Expense>
                </ValueContainer>
            </Container>
        </>
    );
}

export default IncomeExpenses;
