import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`;

const FormItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    gap: 10px;
`;

const FormItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

const StyledInput = styled.input`
    height: 30px;
    width: 250px;
    padding-inline: 15px;
    -webkit-appearance: none;
    appearance: none;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    border: none;
    &:focus {
        border: solid 1px blue;
        outline: none;
    }
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
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
        background-color: #039903;
    }
`;

function AddTransaction({ addTransaction }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    function submit(e) {
        e.preventDefault();
        if (!description || !amount) return;

        addTransaction({
            id: Date.now(),
            description,
            amount: parseFloat(amount),
        });

        setDescription("");
        setAmount("");
    }

    return (
        <StyledForm onSubmit={submit}>
            <FormItemContainer>
                <FormItem>
                    <StyledInput
                        type="text"
                        placeholder="Description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FormItem>
                <FormItem>
                    <StyledInput
                        type="number"
                        placeholder="Amount"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </FormItem>
            </FormItemContainer>
            <FormButton type="submit" onSubmit={submit}>
                Add transaction
            </FormButton>
        </StyledForm>
    );
}

export default AddTransaction;
