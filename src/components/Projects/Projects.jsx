import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCards";
import { projects } from "../Projects/ProjectsData.js";
import { Container, Wrapper, Title, Desc, CardContainer } from "./ProjectsStyle";
import { motion, useAnimation } from "framer-motion";

function chunkArray(array, chunkSize) {
  const results = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
}

const AnimatedProjectRow = ({ row, openModal, setOpenModal }) => {
  const controls = useAnimation();
  const ref = useRef();

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
        } else {
          controls.start({ opacity: 0, y: 60, transition: { duration: 0.6, ease: "easeIn" } });
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        marginBottom: "2rem",
        paddingLeft: isLargeScreen ? 0 : "1rem",
        paddingRight: isLargeScreen ? 0 : "1rem",
        justifyContent: isLargeScreen ? "flex-start" : "center",
      }}
    >
      {row.map((project, idx) => (
        <ProjectCard
          key={project.id || idx}
          project={project}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      ))}
    </motion.div>
  );
};

const Projects = ({ openModal, setOpenModal }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkSize = isLargeScreen ? 3 : 1;
  const rows = chunkArray(projects, chunkSize);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Below is a list of the projects I have worked on.
        </Desc>
        <div className="p-15"></div>
        {rows.map((row, index) => (
          <AnimatedProjectRow
            key={index}
            row={row}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Projects;
