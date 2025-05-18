import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 10px;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)"
      : "linear-gradient(135deg, #b3e5fc 0%, #81d4fa 35%, #4fc3f7 70%, #29b6f6 100%)"};
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ExperienceDescription = styled.p`
  font-size: 20px;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  }
`;

