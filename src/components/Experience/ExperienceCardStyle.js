import styled, { keyframes } from 'styled-components';

const pulseGlow = (color) => keyframes`
  0% {
    box-shadow: 0 0 10px ${color};
  }
  50% {
    box-shadow: 0 0 15px ${color};
  }
  100% {
    box-shadow: 0 0 10px ${color};
  }
`;

export const Document = styled.img`
  display: none;
  height: 70px;
  width: auto;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

export const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 20px;
  padding: 16px 20px;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(145deg, #1c1c1c, #292929)"
      : "linear-gradient(145deg, #ffffff, #f3f3f3)"};

  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
  transition: all 0.3s ease;
  margin-bottom: 15px;

  animation: ${({ theme }) =>
    pulseGlow(theme.mode === 'dark' ? '#00bcd4' : '#00bfff')} 3s infinite alternate;

  &:hover {
    box-shadow: 0px 0px 40px ${({ theme }) => (theme.mode === 'dark' ? '#0d1b2a' : '#00bfff')};
  }

  &:hover ${Document} {
    display: block;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
`;


export const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

export const Image = styled.img`
  height: 60px;
  width: 140px;
  object-fit: cover;
  border-radius: 12px;
  background-color: #000;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Role = styled.div`
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #b3e5fc 0%, #81d4fa 35%, #4fc3f7 70%, #29b6f6 100%);
  -webkit-background-clip: text;
  color: transparent;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Skill = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: white;
  background: ${({ theme }) => (theme.mode === 'dark' ? '#333' : '#ff00b5')};
  padding: 6px 12px;
  border-radius: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
