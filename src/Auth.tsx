import { FC, useEffect, useState } from "react";
import * as React from "react";
import axios from "axios";

type User = {
  username?: string,
  user_id?: number,
  profile_picture?: string,
}

interface AppContextInterface {
  user: User,
}

const AuthContext = React.createContext<Partial<AppContextInterface>>({});

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>({
    username: undefined,
    user_id: undefined,
    profile_picture: undefined,
  });

  useEffect(() => {
    const fragment = new URLSearchParams(window.location.hash.slice(1))
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

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

        const authenticatedUser = {
          username: response.data.username,
          user_id: response.data.id,
          profile_picture: response.data.avatar,
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

export { AuthProvider, AuthContext }
