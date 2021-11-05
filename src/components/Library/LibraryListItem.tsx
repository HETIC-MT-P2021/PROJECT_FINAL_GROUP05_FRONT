import { FC } from "react";
import styled from "styled-components";
import LibraryItemProvider from "./LibraryItemProvider";

const LibraryListItemContainer = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const media = {
  author: "JBleBoss",
  url: "media.png",
}

const LibraryListItem: FC = ({}) => {
  return (
    <LibraryListItemContainer className="columns is-">
      <div className={"columns is-desktop is-vcentered is-flex is-justify-content-space-around is-flex-direction-row is-flex-wrap-wrap"}>
        <LibraryItemProvider url={media.url} author={media.author}/>
        <LibraryItemProvider url={media.url} author={media.author}/>
        <LibraryItemProvider url={media.url} author={media.author}/>
        <LibraryItemProvider url={media.url} author={media.author}/>
        <LibraryItemProvider url={media.url} author={media.author}/>
        <LibraryItemProvider url={media.url} author={media.author}/>
        <LibraryItemProvider url={media.url} author={media.author}/>
        <LibraryItemProvider url={media.url} author={media.author}/>
        <LibraryItemProvider url={media.url} author={media.author}/>
        <LibraryItemProvider url={media.url} author={media.author}/>
      </div>
    </LibraryListItemContainer>
  );
};

export default LibraryListItem;
