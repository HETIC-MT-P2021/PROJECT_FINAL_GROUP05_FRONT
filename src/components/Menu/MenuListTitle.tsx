import { FC } from "react";

interface MenuListTitleProps {
  title: String;
}

const MenuListTitle: FC<MenuListTitleProps> = ({
  title
}: MenuListTitleProps) => {
  return (
    <>
      <h2>{title}</h2>
    </>
  );
};

export default MenuListTitle;
