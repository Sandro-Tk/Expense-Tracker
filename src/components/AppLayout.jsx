import styled from "styled-components";

const StyledContainer = styled.div`
    background-color: var(--color-2);
    width: 70%;
    margin: auto;
    height: 100vh;
`;

function AppLayout({ children }) {
    return <StyledContainer>{children}</StyledContainer>;
}

export default AppLayout;
