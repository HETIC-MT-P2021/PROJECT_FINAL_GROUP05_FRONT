import { FC } from "react";
import Dropdown from "./Dropdown";
import MenuList from "./MenuList";
import { MenuItem } from "../../domain/MenuItem";

const mainMenuItems: Array<MenuItem> = [
  {
    name: "Tableau de bord"
  },
  {
    name: "Bibliothèques"
  },
  {
    name: "Réglages"
  },
  {
    name: "Premium"
  }
];

const featureMenuItems: Array<MenuItem> = [
  {
    name: "Audios"
  },
  {
    name: "Vidéos"
  },
  {
    name: "Images"
  },
  {
    name: "Avancée"
  }
];

const Menu: FC = () => {
  return (
    <div>
      <div className="columns">
        <div className="column is-one-fifth has-background-dark is-flex is-align-items-center is-flex-direction-column">
          <img src="assets/logo192.png" />
          <Dropdown />
          <MenuList items={mainMenuItems} title="" />
          <MenuList items={featureMenuItems} title="Fonctionnalités" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
