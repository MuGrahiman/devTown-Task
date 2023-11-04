import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 3px 3px 8px -3px #000;

  background-color: rgba(255, 255, 255, 0.9);
  transition: background-color 0.3s, transform 0.3s;
  color: black;

  &:hover {
    background-color: #fff;
    transform: scale(1.05);
    box-shadow: 0 0 100px 0 #000;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;
  border-radius: 5px;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  margin: 10px 0;
  color: black;
`;
export const CardCategory = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  color: #555;
`;
export const CardPrice = styled.p`
  font-size: 1.2rem;
  color: #de4242;
`;
