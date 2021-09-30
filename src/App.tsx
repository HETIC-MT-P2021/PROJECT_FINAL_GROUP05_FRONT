import "./App.css";
import Layout from "./components/Layout";
import Menu from "./components/Menu/Menu";
import SearchBar from "./components/SearchBar/TopBar";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <Layout>
      <SearchBar/>
      <Menu />
    </Layout>
  );
}

export default App;
