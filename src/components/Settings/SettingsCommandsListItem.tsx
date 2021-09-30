import { FC } from "react";
import { SettingsCommandsItem } from "../../domain/SettingsCommandsItem";

const SettingsCommandsListItem: FC<SettingsCommandsItem> = ({
  title,
  command
}: SettingsCommandsItem) => {
  return (
    <div className="has-background-grey-darker">
      <h2>{title}</h2>
      <p>{command}</p>
    </div>
  );
};

export default SettingsCommandsListItem;
