import { FC } from "react";
import LoginItem from "./LoginItem";
import styled from 'styled-components';

const Navbar = styled.nav`
  min-height: 6rem;
  z-index: 0!important;
`;

const TopBar: FC = () => {
  return (
    <Navbar className="navbar has-background-dark is-fixed-top hero hero-head is-small" role="top bar" aria-label="top bar">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
        </div>
        <LoginItem/>
      </div>
    </Navbar>
  );
};

export default TopBar;
