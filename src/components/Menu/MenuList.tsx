import {FC} from "react";
import MenuListItem from "./MenuListItem";
import MenuListTitle from "./MenuListTitle";
import { MenuItem } from "../../domain/MenuItem";

interface MenuListProps {
  items: Array<MenuItem>;
  title: string;
	url: string
}

const MenuList: FC<MenuListProps> = ({ items, title }: MenuListProps) => {
  return (
    <div>
      <MenuListTitle title={title} />
      <ul className="is-flex is-flex-direction-column is-flex-justify-content-center has-text-white">
        {items.map(item => {
          return <MenuListItem name={item.name} icon={item.icon} url={item.url}/>;
        })}
      </ul>
    </div>
  );
};

export default MenuList;
