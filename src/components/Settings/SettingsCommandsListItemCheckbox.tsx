import { FC } from "react";
import styled from "styled-components";

const activeCheckboxColor = "#27ae60"; //green

const isActiveCheckbox = false;

const Slide = styled.div`
  width: 80px;
  height: 26px;
  background: #333;
  position: relative;
  border-radius: 50px;
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5),
    0px 1px 0px rgba(255, 255, 255, 0.2);
  &:after {
    content: "OFF";
    color: #000;
    position: absolute;
    right: 10px;
    z-index: 0;
    font: 12px/26px Arial, sans-serif;
    font-weight: bold;
    text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.15);
  }
  &:before {
    content: "ON";
    color: ${activeCheckboxColor};
    position: absolute;
    left: 10px;
    z-index: 0;
    font: 12px/26px Arial, sans-serif;
    font-weight: bold;
  }
`;

const Label = styled.label`
  display: block;
  width: 34px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 3px;
  left: ${isActiveCheckbox ? "43px" : "3px"};
  z-index: 1;
  background: #fcfff4;
  border-radius: 50px;
  transition: all 0.4s ease;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  visibility: hidden;
  &:checked + label {
    left: ${isActiveCheckbox ? "3px" : "43px"};
  }
`;

const SettingsCommandsListItemCheckbox: FC = () => {
  return (
    <Slide>
      <Input type="checkbox" id="slide" />
      <Label htmlFor="slide"></Label>
    </Slide>
  );
};

export default SettingsCommandsListItemCheckbox;
