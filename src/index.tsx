import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bulma/css/bulma.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import Menu from "./components/Menu/Menu";
import SearchBar from "./components/SearchBar/TopBar"
import RouteProvider from "./Route"

const customHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <RouteProvider>
      <App />
    </RouteProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
