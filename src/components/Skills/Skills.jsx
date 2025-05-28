import React, { useEffect, useRef, useState } from "react";
import { skills } from "../Skills/SkillsData.js";
import { motion, useAnimation } from "framer-motion";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  SkillsContainer,
  Skill,
  SkillTitle,
  SkillList,
  SkillItem,
  SkillImage,
} from "./SkillsStyle";

// Helper: chunk the array into groups of n items
function chunkArray(array, chunkSize) {
  const results = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
}

// Animated row component
const AnimatedCategoryRow = ({ row }) => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
          });
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
      }}
    >
      {row.map((category, index) => (
        <Skill key={index}>
          <SkillTitle>{category.title}</SkillTitle>
          <SkillList>
            {category.skills.map((item, idx) => (
              <SkillItem key={idx}>
                <SkillImage src={item.image} alt={item.name} />
                {item.name}
              </SkillItem>
            ))}
          </SkillList>
        </Skill>
      ))}
    </motion.div>
  );
};

const Skills = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkSize = isLargeScreen ? 2 : 1;
  const rows = chunkArray(skills, chunkSize);

  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working on for the past few years.</Desc>
        <SkillsContainer>
          {rows.map((row, index) => (
            <AnimatedCategoryRow key={index} row={row} />
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
