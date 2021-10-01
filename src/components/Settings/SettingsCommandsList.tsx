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
	margin-top: 6rem;
  border-radius: 10px;
`;

const SettingsCommandsList: FC = () => {
  return (
		<div className="column hero is-fullwidth is-flex is-align-items-end">
    <SettingsCommandsListContainer className="has-background-grey-darker column is-four-fifths">
      <SettingsCommandsTitle title="Gestion des commandes" />
      {settingsCommandsItems.map(item => {
        return (
          <SettingsCommandsListItem title={item.title} command={item.command} />
        );
      })}
    </SettingsCommandsListContainer>
		</div>
  );
};

export default SettingsCommandsList;