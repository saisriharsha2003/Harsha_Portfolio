import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        I have worked on a wide range of projects. Below is a list of the projects I have worked on.        </Desc>
        <div className='p-15'></div>
        <CardContainer>
          {projects
            .map((project) => (
              <ProjectCard
                key={project.id || project.name} 
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
