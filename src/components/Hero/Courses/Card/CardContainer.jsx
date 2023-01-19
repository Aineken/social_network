import React from "react";
import {
  Card,
  CardButton,
  CardButtons,
  CardImg,
  CardInfo,
  CardText,
  CardTitle,
} from "./CardContainerStyled";

function CardContainer({ title, text, author, image }) {
  return (
    <Card>
      <CardImg src={image} alt="img" />
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <CardInfo>{author}</CardInfo>
      <CardInfo>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</CardInfo>
      <CardButtons>
        <CardButton>Free Course</CardButton>
      </CardButtons>
    </Card>
  );
}

export default CardContainer;
