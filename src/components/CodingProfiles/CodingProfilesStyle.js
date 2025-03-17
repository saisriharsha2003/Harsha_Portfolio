import styled from 'styled-components';

export const CodingProfilesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 40px;
  justify-content: center;
  padding: 0 20px;
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
  background: ${({ theme }) => theme.card};
  border: 2px solid ${({ theme }) => (theme.mode === 'dark' ? '#ff7e5f' : '#feb47b')};
  border-radius: 20px;
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0px 0px 20px rgba(255, 255, 255, 0.2)'
      : '0px 0px 20px rgba(0, 0, 0, 0.2)'};
  padding: 20px;
  animation: pulseGlowProfile 3s infinite alternate;
  
  @keyframes pulseGlowProfile {
    0% { box-shadow: 0 0 10px ${({ theme }) => (theme.mode === 'dark' ? '#feb47b' : '#ff7e5f')}; }
    50% { box-shadow: 0 0 25px ${({ theme }) => (theme.mode === 'dark' ? '#feb47b' : '#ff7e5f')}; }
    100% { box-shadow: 0 0 10px ${({ theme }) => (theme.mode === 'dark' ? '#feb47b' : '#ff7e5f')}; }
  }

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0px 0px 30px ${({ theme }) => (theme.mode === 'dark' ? '#feb47b' : '#ff7e5f')};
    border-color: ${({ theme }) => (theme.mode === 'dark' ? '#feb47b' : '#ff7e5f')};
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
  background: linear-gradient(to right, #ff7e5f, #feb47b);
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
