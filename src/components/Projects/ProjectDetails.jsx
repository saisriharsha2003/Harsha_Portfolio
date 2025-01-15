import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';
import { Button, ButtonGroup, Container, Date, Desc, Image, Tag, Tags, Title, Wrapper } from './ProjectDetailsStyle';

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: 'absolute',
              top: '10px',
              right: '20px',
              cursor: 'pointer',
              fontSize: '28px',
              color: '#ec008c',
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} alt={project?.title} />
          <Title>{project?.title}</Title>
          <Date>{project?.date}</Date>
          <Tags>
            {project?.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          <ButtonGroup>
            <Button href={project?.github} target="_blank">View Code</Button>
            {project?.category === 'web app' && (
              <Button href={project?.webapp} target="_blank">View Live App</Button>
            )}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;
