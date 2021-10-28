import { FC } from "react";
import EndBarItems from "./EndBarItems";
import styled from 'styled-components';

const Navbar = styled.nav`
  min-height: 6rem;
  z-index: 0!important;
`;

const TopBar: FC = () => {
  return (
    <Navbar className="navbar has-background-dark is-fixed-top hero hero-head is-small" role="top bar" aria-label="top bar">
      <div id="navbarBasicExample" className="navbar-menu columns is-desktop is-vcentered">
        <div className="column is-three-quarters">
        </div>
        <EndBarItems/>
      </div>
    </Navbar>
  );
};

export default TopBar;
