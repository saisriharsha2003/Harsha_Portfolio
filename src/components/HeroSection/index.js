import React from 'react';
import {
  HeroContainer,
  HeroInnerContainer,
  HeroContentContainer,
  Img,
  TextLoop,
  Title,
  Title1,
  Span,
  SubTitle,
  ResumeButton,
  CodingTitle
} from './HeroStyle';
import HeroImg from '../../images/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const HeroSection = () => {
  const theme = useTheme();

  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <Img src={HeroImg} alt="hero-image" />
          <HeroContentContainer>
            <Title>
              Hi, I am <br />
            </Title>
            <Title1><Span>{Bio.name}</Span></Title1>
            <TextLoop>
              <p style={{ color: theme }}>
                <CodingTitle>I am a</CodingTitle>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="_blank">
              <span style={{ color: 'white' }}>Check Resume</span>
            </ResumeButton>
          </HeroContentContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
