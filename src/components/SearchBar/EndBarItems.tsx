import { FC } from "react";
import Dropdown from "./Dropdown";
import ProfileDropdown from "./ProfileDropdown"

const EndBarItems: FC = () => {
  return (
      <div className="navbar-item column is-flex is-flex-direction-row is-justify-content-space-around mr-6">
        <Dropdown/>
				<ProfileDropdown/>
			</div>
  );
};

export default EndBarItems;
