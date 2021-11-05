import React from 'react';
import {
	initialUserState,
	UserAction,
	UserState,
} from '../reducer/AuthReducer';

interface AppContextInterface {
	state: UserState;
	dispatch: (action: UserAction) => void;
}

const initialContext: AppContextInterface = {
	state: initialUserState,
	dispatch: () => {},
};

export const AuthContext =
	React.createContext<AppContextInterface>(initialContext);
