import styled, { keyframes } from 'styled-components';

const pulseGlow = (color) => keyframes`
  0% { box-shadow: 0 0 10px ${color}; }
  50% { box-shadow: 0 0 15px ${color}; }
  100% { box-shadow: 0 0 10px ${color}; }
`;

export const Button = styled.button`
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
    transform: translateY(-5px) scale(1.03);
    background: linear-gradient(to left, #00bfff, #0d1b2a);
  }

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const Card = styled.div`
  width: 350px;
  height: 420px;
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
  transition: all 0.4s ease-in-out;
  animation: ${({ theme }) =>
    pulseGlow(theme.mode === 'dark' ? '#00bcd4' : '#00bfff')} 3s infinite alternate;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0px 0px 30px ${({ theme }) => (theme.mode === 'dark' ? '#00bfff' : '#0d1b2a')};
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;

    ${Card}:hover & {
      transform: scale(1.05);
    }
  }

  @media (max-width: 600px) {
    height: 160px;
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
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

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Date = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 600px) {
    font-size: 11px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    font-size: 12px;
    -webkit-line-clamp: 3;
  }
`;

export const Span1 = styled.span`
  font-size: 16px;
  font-weight: 700;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)"
      : "linear-gradient(135deg, #b3e5fc 0%, #81d4fa 35%, #4fc3f7 70%, #29b6f6 100%)"};  
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

