import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const StyledPageNotFound = styled.div`
    display: flex;
    height: 80vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: var(--spacing-medium);
`;

const Header = styled.header`
    font-size: var(--font-size-medium);
    color: var(--color-4);
`;

const StyledButton = styled.button`
    width: 300px;
    padding: var(--spacing-small);
    border: none;
    border-radius: var(--border-radius);
    background-color: var(--color-3);
    color: var(--color-1);
    font-size: var(--font-size-medium);
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;

    &:hover {
        background-color: var(--color-4);
        transform: scale(1.02);
    }

    &:active {
        transform: scale(0.98);
    }
`;

function PageNotFound() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/");
    };

    return (
        <StyledPageNotFound>
            <Header>The page you are looking for could not be found 😢</Header>
            <StyledButton onClick={goBack}>&larr; Go back</StyledButton>
        </StyledPageNotFound>
    );
}

export default PageNotFound;
