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

export const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, #b3e5fc 0%, #81d4fa 35%, #4fc3f7 70%, #29b6f6 100%);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: opacity 0.3s ease, transform 0.3s ease;
  margin-top: 16px;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    background: linear-gradient(to left, #00bfff, #0d1b2a);
  }

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const Card = styled.div`
  width: 340px;
  min-height: 440px;
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.card},
    ${({ theme }) => (theme.mode === "dark" ? "#1c1c1c" : "#ffffff")}
  );
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  overflow: hidden;

  transition: all 0.4s ease-in-out;
  animation: ${({ theme }) =>
    pulseGlow(theme.mode === 'dark' ? '#00bcd4' : '#00bfff')} 3s infinite alternate;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0px 0px 30px ${({ theme }) => (theme.mode === 'dark' ? '#00bfff' : '#0d1b2a')};
  }

  &:hover ${Button} {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    width: 90%;
    min-height: 400px;
    padding: 15px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 6px
    rgba(0, 0, 0, ${({ theme }) => (theme.mode === "dark" ? 0.3 : 0.15)});
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    ${Card}:hover & {
      transform: scale(1.1);
    }
  }

  @media (max-width: 600px) {
    height: 120px;
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)"
      : "linear-gradient(135deg, #b3e5fc 0%, #81d4fa 35%, #4fc3f7 70%, #29b6f6 100%)"};  
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Date = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    font-size: 12px;
    -webkit-line-clamp: 4;
  }
`;
