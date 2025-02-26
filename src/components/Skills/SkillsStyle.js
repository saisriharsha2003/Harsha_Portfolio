import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.background};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 60px 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 30px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

export const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  padding: 30px;
`;

export const Skill = styled.div`
  width: 100%;
  max-width: 380px;
  background: ${({ theme }) => theme.card};
  padding: 25px 20px;
  transition: all 0.4s ease;
  border: 2px solid ${({ theme }) => (theme.mode === 'dark' ? '#ff7e5f' : '#feb47b')};
  border-radius: 36px;
  box-shadow: ${({ theme }) =>
  theme.mode === 'dark'
    ? '0px 0px 20px rgba(255, 255, 255, 0.2)'
    : '0px 0px 20px rgba(0, 0, 0, 0.2)'};

  transform: scale(1);
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0px 0px 30px rgba(255, 255, 255, 0.3)'
        : '0px 0px 30px rgba(0, 0, 0, 0.3)'};
    border-color: ${({ theme }) => (theme.mode === 'dark' ? '#feb47b' : '#ff7e5f')};
  }
  @media (max-width: 768px) {
    max-width: 320px;
    padding: 20px 16px;
  }
`;

export const SkillTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 16px;
  text-align: center;
`;

export const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(to right, #ffffff, #f7f7f7);
  color: #444;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 2px solid ${({ theme }) => (theme.mode === 'dark' ? '#ff7e5f' : '#feb47b')};
  border-radius: 16px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-12px) scale(1.02);
    cursor: pointer;
    border-color: ${({ theme }) => (theme.mode === 'dark' ? '#feb47b' : '#ff7e5f')};
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`;

export const SkillImage = styled.img`
  width: 30px;
  height: 30px;
`;
