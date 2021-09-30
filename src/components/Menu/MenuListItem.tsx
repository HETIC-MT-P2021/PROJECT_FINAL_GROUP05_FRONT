import {FC, ReactElement} from "react";

interface MenuItemProps {
  icon: ReactElement;
  name: String;
}

const MenuListItem: FC<MenuItemProps> = ({ name, icon }: MenuItemProps) => {
  return (
    <li className="my-1">
      <a href="#" className={"is-link"}>
      {icon}&nbsp;&nbsp;
      {name}
      </a>
    </li>
  );
};

export default MenuListItem;
