import { FC, useState } from "react";
import {FiChevronDown} from "react-icons/all";
import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 200px;
	justify-content: space-between;
`;

const Dropdown: FC = () => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <ButtonContainer className="is-pulled-right my-4 ml-3">
      <ButtonContainer
        className={`dropdown ${isOpen ? "is-active" : ""} is-normal is-fullwidth has-background-dark`}
      >
        <ButtonContainer className="dropdown-trigger">
          <ButtonContainer
            className="button has-background-black-ter"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={() => toggleOpen(!isOpen)}
          >
            <span className="has-text-white">Risitar</span>
            <span className="icon is-small">
              <FiChevronDown className={"icon is-medium has-text-white"}/>
            </span>
          </ButtonContainer>
        </ButtonContainer>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content has-background-black-ter">
            <a
              href="#"
              className="dropdown-item has-background-black-ter has-text-white"
              onClick={() => toggleOpen(!isOpen)}
            >
              Risitar
            </a>
            <a
              href="#"
              className="dropdown-item has-background-black-ter has-text-white"
              onClick={() => toggleOpen(!isOpen)}
            >
              Serveur 2
            </a>
          </div>
        </div>
      </ButtonContainer>
    </ButtonContainer>
  );
};

export default Dropdown;
