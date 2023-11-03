import React from "react";
import styled from "styled-components";

const SelectedOptionsContainer = styled.div`
  border: 3px solid #fff;
  border-radius: 5px;
  display: flex;
  margin: 1rem auto;
  padding: 10px;
  overflow-x: auto;
  max-width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Pill = styled.div`
  background: #fff;
  color: #de4242;
  border: 2px solid #de4242;
  border-radius: 20px;
  padding: 5px 15px;
  margin: 5px;
  display: flex;
  align-items: center;

  &:hover {
    background: #de4242;
    color: #fff;
  }
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
`;

const SelectedOptions = ({ selectedOptions, onOptionDelete }) => {
  return (
    <SelectedOptionsContainer>
      {selectedOptions.map((option, index) => (
        <Pill key={index}>
          {option}
          <DeleteButton onClick={() => onOptionDelete(option)}>
            <i className="fas fa-times"></i>{" "}
          </DeleteButton>
        </Pill>
      ))}
    </SelectedOptionsContainer>
  );
};

export default SelectedOptions;
