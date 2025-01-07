import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.card_light};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 40px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  gap: 20px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 20px;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

export const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  max-width: 650px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  margin-top: 40px;
  padding: 20px;
  border-radius: 16px;
  background: ${({ theme }) => theme.card};
  
`;

const Skill = styled.div`
  width: 100%;
  max-width: 480px;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
    border: 2px solid ${({ theme }) => theme.text_primary}; 

  padding: 20px 30px;
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'rgba(0, 0, 0, 0.5) 0px 8px 24px'
      : 'rgba(23, 92, 230, 0.1) 0px 8px 24px'}; 
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(23, 92, 230, 0.3) 0px 8px 30px;
  }
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 15px 25px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

const SkillItem = styled.div`
  font-size: 18px;
  font-weight: 600;
  background: #ffffff;
  color: #000000;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 12px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 14px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

const SkillImage = styled.img`
  width: 26px;
  height: 26px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working on for the past 4 years.</Desc>
        <SkillsContainer>
          {skills.map((skill, skillIndex) => (
            <Skill key={skillIndex}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, itemIndex) => (
                  <SkillItem key={itemIndex}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
