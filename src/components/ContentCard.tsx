import { FC } from "react";
import styled from "styled-components";

const SettingsCommandsListMainContainer = styled.div`
  padding-right: 5rem;
  height: 100%;
`

const ContentCard: FC = ({children}) => {
  return (
    <SettingsCommandsListMainContainer className="column hero is-fullwidth is-flex is-align-items-end has-background-grey-dark">
      {children}
    </SettingsCommandsListMainContainer>
  );
};

export default ContentCard