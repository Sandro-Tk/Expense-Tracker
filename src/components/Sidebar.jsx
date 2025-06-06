import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
    background-color: var(--color-1);
    padding: 3.2rem 2.4rem;
    border-right: 1px solid var(--color-2);
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-medium);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 10;
`;

function Sidebar() {
    return (
        <StyledSidebar>
            <Logo />
            <MainNav />
        </StyledSidebar>
    );
}

export default Sidebar;
