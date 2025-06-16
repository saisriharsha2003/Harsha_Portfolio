import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const pulseGlow = (color) => keyframes`
  0% { box-shadow: 0 0 10px ${color}; }
  50% { box-shadow: 0 0 20px ${color}; }
  100% { box-shadow: 0 0 10px ${color}; }
`;

export const HeroContainer = styled(motion.div)`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 50px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 960px) {
    padding: 70px 20px;
  }

  @media (max-width: 640px) {
    padding: 50px 15px;
  }
`;

export const HeroInnerContainer = styled(motion.div)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  z-index: 1;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroContentContainer = styled(motion.div)`
  flex: 1;
  text-align: center;
  padding: 20px;
  border-radius: 20px;
  margin: 20px;

  @media (max-width: 960px) {
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const Img = styled(motion.img)`
  max-width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;

  animation:
    ${({ theme }) => pulseGlow(theme.mode === 'dark' ? '#00bcd4' : '#00bfff')} 3s infinite alternate;
  box-shadow: 0 0 10px ${({ theme }) => (theme.mode === 'dark' ? '#00bcd4' : '#0072ff')};

  &:hover {
    transform: translate(10px);
    cursor: pointer;
    box-shadow: 0px 0px 30px
      ${({ theme }) => (theme.mode === "dark" ? "#0d1b2a" : "#00bfff")};
  }
`;

export const GlowRing = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, #00bcd4 20%, transparent 60%);
  animation: ${({ theme }) => pulseGlow('#00bcd4')} 3s infinite alternate;
  z-index: 1;
`;

export const Title = styled(motion.h1)`
  font-size: 50px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_secondary};
  margin: 20px;

  @media (max-width: 960px) {
    font-size: 36px;
  }

  @media (max-width: 640px) {
    font-size: 28px;
  }
`;

export const Title1 = styled(motion.h1)`
  position: relative;
  font-size: 50px;
  font-weight: bold;
  background: ${({ theme }) =>
      theme.mode === "light"
        ? "linear-gradient(135deg, #00c6ff, #0072ff)"
        : "linear-gradient(135deg, #b3e5fc, #29b6f6)"};  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  background-size: 200% auto;
  margin: 20px;
  z-index: 1;

  @media (max-width: 960px) {
    font-size: 36px;
  }

  @media (max-width: 640px) {
    font-size: 28px;
  }

`;

export const SubTitle = styled(motion.p)`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  text-align: justify;
  max-width: 800px;
  margin: 20px;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const HeroButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
  padding: 12px 18px;
  border-radius: 20px;
  background: linear-gradient(135deg, #ec008c, #fc6767);
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0px 0px 20px rgba(236, 0, 140, 0.5);
  transition: transform 0.3s ease, background-color 0.3s ease;
  width: 45%;
  gap: 15px;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(-135deg, #ec008c, #fc6767);
    box-shadow: 0px 0px 30px rgba(236, 0, 140, 0.5);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const TextLoop = styled(motion.div)`
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 700;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "linear-gradient(135deg, #00c6ff, #0072ff)"
      : "linear-gradient(135deg, #b3e5fc, #29b6f6)"};
  -webkit-background-clip: text;
  color: transparent;
  margin: 20px;
  background-size: 200% auto;

  @media (max-width: 960px) {
    font-size: 20px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

export const CodingTitle = styled(motion.div)`
  color: ${({ theme }) => theme.text_secondary};
`;

export const Span = styled(motion.span)`
  color: rgb(232, 67, 147);
  cursor: pointer;
`;
