import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import { education } from '../Education/EducationData.js';
import EducationCard from './EducationCard';
import { Container, Header, Title, Description, TimelineWrapper, StyledTimelineDot, StyledTimelineConnector } from './EducationStyle';
import { styled } from '@mui/system';

const CustomTimelineItem = styled(TimelineItem)({
  '& .MuiTimelineDot-root': {
    marginLeft: 0, 
  },
  '&::before': {
    content: 'none', 
  },
});

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
            <CustomTimelineItem key={edu.id || index} position={'right'}>
              <TimelineSeparator>
                <StyledTimelineDot variant="outlined" />
                {index !== education.length - 1 && <StyledTimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <EducationCard education={edu} />
              </TimelineContent>
            </CustomTimelineItem>
          ))}
        </Timeline>
      </TimelineWrapper>
    </Container>
  );
};

export default EducationSection;
