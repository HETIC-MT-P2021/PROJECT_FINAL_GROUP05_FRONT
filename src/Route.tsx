import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import SettingsList from "./components/Settings/SettingsCommandsList";
import LibraryList from "./components/Library/LibraryList";

const RouteProvider: FC = ({children}) => {

  const customHistory = createBrowserHistory();

  return (
    <Router history={customHistory}>
      {children}
      <Switch>
        <Route exact path="/settings">
          <SettingsList />
        </Route>
        <Route exact path="/library">
          <LibraryList />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouteProvider
