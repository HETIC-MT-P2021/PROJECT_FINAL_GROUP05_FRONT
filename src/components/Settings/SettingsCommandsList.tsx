import { FC } from "react";
import SettingsCommandsTitle from "./SettingsCommandsTitle";
import SettingsCommandsListItem from "./SettingsCommandsListItem";
import { SettingsCommandsItem } from "../../domain/SettingsCommandsItem";

const settingsCommandsItems: Array<SettingsCommandsItem> = [
  {
    title: "Extrait audio",
    command: '$ -audio -s X -d Y -i "input"'
  },
  {
    title: "Extrait audio",
    command: '$ -audio -s X -d Y -i "input"'
  }
];

const SettingsCommandsList: FC = () => {
  return (
    <div>
      <SettingsCommandsTitle title="Gestion des commandes" />
      {settingsCommandsItems.map(item => {
        return (
          <SettingsCommandsListItem title={item.title} command={item.command} />
        );
      })}
    </div>
  );
};

export default SettingsCommandsList;
