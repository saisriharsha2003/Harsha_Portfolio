import React from 'react';
import { codingprofiles } from '../CodingProfiles/CodingProfilesData.js';
import {
  CodingTitle,
  CodingProfilesContainer,
  Title,
  Wrapper,
  Profile,
  ProfileTitle,
  ProfileList,
  ProfileItem,
  ProfileImage,
  Desc,
} from './CodingProfilesStyle';

const handleClick = (link) => {
  window.open(link, '_blank');
};

const CodingProfiles = () => {
  return (
    <CodingProfilesContainer id="coding profiles">
      <Wrapper>
        <Title>Coding Profiles</Title>
        <Desc>Here are some of my Coding Profiles.</Desc>
        {codingprofiles.map((profile, index) => (
          <Profile key={`profile-${index}`}>
            <ProfileTitle>{profile.name}</ProfileTitle>
            <ProfileList>
              {profile.profiles.map((item, itemIndex) => (
                <ProfileItem key={`${item.name}-${itemIndex}`}>
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
