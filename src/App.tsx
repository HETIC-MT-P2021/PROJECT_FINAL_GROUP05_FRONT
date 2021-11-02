import { FC } from "react";
import { AuthProvider } from "./Auth"
import "./App.css";
import "bulma/css/bulma.min.css";
import Layout from "./components/Layout";
import Menu from "./components/Menu/Menu";
import SettingsList from "./components/Settings/SettingsCommandsList";
import SearchBar from "./components/SearchBar/TopBar";

const App: FC = () => {

	return (
			<Layout>
				<SearchBar/>
				<Menu/>
				<SettingsList/>
			</Layout>
	);
};

const WrappedApp = () => (
	<AuthProvider>
		<App />
	</AuthProvider>
);

export default WrappedApp;
