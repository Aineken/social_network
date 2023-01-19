import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
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
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const onPointerMove = (value) => console.log(value);

  return (
    <Card>
      <CardImg src={image} alt="img" />
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <CardInfo>{author}</CardInfo>
      <Rating
        onClick={handleRating}
        onPointerMove={onPointerMove}
        size={25}
        initialValue={4}
      />
      <CardButtons>
        <CardButton>Free Course</CardButton>
      </CardButtons>
    </Card>
  );
}

export default CardContainer;
