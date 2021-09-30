import "./App.css";
import Layout from "./components/Layout";
import Menu from "./components/Menu/Menu";
import SettingsList from "./components/Settings/SettingsCommandsList";

import "bulma/css/bulma.min.css";

function App() {
  return (
    <Layout>
      <Menu />
      <SettingsList />
    </Layout>
  );
}

export default App;
