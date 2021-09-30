import { FC } from "react";

interface MenuListTitleProps {
  title: String;
}

const MenuListTitle: FC<MenuListTitleProps> = ({
  title
}: MenuListTitleProps) => {
  return (
    <>
      <h2 className={"mt-4 mb-2 is-size-5 has-text-weight-semibold"}>{title}</h2>
    </>
  );
};

export default MenuListTitle;
