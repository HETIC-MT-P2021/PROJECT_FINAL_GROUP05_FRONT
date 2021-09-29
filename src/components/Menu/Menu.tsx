import { FC } from "react";
import Dropdown from "./Dropdown";
import MenuList from "./MenuList";
import { MenuItem } from "../../domain/MenuItem";
import { RiDashboardLine } from "react-icons/ri";
import {
  AiOutlineCrown,
  AiOutlineVideoCamera,
  BsImage,
  FiChevronsRight,
  FiMusic,
  FiSettings,
  IoLibraryOutline
} from "react-icons/all";

const mainMenuItems: Array<MenuItem> = [
  {
    name: "Tableau de bord",
    icon: <RiDashboardLine />
  },
  {
    name: "Bibliothèques",
    icon: <IoLibraryOutline />
  },
  {
    name: "Réglages",
    icon: <FiSettings />
  },
  {
    name: "Premium",
    icon: <AiOutlineCrown className={"has-text-warning"}/>
  }
];

const featureMenuItems: Array<MenuItem> = [
  {
    name: "Audios",
    icon: <FiMusic />
  },
  {
    name: "Vidéos",
    icon: <AiOutlineVideoCamera />
  },
  {
    name: "Images",
    icon: <BsImage />
  },
  {
    name: "Avancé",
    icon: <FiChevronsRight className={"has-text-warning"} />
  }
];

const Menu: FC = () => {
  return (
    <div>
      <div className="columns">
        <div className="column is-one-fifth has-background-dark is-flex is-justify-content-start   is-align-items-center is-flex-direction-column hero is-link is-fullheight">
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
