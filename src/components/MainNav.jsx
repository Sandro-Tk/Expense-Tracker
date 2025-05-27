import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
    HiOutlineChartBar,
    HiOutlineComputerDesktop,
    HiOutlineHome,
    HiOutlineUsers,
} from "react-icons/hi2";

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    list-style: none;
`;

const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        color: var(--color-3);
        font-size: 1.6rem;
        font-weight: 500;
        padding: 1.2rem 2.4rem;
        transition: all 0.3s;
    }

    /* This works because react-router places the active class on the active NavLink */
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-1);
        background-color: var(--color-3);
        border-radius: 10px;
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
                    <StyledNavLink to="/">
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
                    <StyledNavLink to="/dashboard">
                        <HiOutlineComputerDesktop />
                        <span>Dashboard</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/profile">
                        <HiOutlineUsers />
                        <span>Profile</span>
                    </StyledNavLink>
                </li>
            </NavList>
        </nav>
    );
}

export default MainNav;
