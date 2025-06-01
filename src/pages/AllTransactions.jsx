import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TransactionsList from "../components/TransactionsList";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-medium);
    padding: var(--spacing-medium);
`;

const StyledButton = styled.button`
    margin-top: var(--spacing-small);
    padding: var(--spacing-small);
    background-color: var(--color-4);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
`;

function AllTransactions() {
    const navigate = useNavigate();

    return (
        <StyledContainer>
            <TransactionsList showAll={true} />
            <StyledButton onClick={() => navigate("/home")}>
                Back to Home
            </StyledButton>
        </StyledContainer>
    );
}

export default AllTransactions;
