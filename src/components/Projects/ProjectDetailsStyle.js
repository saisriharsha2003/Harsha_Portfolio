import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
`;

export const ModalContainer = styled(motion.div)`
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(145deg, #1c1c1c, #292929)"
      : "linear-gradient(145deg, #ffffff, #f3f3f3)"};
  color: white;
  width: 90%;
  max-width: 700px;
  max-height: 85vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 8px;
  box-sizing: content-box;
  border-radius: 15px;
  padding: 25px;
  position: relative;

  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0px 0px 20px rgba(255, 255, 255, 0.2)"
      : "0px 0px 20px rgba(0, 0, 0, 0.2)"};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ec008c;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    max-width: 95%;
    max-height: 80vh;
    padding: 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: #feb47b;
  font-size: 22px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ec008c;
  }
`;

export const ProjectImage = styled.img`
  width: 80%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 12px;
  margin: 15px auto;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
  display: block;
`;

export const ProjectContent = styled.div`
  padding: 15px 10px;
`;

export const ProjectTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  margin: 10px 0;
  text-decoration: none;
  text-shadow: 2px 2px 10px rgba(236, 0, 140, 0.5);
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
  background-size: 200% auto;
  animation: shine 3s linear infinite;

  @keyframes shine {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  text-align: justify;
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Tag = styled.span`
  background: linear-gradient(135deg, #ec008c, #fc6767);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  box-shadow: 0 2px 10px rgba(236, 0, 140, 0.5);
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
  flex-direction: ${({ isWebApp }) => (isWebApp ? "row" : "column")};

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Button = styled.a`
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
  box-shadow: 0 2px 10px rgba(236, 0, 140, 0.5);
  transition: transform 0.3s ease, background-color 0.3s ease;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "50%")};
  gap: 15px;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(-135deg, #ec008c, #fc6767);
    box-shadow: 0 2px 20px rgba(236, 0, 140, 0.5);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
