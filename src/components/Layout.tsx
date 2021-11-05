import { FC } from "react";
import Menu from "../components/Menu/Menu";
import SearchBar from "../components/SearchBar/TopBar";

const Layout: FC = ({ children }) => {
  return <div className="is-flex has-background-grey-dark">{children}</div>;
};

export default Layout;
