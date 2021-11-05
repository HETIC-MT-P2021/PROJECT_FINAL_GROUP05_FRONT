import {FC, ReactElement} from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  icon: ReactElement;
  name: string;
	url: string;
}

const MenuListItem: FC<MenuItemProps> = ({ name, icon, url }: MenuItemProps) => {
  return (
				<Link className={"is-link"} to={{
					pathname: url,
				}}>
					{icon}&nbsp;&nbsp;
					{name}
        </Link>
  );
};

export default MenuListItem;
