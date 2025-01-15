import React from 'react';
import {Card, ImageWrapper, Details, Title, Date, Description, Button} from './ProjectCardsStyle';

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project })}>
      <ImageWrapper>
        <img src={project.image} alt={project.title} />
      </ImageWrapper>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Button>View Details</Button>
    </Card>
  );
};

export default ProjectCards;
