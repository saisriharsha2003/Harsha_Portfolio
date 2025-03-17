import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled(motion.div)`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 50px;
  position: relative;
  border-radius: 20px;

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
  max-width: 1200px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroContentContainer = styled(motion.div)`
  flex: 1;
  text-align: left;
  padding: 20px;
  border-radius: 20px;
  margin-right: 20px;
  animation: pulseGlowHeroC 3s infinite alternate;

  @keyframes pulseGlowHeroC {
    0% {
      box-shadow: 0 0 15px
        ${({ theme }) => (theme.mode === "dark" ? "#feb47b" : "#ff7e5f")};
    }
    50% {
      box-shadow: 0 0 20px
        ${({ theme }) => (theme.mode === "dark" ? "#feb47b" : "#ff7e5f")};
    }
    100% {
      box-shadow: 0 0 15px
        ${({ theme }) => (theme.mode === "dark" ? "#feb47b" : "#ff7e5f")};
    }
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 30px
      ${({ theme }) => (theme.mode === "dark" ? "#feb47b" : "#ff7e5f")};
    border-color: ${({ theme }) =>
      theme.mode === "dark" ? "#feb47b" : "#ff7e5f"};
  }

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
  animation: pulseGlowHero 3s infinite alternate;

  @keyframes pulseGlowHero {
    0% {
      box-shadow: 0 0 10px
        ${({ theme }) => (theme.mode === "dark" ? "#feb47b" : "#ff7e5f")};
    }
    50% {
      box-shadow: 0 0 15px
        ${({ theme }) => (theme.mode === "dark" ? "#feb47b" : "#ff7e5f")};
    }
    100% {
      box-shadow: 0 0 10px
        ${({ theme }) => (theme.mode === "dark" ? "#feb47b" : "#ff7e5f")};
    }
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 30px
      ${({ theme }) => (theme.mode === "dark" ? "#feb47b" : "#ff7e5f")};
    border-color: ${({ theme }) =>
      theme.mode === "dark" ? "#feb47b" : "#ff7e5f"};
  }
`;

export const Title = styled(motion.h1)`
  font-size: 48px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_secondary};
  -webkit-background-clip: text;
  margin-bottom: 20px;

  @media (max-width: 960px) {
    font-size: 36px;
  }

  @media (max-width: 640px) {
    font-size: 28px;
  }
`;

export const Title1 = styled(motion.h1)`
  font-size: 48px;
  font-weight: bold;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 20px;

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
  line-height: 1.6;
  margin-bottom: 30px;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

export const ResumeButton = styled(motion.a)`
  display: inline-block;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  border-radius: 25px;
  background: linear-gradient(90deg, #ff7eb3, #ff758c);
  box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0px 0px 10px rgba(255, 255, 255, 0.4)' : '0px 0px 10px rgba(1, 1, 1, 0.3)'};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0px 0px 20px rgba(255, 255, 255, 0.6)' : '0px 0px 20px rgba(1, 1, 1, 0.5)'};
  }

  @media (max-width: 640px) {
    padding: 12px 25px;
    font-size: 16px;
  }
`;

export const TextLoop = styled(motion.div)`
  font-size: 24px;
  font-weight: 700;
  color: #ff00b7;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

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
