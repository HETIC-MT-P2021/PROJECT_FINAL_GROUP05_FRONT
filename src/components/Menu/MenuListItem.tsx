import {FC, ReactElement} from "react";
import {
	BrowserRouter as Router,
	Link
} from "react-router-dom";

interface MenuItemProps {
  icon: ReactElement;
  name: string;
	url: string;
}

const MenuListItem: FC<MenuItemProps> = ({ name, icon, url }: MenuItemProps) => {
  return (
			<Router>
				<Link className={"is-link"} to={{
					pathname: url,
				}}>
					{icon}&nbsp;&nbsp;
					{name}
				</Link>
			</Router>
  );
};

export default MenuListItem;
