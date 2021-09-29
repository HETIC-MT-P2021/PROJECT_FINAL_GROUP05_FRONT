import { FC } from "react";
import MenuListItem from "./MenuListItem";
import MenuListTitle from "./MenuListTitle";
import { MenuItem } from "../../domain/MenuItem";

interface MenuListProps {
  items: Array<MenuItem>;
  title: String;
}

const styles = {
  menuListContainer: {
    border: "5px solid red"
  }
};

const MenuList: FC<MenuListProps> = ({ items, title }: MenuListProps) => {
  return (
    <div className={`${styles.menuListContainer}`}>
      <MenuListTitle title={title} />
      <ul className="is-flex is-flex-direction-column is-flex-justify-content-center has-text-white">
        {items.map(item => {
          return <MenuListItem name={item.name} />;
        })}
      </ul>
    </div>
  );
};

export default MenuList;
