export type User = {
	username: string;
	userId: string;
	profilePicture: string;
};

export type UserState = {
	isAuthenticated: boolean;
	user: User | undefined;
	token: string | undefined;
};

export type UserAction = {
	type: string;
	payload: {
		user: User | undefined;
		token: string;
	};
};

const initialUserState: UserState = {
	isAuthenticated: false,
	user: undefined,
	token: undefined,
};

const AuthReducer = (state: UserState, action: UserAction): UserState => {
	switch (action.type) {
		case "login":
			localStorage.setItem("user", JSON.stringify(action.payload.user));
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.user,
				token: action.payload.token,
			};
		case "logout":
			localStorage.clear(); // TO DO: be less violent!!!
			return {
				...state,
				isAuthenticated: false,
				user: undefined,
				token: undefined,
			};
		default:
			return state;
	}
};

export { AuthReducer, initialUserState };
