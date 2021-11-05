import "./App.css";
import Layout from "./components/Layout";
import Menu from "./components/Menu/Menu";
import SearchBar from "./components/SearchBar/TopBar"

function App() {

	return (
		<Layout>
			<SearchBar/>
			<Menu/>
		</Layout>
	);
};

export default App;

