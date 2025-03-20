import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechTags,
  Tag,
  ButtonGroup,
  Button,
} from "./ProjectDetailsStyle";
import { FaGithub, FaTimes, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import { Modal } from "@mui/material";

const ProjectModal = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <ModalOverlay
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpenModal({ state: false, project: null })}
      >
        <ModalContainer
          as={motion.div}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton
            onClick={() => setOpenModal({ state: false, project: null })}
          >
            <FaTimes size={20} />
          </CloseButton>
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectContent>
            <ProjectTitle>{project.title}</ProjectTitle>
            <TechTags>
              {project.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TechTags>
            <ProjectDescription>{project.description}</ProjectDescription>

            <ButtonGroup isWebApp={project?.category === "web app"}>
              <Button
                href={project?.github}
                target="_blank"
                fullWidth={project?.category !== "web app"}
              >
                <FaGithub size={18} />
                View Code
              </Button>

              {project?.category === "web app" && (
                <Button href={project?.webapp} target="_blank">
                  <FaGlobe size={18} />
                  View Live App
                </Button>
              )}
            </ButtonGroup>
          </ProjectContent>
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  );
};

export default ProjectModal;
