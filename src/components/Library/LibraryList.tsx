import { FC } from "react";
import LibraryTitle from "./LibraryTitle";
import LibraryListItem from "./LibraryListItem";
import ContentCard from "../ContentCard"
import styled from "styled-components";

const LibraryListContainer = styled.div`
  padding: 20px;
	margin-top: 10rem;
  border-radius: 10px;
`;

const SettingsCommandsListMainContainer = styled.div`
  margin-right: 5rem;
`;

const LibraryList: FC = () => {
  return (
    <ContentCard>
      <LibraryListContainer className={"has-background-grey-darker column is-three-quarters"}>
        <LibraryListItem>

        </LibraryListItem>
      </LibraryListContainer>
    </ContentCard>
  );
};

export default LibraryList;
