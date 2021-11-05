import { FC } from "react";
import { SettingsCommandsItem } from "../../domain/SettingsCommandsItem";
import SettingsCommandsListItemCheckbox from "../Settings/SettingsCommandsListItemCheckbox";
import styled from "styled-components";

const SettingsCommandsListItemContainer = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const LibraryListItem: FC<SettingsCommandsItem> = ({
  title,
  command
}: SettingsCommandsItem) => {
  return (
    <SettingsCommandsListItemContainer className="is-flex is-justify-content-space-between is-align-items-center has-background-black-ter">
      <div>
        <h2 className="has-text-white">{title}</h2>
        <p className="is-size-7">{command}</p>
      </div>
      <SettingsCommandsListItemCheckbox/>
    </SettingsCommandsListItemContainer>
  );
};

export default LibraryListItem;
