import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #f30f08;
`;

function Header() {
    return <StyledHeader>Expense Tracker</StyledHeader>;
}

export default Header;
