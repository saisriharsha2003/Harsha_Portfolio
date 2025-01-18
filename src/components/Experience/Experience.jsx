import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../Experience/ExperienceData.js';
import { Container, Header, Title, Description, TimelineWrapper, StyledTimelineDot, StyledTimelineConnector } from './ExperienceStyle';
import { styled } from '@mui/system';

const CustomTimelineItem = styled(TimelineItem)({
  '& .MuiTimelineDot-root': {
    marginLeft: 0,
  },
  '&::before': {
    content: 'none', 
  },
});

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
            <CustomTimelineItem key={experience.id || index}>
              <TimelineSeparator>
                <StyledTimelineDot variant="outlined" />
                {index !== experiences.length - 1 && <StyledTimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <ExperienceCard experience={experience} />
              </TimelineContent>
            </CustomTimelineItem>
          ))}
        </Timeline>
      </TimelineWrapper>
    </Container>
  );
};

export default Experience;
