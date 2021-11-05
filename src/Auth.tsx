import { FC, useEffect, useReducer } from "react";
import { AuthContext } from "./context/AuthContext";
import * as React from "react";
import axios, { AxiosResponse } from "axios";
import { AuthReducer, initialUserState } from "./reducer/AuthReducer";

interface RawResponse {
	username: string;
	id: string;
	avatar: string;
}

const AuthProvider: FC = ({ children }) => {
	const [userState, dispatch] = useReducer(AuthReducer, initialUserState);

	useEffect(() => {
		const fragment = new URLSearchParams(window.location.hash.slice(1));

		const [accessToken, tokenType] = [
			fragment.get("access_token"),
			fragment.get("token_type"),
		];

		if (!accessToken) {
			console.log("Invalid access token");
		}

		axios
			.get("https://discord.com/api/users/@me", {
				headers: {
					authorization: `${tokenType} ${accessToken}`,
					"Content-Type": "application/x-www-form-urlencoded",
				},
			})
			.then((response: AxiosResponse<RawResponse>) => {
				console.log("response", response);

				dispatch({
					type: "login",
					payload: {
						user: {
							username: response.data.username,
							userId: response.data.id,
							profilePicture: response.data.avatar,
						},
						token: "tokenExample",
					},
				});
			})
			.catch(console.error);
	}, []);

	return (
		<AuthContext.Provider
			value={{
				state: userState,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider };
