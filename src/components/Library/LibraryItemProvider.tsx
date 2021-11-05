import { FC } from "react";
import { Media } from "../../domain/LibraryItem";
import SettingsCommandsListItemCheckbox from "../Settings/SettingsCommandsListItemCheckbox";
import styled from "styled-components";

const MediaCard = styled.div`
  min-height: 10vh;
  border-radius: 20px;
  max-width: 20vw;
`

const LibraryItemProvider: FC<Media> = (media) => {
  return (
    <MediaCard className={"column m-3 has-background-black-ter is-one-third has-text-centered"}>
      <img src={"https://via.placeholder.com/150"}/>
      <h2 className="has-text-white">{media.author}</h2>
      <p className="is-size-7">{media.url}</p>
    </MediaCard>
  );
};

export default LibraryItemProvider;