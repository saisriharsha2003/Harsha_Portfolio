import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.section`
  padding: 50px 15px;
  background-color: ${({ theme }) => theme.background_primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 10px;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 2px;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 700px;
  line-height: 1.8;
  margin: 0 auto;
`;

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

const StyledTimelineDot = styled(TimelineDot)`
  &.MuiTimelineDot-outlined {
    border: 2px solid #ff7e5f;
    background-color: white;
  }
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  &.MuiTimelineConnector-root {
    width: 2px;
    background: linear-gradient(to bottom, #ff7e5f, #feb47b);
  }
`;

const EducationSection = () => {
  return (
    <Container id="education">
      <Header>
        <Title>Education</Title>
        <Description>
          My educational journey has been a transformative experience. Here are the milestones of my academic achievements.
        </Description>
      </Header>
      <TimelineWrapper>
        <Timeline>
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.id || index}
              position={'right'} 
            >
              <TimelineSeparator>
                <StyledTimelineDot variant="outlined" />
                {index !== education.length - 1 && <StyledTimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <EducationCard education={edu} /> 
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineWrapper>
    </Container>
  );
};

export default EducationSection;
