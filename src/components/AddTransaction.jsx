import { useContext, useState } from "react";
import styled from "styled-components";
import { TransactionContext } from "../context/TransactionContext";
import { categories } from "../constants/categories";

const StyledForm = styled.form`
    padding-top: ${({ theme }) => theme.spacing.medium};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.medium};
`;

const FormItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.small};
    flex-wrap: wrap;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledInput = styled.input`
    height: 40px;
    width: 250px;
    padding-inline: ${({ theme }) => theme.spacing.small};
    border: 1px solid ${({ theme }) => theme.colors.color3};
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.color4};
    background-color: ${({ theme }) => theme.colors.color2};
    transition: border-color 0.2s;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.color4};
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.color4};
    }
`;

const StyledSelect = styled.select`
    height: 40px;
    width: 250px;
    padding-inline: ${({ theme }) => theme.spacing.small};
    border: 1px solid ${({ theme }) => theme.colors.color3};
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.color4};
    background-color: ${({ theme }) => theme.colors.color2};
    transition: border-color 0.2s;

    &:focus {
        border-color: ${({ theme }) => theme.colors.color4};
        outline: none;
    }
`;

const FormButton = styled.button`
    width: 300px;
    padding: ${({ theme }) => theme.spacing.small};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.color3};
    color: ${({ theme }) => theme.colors.color1};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.color4};
        transform: scale(1.02);
    }

    &:active {
        transform: scale(0.98);
    }
`;

function AddTransaction() {
    const { addTransaction } = useContext(TransactionContext);

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState(categories[0]);

    function submit(e) {
        e.preventDefault();
        if (!description || !amount || !category) return;

        addTransaction({
            id: Date.now(),
            description,
            amount: parseFloat(amount),
            category,
            date: new Date().toISOString(),
        });

        setDescription("");
        setAmount("");
        setCategory("General");
    }

    return (
        <StyledForm onSubmit={submit}>
            <FormItemContainer>
                <StyledInput
                    type="text"
                    placeholder="Description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    aria-label="Transaction Description"
                />
                <StyledInput
                    type="number"
                    placeholder="Amount"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    aria-label="Transaction Amount"
                />
                <StyledSelect
                    value={category}
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                    aria-label="Transaction Category"
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </StyledSelect>
            </FormItemContainer>
            <FormButton type="submit">Add transaction</FormButton>
        </StyledForm>
    );
}

export default AddTransaction;
