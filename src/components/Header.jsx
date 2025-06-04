import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: var(--color-1);
    gap: 2.4rem;
    padding: 1.2rem 4.8rem;
    border-bottom: 1px solid var(--color-2);
    position: fixed;
    width: 100%;
    z-index: 1;
`;

const StyledButton = styled.button`
    background: none;
    border: none;
    padding: 0.6rem;
    border-radius: var(--border-radius);
    transition: all 0.2s;

    &:hover {
        background-color: var(--color-1);
    }

    & svg {
        width: 2.2rem;
        height: 2.2rem;
        color: var(--color-4);
    }
`;

function Header() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <StyledHeader>
            <StyledButton onClick={toggleDarkMode}>
                {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
            </StyledButton>
        </StyledHeader>
    );
}

export default Header;
