import { FC } from "react";
import SettingsCommandsTitle from "./SettingsCommandsTitle";
import SettingsCommandsListItem from "./SettingsCommandsListItem";
import { SettingsCommandsItem } from "../../domain/SettingsCommandsItem";
import styled from "styled-components";

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

const SettingsCommandsListContainer = styled.div`
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  width: 100%;
`;

const SettingsCommandsList: FC = () => {
  return (
    <SettingsCommandsListContainer className="has-background-grey-darker">
      <SettingsCommandsTitle title="Gestion des commandes" />
      {settingsCommandsItems.map(item => {
        return (
          <SettingsCommandsListItem title={item.title} command={item.command} />
        );
      })}
    </SettingsCommandsListContainer>
  );
};

export default SettingsCommandsList;
