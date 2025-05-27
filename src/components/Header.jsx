import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2.4rem;
    padding: 1.2rem 4.8rem;
    border-bottom: 1px solid var(--color-2);
`;

function Header() {
    return <StyledHeader>HEADER</StyledHeader>;
}

export default Header;
