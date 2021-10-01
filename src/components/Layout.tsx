import { FC } from "react";

const Layout: FC = ({ children }) => {
  return <div className="is-flex has-background-grey-dark">{children}</div>;
};

export default Layout;
