import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`;

const FormItem = styled.div`
    width: 300px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const FormButton = styled.button`
    width: 300px;
    padding: 10px;
    margin-top: 10px;
    border: solid 1px;
    border-radius: 10px;
    background-color: #34d134;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.8;
    cursor: pointer;
    &:hover {
        background-color: #039903;
    }
`;

function AddTransaction({ addTransaction }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);

    function submit(e) {
        e.preventDefault();
        if (!description || !amount) return;

        addTransaction({
            id: Date.now(),
            description,
            amount: parseFloat(amount),
        });

        setDescription("");
        setAmount(0);
    }

    return (
        <StyledForm onSubmit={submit}>
            <FormItem>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </FormItem>
            <FormItem>
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </FormItem>
            <FormButton type="submit" onSubmit={submit}>
                Add transaction
            </FormButton>
        </StyledForm>
    );
}

export default AddTransaction;
