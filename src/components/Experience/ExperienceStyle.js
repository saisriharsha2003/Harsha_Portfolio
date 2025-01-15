import styled from 'styled-components';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';

export const Container = styled.section`
  padding: 50px 15px;
  background-color: ${({ theme }) => theme.background_primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 700px;
  line-height: 1.8;
  margin: 0 auto;
`;

export const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

export const StyledTimelineDot = styled(TimelineDot)`
  &.MuiTimelineDot-outlined {
    border: 2px solid #ff7e5f;
    background-color: white;
  }
`;

export const StyledTimelineConnector = styled(TimelineConnector)`
  &.MuiTimelineConnector-root {
    width: 2px;
    background: linear-gradient(to bottom, #ff7e5f, #feb47b);
  }
`;