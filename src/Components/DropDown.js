import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Styles/globalStyles";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  margin: 1px;
  padding: 1px;
  list-style: none;
  box-shadow: 3px 3px 8px -3px #000;
  background: rgba(255, 255, 255, 0.9);
  color: #000;
  font-size: large;
  border: 3px solid #fff;
  border-radius: 5px;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: scaleY(${({ isOpen }) => (isOpen ? "1" : "0")});
  transform-origin: top;
  transition: opacity 0.3s, transform 0.3s;
  z-index: 1;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #de4242;
    color: #fff;
  }
`;

const DropDown = ({ options, onSelect ,BtnName}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
    
      <Button onClick={() => setIsOpen(!isOpen)} bg='#fff' h_bg='#de4242' c='#de4242' h_c='#fff'>{BtnName}</Button>

      <DropdownList isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default DropDown;
