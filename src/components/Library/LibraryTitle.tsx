import { FC } from "react";
import styled from "styled-components";

interface LibraryTitleProps {
  title: String;
}

const Title = styled.h1`
  margin-bottom: 10px;
`;

const LibraryTitle: FC<LibraryTitleProps> = ({
  title
}: LibraryTitleProps) => {
  return <Title className="has-text-white is-size-4">{title}</Title>;
};

export default LibraryTitle;
