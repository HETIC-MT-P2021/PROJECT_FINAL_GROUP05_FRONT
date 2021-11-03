import { FC, useEffect, useState } from "react";
import * as React from "react";
import axios from "axios";

type User = {
  username?: string,
  userId?: number,
  profilePicture?: string,
  isLoggedIn?: boolean
}

interface AppContextInterface {
  user: User,
}

const AuthContext = React.createContext<Partial<AppContextInterface>>({});

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>({
    username: undefined,
    userId: undefined,
    profilePicture: undefined,
    isLoggedIn: false
  });

  useEffect(() => {
    const fragment = new URLSearchParams(window.location.hash.slice(1))
    const [accessToken, tokenType, expiresIn, scope] = [fragment.get('access_token'), fragment.get('token_type'), fragment.get('expires_in'), fragment.get('scope')];

    if (!accessToken) {
      console.log("Invalid access token");
    }

    const storableToken = {
      "access_token": accessToken,
      "token_type": tokenType,
      "expires_in": expiresIn,
      "refresh_token": "a refresh token",
      "scope": scope
    }

    console.log(storableToken)

    axios.get('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${tokenType} ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {

        const authenticatedUser = {
          username: response.data.username,
          userId: response.data.id,
          profilePicture: response.data.avatar,
          isLoggedIn: true
        }

        setUser(authenticatedUser)
      })
      .catch(console.error);
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
export type { User };

