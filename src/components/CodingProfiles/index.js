import React from 'react';
import styled from 'styled-components';
import { codingprofiles } from '../../data/constants';

const CodingProfilesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Profile = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
  border: 0.1px solid #ff7e5f;
  box-shadow: #ff7e5f 2px 2px 1px;
`;

const ProfileTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ProfileList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProfileItem = styled.div`
  width: 100%;
  max-width: 120px;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CodingTitle = styled.div`
color: ${({ theme }) => theme.text_secondary};`

const handleClick = (link) => {
  window.open(link, '_blank');
};

const CodingProfiles = () => {
  return (
    <CodingProfilesContainer>
      <Wrapper>
        <Title>Coding Profiles</Title>
        <Desc>Here are some of my Coding Profiles.</Desc>
        {codingprofiles.map((profile) => (
          <Profile key={profile.name || profile.id}>
            <ProfileTitle>{profile.name}</ProfileTitle>
            <ProfileList>
              {profile.profiles.map((item, itemIndex) => (
                <ProfileItem key={item.name + itemIndex}> 
                  <ProfileImage
                    src={item.image}
                    alt={item.name}
                    onClick={() => handleClick(item.link)}
                  />
                  <CodingTitle>{item.name}</CodingTitle>
                </ProfileItem>
              ))}
            </ProfileList>
          </Profile>
        ))}
      </Wrapper>
    </CodingProfilesContainer>
  );
};

export default CodingProfiles;
