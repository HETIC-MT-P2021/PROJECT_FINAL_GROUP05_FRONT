import { FC, useContext } from "react";
import { AuthContext } from "../../Auth";
import Dropdown from "./Dropdown";
import ProfileDropdown from "./ProfileDropdown";

const EndBarItems: FC = () => {

  const { user } = useContext(AuthContext);

  return (
      <div className="navbar-item column is-flex is-flex-direction-row is-justify-content-space-around mr-6">
        <Dropdown/>
        <a href="https://discord.com/api/oauth2/authorize?client_id=892397126301155330&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=token&scope=identify">Se connecter</a>
				<ProfileDropdown/>
			</div>
  );
};

export default EndBarItems;
