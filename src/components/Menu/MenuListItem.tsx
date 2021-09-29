import { FC } from "react";
import { FaClipboard } from "react-icons/fa";

interface MenuItemProps {
  name: String;
}

const MenuListItem: FC<MenuItemProps> = ({ name }: MenuItemProps) => {
  return (
    <li>
      <FaClipboard />
      {name}
    </li>
  );
};

export default MenuListItem;
