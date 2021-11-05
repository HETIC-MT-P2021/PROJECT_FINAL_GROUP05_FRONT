import React, { useContext } from "react";
import Dropdown from "./Dropdown";
import ProfileDropdown from "./ProfileDropdown";
import { AuthContext } from "../../context/AuthContext";

const AuthButton = () => {
	const { state } = useContext(AuthContext);

	if (state.isAuthenticated) {
		return (
			<>
				<Dropdown />
				<ProfileDropdown />
			</>
		);
	}

	return (
		<a
			className={"has-text-white"}
			href="https://discord.com/api/oauth2/authorize?client_id=892397126301155330&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=token&scope=identify"
		>
			Se connecter
		</a>
	);
};

export default AuthButton;
