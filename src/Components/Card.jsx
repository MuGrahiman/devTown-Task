import React from "react";
import {
  CardContainer,
  CardImage,
  CardTitle,
  CardDescription,
  CardCategory,
  CardPrice,
} from "../Styles/cardStyle.js";

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
