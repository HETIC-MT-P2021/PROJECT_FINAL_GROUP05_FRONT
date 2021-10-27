import { FC } from "react";
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
    icon: <RiDashboardLine />,
		url: "dashboard"
  },
  {
    name: "Bibliothèque",
    icon: <IoLibraryOutline />,
		url: "library"
  },
  {
    name: "Réglages",
    icon: <FiSettings />,
		url: "settings"
  },
  {
    name: "Premium",
    icon: <AiOutlineCrown className={"has-text-warning"} />,
		url: "premium"
  }
];

const featureMenuItems: Array<MenuItem> = [
  {
    name: "Audios",
    icon: <FiMusic />,
		url: "audios"
  },
  {
    name: "Vidéos",
    icon: <AiOutlineVideoCamera />,
		url: "videos"
  },
  {
    name: "Images",
    icon: <BsImage />,
		url: "pictures"
  },
  {
    name: "Avancé",
    icon: <AiOutlineCrown className={"has-text-warning"} />,
		url: "more"
  }
];

const Menu: FC = () => {
  return (
    <div className="columns">
      <MenuDiv className="column is-one-fifth">
        <div className="has-background-dark is-flex is-justify-content-start is-align-items-center is-flex-direction-column hero is-link is-fullheight">
          <img alt="logo" src="assets/logo192.png" />
          <MenuList items={mainMenuItems} title="" url=""/>
          <MenuList items={featureMenuItems} title="Fonctionnalités" url=""/>
					<div className="is is-justify-content-end">Se déconnecter</div>
        </div>
      </MenuDiv>
    </div>
  );
};

export default Menu;
