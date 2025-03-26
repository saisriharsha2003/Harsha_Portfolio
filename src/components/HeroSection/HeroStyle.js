import styled from "styled-components";
import { motion } from "framer-motion";

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
  margin: 20px;
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
  margin: 20px;

  @media (max-width: 960px) {
    font-size: 36px;
  }

  @media (max-width: 640px) {
    font-size: 28px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Title1 = styled(motion.h1)`
  font-size: 48px;
  font-weight: bold;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
  margin: 20px;

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
  margin: 20px;

  @media (max-width: 960px) {
    font-size: 16px;
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
  font-size: 24px;
  font-weight: 700;
  color: #ff00b7;
  animation: bounce 2s infinite;
  margin: 20px;

  @keyframes bounce {
    0%,
    100% {
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
