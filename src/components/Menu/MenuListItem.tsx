import {FC, ReactElement} from "react";

interface MenuItemProps {
  icon: ReactElement;
  name: String;
}

const MenuListItem: FC<MenuItemProps> = ({ name, icon }: MenuItemProps) => {
  return (
    <li className="my-1">
      {icon}&nbsp;&nbsp;
      {name}
    </li>
  );
};

export default MenuListItem;
