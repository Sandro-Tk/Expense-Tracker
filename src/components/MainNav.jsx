import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
    HiOutlineChartBar,
    HiOutlineHome,
    HiOutlineUsers,
    HiCurrencyDollar,
} from "react-icons/hi2";
const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-small);
    list-style: none;
`;

const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: var(--spacing-medium);

        color: var(--color-3);
        font-size: var(--font-size-medium);
        font-weight: 500;
        padding: 1.2rem 2.4rem;
        transition: all 0.3s;
    }

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-1);
        background-color: var(--color-3);
        border-radius: var(--border-radius);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: var(--color-3);
        transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--color-1);
    }
`;

function MainNav() {
    return (
        <nav>
            <NavList>
                <li>
                    <StyledNavLink to="/home">
                        <HiOutlineHome />
                        <span>Home</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/analytics">
                        <HiOutlineChartBar />
                        <span>Reports/Analytics</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/budget_management">
                        <HiCurrencyDollar />
                        <span>Budget Management</span>
                    </StyledNavLink>
                </li>
            </NavList>
        </nav>
    );
}

export default MainNav;
