import { FC } from "react";
import SettingsCommandsTitle from "./LibraryTitle";
import SettingsCommandsListItem from "./LibraryListItem";
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
	margin-top: 10rem;
  border-radius: 10px;
`;

const SettingsCommandsListMainContainer = styled.div`
  margin-right: 5rem;
`;

const LibraryList: FC = () => {
  return (
		<SettingsCommandsListMainContainer className="column hero is-fullwidth is-flex is-align-items-end">
    <SettingsCommandsListContainer className="has-background-grey-darker column is-three-quarters">
      <SettingsCommandsTitle title="Visualisation des médias" />
      {settingsCommandsItems.map(item => {
        return (
          <SettingsCommandsListItem title={item.title} command={item.command} />
        );
      })}
    </SettingsCommandsListContainer>
		</SettingsCommandsListMainContainer>
  );
};

export default LibraryList;
