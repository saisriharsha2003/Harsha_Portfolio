import styled from "styled-components";

export const HeroContainer = styled.div`
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

export const CodingTitle = styled.div`
  color: ${({ theme }) => theme.text_secondary};
`;

export const HeroInnerContainer = styled.div`
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

export const HeroContentContainer = styled.div`
  flex: 1;
  text-align: left;
  padding: 20px;
  background: ${({ theme }) => theme.card_light};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.mode === 'dark' ? '6px 4px 20px rgba(255, 255, 255, 0.2)' : '6px 4px 20px rgba(0, 0, 0, 0.1)'};

  &:hover {
    transform: translateY(-10px);
    transition: transform 0.3s ease;
  }

  @media (max-width: 960px) {
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: ${({ theme }) => theme.mode === 'dark' ? '6px 4px 30px rgba(255, 255, 255, 0.3)' : '6px 4px 30px rgba(0, 0, 0, 0.2)'};
`;

export const Title = styled.h1`
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

export const Title1 = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #e84393;
  -webkit-background-clip: text;
  margin-bottom: 20px;

  @media (max-width: 960px) {
    font-size: 36px;
  }

  @media (max-width: 640px) {
    font-size: 28px;
  }
`;

export const SubTitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 30px;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

export const ResumeButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  border-radius: 25px;
  background: linear-gradient(90deg, #ff7eb3, #ff758c);
  box-shadow: ${({ theme }) => theme.mode === 'dark' ? '6px 4px 20px rgba(255, 255, 255, 0.4)' : '6px 4px 20px rgba(255, 117, 140, 0.3)'};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.mode === 'dark' ? '6px 4px 30px rgba(255, 255, 255, 0.6)' : '6px 4px 30px rgba(255, 117, 140, 0.5)'};
  }

  @media (max-width: 640px) {
    padding: 12px 25px;
    font-size: 16px;
  }
`;

export const TextLoop = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #e84393;
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

export const Span = styled.span`
  color: rgb(232, 67, 147);
  cursor: pointer;
`;
