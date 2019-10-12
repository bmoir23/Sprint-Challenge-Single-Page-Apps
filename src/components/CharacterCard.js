import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const CharacterCard = props => {
  const { image, name, species, status} = props.character;
  return  (
    <Card>
      <CardImg top width="20%" src={image} alt="Image" />
      <CardBody>
        <CardTitle>*Burp*Name: {name}</CardTitle>
        <CardSubtitle>Species: {species}</CardSubtitle>
        <CardText>Dat Status: {status}</CardText>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
