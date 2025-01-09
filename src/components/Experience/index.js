import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

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
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  text-transform: uppercase;
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

const Experience = () => {
  return (
    <Container id="experience">
      <Header>
        <Title>Experience</Title>
        <Description>My journey as a Software Engineer, showcasing the key milestones and projects that have defined my career path.</Description>
      </Header>
      <TimelineWrapper>
        <Timeline position="right">
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id || index}>
              <TimelineSeparator>
                <StyledTimelineDot variant="outlined" />
                {index !== experiences.length - 1 && <StyledTimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <ExperienceCard experience={experience} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineWrapper>
    </Container>
  );
};

export default Experience;
