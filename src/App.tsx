import "./App.css";
import "bulma/css/bulma.min.css";
import Layout from "./components/Layout";
import Menu from "./components/Menu/Menu";
import SettingsList from "./components/Settings/SettingsCommandsList";
import SearchBar from "./components/SearchBar/TopBar";

function App() {
	return (
		<Layout>
			<SearchBar/>
			<Menu/>
			<SettingsList/>
		</Layout>
	);
};

export default App;
