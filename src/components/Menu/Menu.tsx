import { FC } from "react";
import Dropdown from "./Dropdown";
import MenuList from "./MenuList";
import { MenuItem } from "../../domain/MenuItem";
import styled from 'styled-components';
import {
  AiOutlineCrown,
  AiOutlineVideoCamera,
  BsImage,
  FiMusic,
  FiSettings,
  IoLibraryOutline,
  RiDashboardLine
} from "react-icons/all";

const MenuDiv = styled.div`
  z-index: 10!important;
  position: fixed;
`;

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
    icon: <AiOutlineCrown className={"has-text-warning"} />
  }
];

const Menu: FC = () => {
  return (
    <div className="columns">
      <MenuDiv className="column is-one-fifth">
        <div className="has-background-dark is-flex is-justify-content-start is-align-items-center is-flex-direction-column hero is-link is-fullheight">
          <img alt="logo" src="assets/logo192.png" />
          <Dropdown />
          <MenuList items={mainMenuItems} title="" />
          <MenuList items={featureMenuItems} title="Fonctionnalités" />
        </div>
      </MenuDiv>
    </div>
  );
};

export default Menu;
