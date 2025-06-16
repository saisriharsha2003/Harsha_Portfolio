import React from "react";
import { motion } from "framer-motion";
import {
  HeroContainer,
  HeroInnerContainer,
  HeroContentContainer,
  Img,
  TextLoop,
  Title,
  Title1,
  SubTitle,
  CodingTitle,
  ButtonGroup,
  HeroButton,
  GlowRing,

} from "./HeroStyle";
import HeroImg from "../../images/HeroImage.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../HeroSection/HeroSectionData.js";
import { useTheme } from "styled-components";
import { FaGithub } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  const theme = useTheme();

  return (
    <div id="about">
      <HeroContainer
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <HeroInnerContainer>
          <GlowRing />
          <Img
            as={motion.img}
            src={HeroImg}
            alt="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <HeroContentContainer>
            <Title as={motion.h1} variants={itemVariants}>
              Hi, I am <br />
            </Title>
            <Title1 as={motion.h1} variants={itemVariants}>
              {Bio.name}
            </Title1>
            <TextLoop as={motion.div} variants={itemVariants}>
              
                <CodingTitle>I am a</CodingTitle>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                    
                  }}
                />
              
            </TextLoop>

            <SubTitle as={motion.p} variants={itemVariants}>
              {Bio.description}
            </SubTitle>
            <ButtonGroup>
              <HeroButton
                as={motion.a}
                target="_blank"
                onClick={() => window.open(Bio.github, "_blank")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={25} />
                Github Profile
              </HeroButton>
              <HeroButton
                as={motion.a}
                href={Bio.resume}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MdDescription size={25} />
                Check Resume
              </HeroButton>
            </ButtonGroup>
          </HeroContentContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
