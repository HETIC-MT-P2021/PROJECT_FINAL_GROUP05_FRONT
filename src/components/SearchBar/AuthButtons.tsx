import React, { useContext } from "react";
import { AuthContext, User } from "../../Auth";
import Dropdown from "./Dropdown";
import ProfileDropdown from "./ProfileDropdown";

const AuthButton = () => {

  const { user } = useContext(AuthContext);

  let { isLoggedIn } = User;

  if (isLoggedIn === true) {
    return (
      <>
        <Dropdown/>
        <ProfileDropdown user={user}/>
      </>
    )
  } else {
    return (
    <a className={"has-text-white"} href="https://discord.com/api/oauth2/authorize?client_id=892397126301155330&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=token&scope=identify">Se connecter</a>
    )
  }
};

export default AuthButton;