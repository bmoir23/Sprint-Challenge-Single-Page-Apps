import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle 
} from 'reactstrap';

// const CharacterCard = props => {
//   const { image, name, species, status} = props.character;
export default function CharacterCard(props){

  return  (
    <div>
    <Card>
      <CardImg top width="100%" src={props.image} alt="Image" />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>{props.species}</CardSubtitle>
        <CardText>{props.status}</CardText>
      </CardBody>
    </Card>
    </div>
  );
};

// export default CharacterCard;
