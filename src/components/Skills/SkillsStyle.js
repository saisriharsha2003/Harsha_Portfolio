import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 100px 40px;
  overflow: hidden;
  background: ${({ theme }) => theme.background};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 50px;
  animation: ${fadeInUp} 1s ease-out;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(270deg, #ff7e5f, #feb47b, #ff7e5f);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${gradientAnimation} 4s infinite linear;
`;

export const Desc = styled.p`
  font-size: 22px;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  animation: ${fadeInUp} 1.5s ease-out;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 40px;
`;

export const Skill = styled.div`
  width: 100%;
  max-width: 400px;
  background: ${({ theme }) => theme.card};
  padding: 30px 25px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => (theme.mode === 'light' ? '#feb47b' : '#ff7e5f')};
  box-shadow: 0px 0px 10px ${({ theme }) => (theme.mode === 'light' ? '#feb47b' : '#ff7e5f')};
  transition: all 0.4s ease-in-out;
  animation: pulseGlowSkill 3s infinite alternate;

  @keyframes pulseGlowSkill {
    0% { box-shadow: 0 0 10px ${({ theme }) => (theme.mode === 'dark' ? '#feb47b' : '#ff7e5f')}; }
    50% { box-shadow: 0 0 20px ${({ theme }) => (theme.mode === 'dark' ? '#feb47b' : '#ff7e5f')}; }
    100% { box-shadow: 0 0 10px ${({ theme }) => (theme.mode === 'dark' ? '#feb47b' : '#ff7e5f')}; }
  }

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0px 0px 30px ${({ theme }) => (theme.mode === 'dark' ? '#feb47b' : '#ff7e5f')};
    border-color: ${({ theme }) => (theme.mode === 'dark' ? '#feb47b' : '#ff7e5f')};
  }
`;

export const SkillTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(270deg, #ff7e5f, #feb47b, #ff7e5f);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${gradientAnimation} 4s infinite linear;
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const SkillItem = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(to right, #ffffff, #f7f7f7);
  color: #333;
  border: 2px solid ${({ theme }) => (theme.mode === 'light' ? '#feb47b' : '#ff7e5f')};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    border-color: ${({ theme }) => (theme.mode === 'dark' ? '#feb47b' : '#ff7e5f')};
  }
`;

export const SkillImage = styled.img`
  width: 35px;
  height: 35px;
  padding: 3px;
  margin-right: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;