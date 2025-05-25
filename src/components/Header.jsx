import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.color4};
    margin-bottom: ${({ theme }) => theme.spacing.small};
`;

function Header() {
    return <StyledHeader>Expense Tracker</StyledHeader>;
}

export default Header;
