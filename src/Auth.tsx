import { FC, useEffect, useState, useReducer } from "react";
import * as React from "react";
import axios from "axios";

type User = {
  username?: string,
  userId?: number,
  profilePicture?: string,
  isLoggedIn: boolean
}

interface AppContextInterface {
  user: User,
}

const defaultUser = {
  username: undefined,
  userId: undefined,
  profilePicture: undefined,
  isLoggedIn: false
}

const AuthContext = React.createContext<User>(defaultUser);

const userReducer = (state: any, action: { type: string; user: User; }) =>  {
  switch (action.type) {
    case "login":
      return action.user;
    case "logout":
      return defaultUser;
    default:
      return state;
  }
}

const AuthProvider: FC = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, defaultUser);

  useEffect(() => {
    const fragment = new URLSearchParams(window.location.hash.slice(1))
    const [accessToken, tokenType, expiresIn, scope] = [fragment.get('access_token'), fragment.get('token_type'), fragment.get('expires_in'), fragment.get('scope')];

    if (!accessToken) {
      console.log("Invalid access token");
    }

    axios.get('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${tokenType} ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(user)
        console.log(response)
        dispatch({ type: "login", user: {
            username: response.data.username,
            userId: response.data.id,
            profilePicture: response.data.avatar,
            isLoggedIn: true
          }
        })
      })
      .catch(console.error);
  }, [])

  return (
    <AuthContext.Provider value={ user }>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, userReducer, defaultUser };
export type { User };

