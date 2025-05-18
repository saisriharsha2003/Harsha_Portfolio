import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

export const ModalContainer = styled(motion.div)`
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(145deg, #1c1c1c, #292929)"
      : "linear-gradient(145deg, #ffffff, #f3f3f3)"};
  color: ${({ theme }) => theme.text_primary};
  width: 90%;
  max-width: 700px;
  max-height: 85vh;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: content-box;
  border-radius: 15px;
  padding: 25px;
  position: relative;
  box-shadow: 0px 0px 20px rgba(41, 182, 246, 0.5);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #4fc3f7;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 10px 0;
  }

  @media (max-width: 600px) {
    max-width: 95%;
    max-height: 80vh;
    padding: 20px;
    margin: 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: #003b64;
  font-size: 22px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #4fc3f7;
  }
`;

export const ProjectImage = styled.img`
  width: 80%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 12px;
  margin: 15px auto;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
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

  background: linear-gradient(135deg, #b3e5fc 0%, #81d4fa 35%, #4fc3f7 70%, #29b6f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  text-shadow: 0 0 10px rgba(41, 182, 246, 0.5);

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
  margin: 25px 0;
`;

export const Tag = styled.span`
  background: linear-gradient(135deg, #81d4fa, #29b6f6);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  box-shadow: 0 2px 10px rgba(41, 182, 246, 0.4);
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
  background: linear-gradient(135deg, #81d4fa, #29b6f6);
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease, background-color 0.3s ease;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "50%")};
  gap: 15px;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(-135deg, #29b6f6, #4fc3f7);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
