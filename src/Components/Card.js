import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  /* width: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: black; */

  width: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  /* box-shadow: 10px 12px 14px rgba(0, 0, 0, 0.1); */
  box-shadow: 3px 3px 8px -3px #000;

  background-color: rgba(255, 255, 255,.9); /* Slightly transparent */
  transition: background-color 0.3s, transform 0.3s;
  color: black;

  &:hover {
    background-color: #fff; /* Pure white on hover */
    transform: scale(1.05); /* Scale up on hover */
    box-shadow: 0 0 100px 0 #000;
  }
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;
  border-radius: 5px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  margin: 10px 0;
  color: black;
`;
const CardCategory = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  color: #555;
`;
const CardPrice = styled.p`
  font-size: 1.2rem;
  color: #de4242;
`;

const Card = ({ image, title, description, price, category }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardCategory>Category: {category}</CardCategory>
      <CardDescription>{description}</CardDescription>

      <CardPrice>${price}</CardPrice>
    </CardContainer>
  );
};

export default Card;
