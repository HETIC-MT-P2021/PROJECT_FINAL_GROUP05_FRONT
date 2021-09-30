import { FC } from "react";
import styled from "styled-components";

interface SettingsCommandsTitleProps {
  title: String;
}

const Title = styled.h1`
  margin-bottom: 10px;
`;

const SettingsCommandsTitle: FC<SettingsCommandsTitleProps> = ({
  title
}: SettingsCommandsTitleProps) => {
  return <Title className="has-text-white is-size-4">{title}</Title>;
};

export default SettingsCommandsTitle;
