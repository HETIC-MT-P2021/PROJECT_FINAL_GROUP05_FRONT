import { FC } from "react";
import Dropdown from "./Dropdown";

const EndBarItems: FC = () => {
  return (
      <div className="navbar-item column is-2.5">
				<Dropdown/>
			</div>
  );
};

export default EndBarItems;
