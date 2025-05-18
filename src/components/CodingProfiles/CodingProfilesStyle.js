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

export const CodingProfilesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 40px;
  justify-content: center;
  padding: 0 20px;  
  background: ${({ theme }) => theme.background};

`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 18px;
  padding: 0 20px;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 0 15px;
  }
`;

export const Profile = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(145deg, #1c1c1c, #292929)"
      : "linear-gradient(145deg, #ffffff, #f3f3f3)"};
  opacity: 0.9;
  border-radius: 20px;
  padding: 20px;
  animation: ${({ theme }) =>
    pulseGlow(theme.mode === 'dark' ? '#00bcd4' : '#00bfff')} 3s infinite alternate;
  
  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0px 0px 10px ${({ theme }) => (theme.mode === 'dark' ? '#0d1b2a' : '#00bfff')};

  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 16px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 12px;
  }
`;

export const ProfileTitle = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const ProfileList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
`;

export const ProfileItem = styled.div`
  width: 100%;
  max-width: 130px;
  text-align: center;
  @media (max-width: 768px) {
    max-width: 120px;
  }
`;

export const ProfileImage = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    &:hover {
    transform: translateY(-12px) scale(1.02);
  }
`;

export const Title = styled.div`
  font-size: 48px;
  text-align: center;
  font-weight: 700;
  margin-top: 30px;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)"
      : "linear-gradient(135deg, #b3e5fc 0%, #81d4fa 35%, #4fc3f7 70%, #29b6f6 100%)"}; 
  -webkit-background-clip: text;
  color: transparent;
  @media (max-width: 768px) {
    font-size: 36px;
    margin-top: 20px;
  }
`;

export const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 20px auto;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CodingTitle = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  font-weight: 600;
  margin-top: 6px;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 10px;
  }
`;
