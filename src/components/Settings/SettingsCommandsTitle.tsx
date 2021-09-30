import { FC } from "react";

interface SettingsCommandsTitleProps {
  title: String;
}

const SettingsCommandsTitle: FC<SettingsCommandsTitleProps> = ({
  title
}: SettingsCommandsTitleProps) => {
  return <h1 className="has-text-white is-size-4">{title}</h1>;
};

export default SettingsCommandsTitle;
