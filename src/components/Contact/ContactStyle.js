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

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 20px;
  position: relative;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  gap: 20px;
  padding: 40px;
  border-radius: 16px;
  animation: ${fadeIn} 1.2s ease-in-out;

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

export const ContactTitle = styled.h1`
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)"
      : "linear-gradient(135deg, #b3e5fc 0%, #81d4fa 35%, #4fc3f7 70%, #29b6f6 100%)"}; 
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const ContactDesc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 90%;
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(145deg, #1c1c1c, #292929)"
      : "linear-gradient(145deg, #ffffff, #f3f3f3)"};
  border-radius: 16px;
  transition: all 0.3s ease;
  margin-bottom: 15px;

  animation: ${({ theme }) =>
    pulseGlow(theme.mode === 'dark' ? '#00bcd4' : '#00bfff')} 3s infinite alternate;

  &:hover {
    transform: translateY(10px);
    box-shadow: 0px 0px 30px
      ${({ theme }) => (theme.mode === "dark" ? "#0d1b2a" : "#00bfff")};
    
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 16px;
  width: 100%;
  animation: ${fadeIn} 1.2s ease-in-out;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px) scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ContactFormTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  font-size: 16px;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;

export const ContactInputMessage = styled.textarea`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  resize: none;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;

export const ContactButton = styled.input`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(135deg, #b3e5fc 0%, #81d4fa 35%, #4fc3f7 70%, #29b6f6 100%);

  
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  padding: 14px 18px;
  margin-top: 8px;
  border-radius: 12px;
  border: none;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px
      ${({ theme }) => (theme.mode === "dark" ? "#0d1b2a" : "#00bfff")};
    
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
  }
`;
