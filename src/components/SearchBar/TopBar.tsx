import { FC } from "react";
import LoginItem from "./LoginItem";

const TopBar: FC = () => {
  return (
    <nav className="navbar has-background-dark is-fixed-top 4rem" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
        </div>
        <LoginItem/>
      </div>
    </nav>
  );
};

export default TopBar;
