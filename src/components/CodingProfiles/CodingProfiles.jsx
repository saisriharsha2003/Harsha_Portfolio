import React, { useEffect, useRef, useState } from "react";
import { codingprofiles } from "../CodingProfiles/CodingProfilesData.js";
import { motion, useAnimation } from "framer-motion";
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
} from "./CodingProfilesStyle";

const handleClick = (link) => {
  window.open(link, "_blank");
};

function chunkArray(array, chunkSize) {
  const results = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
}

const AnimatedProfileRow = ({ row }) => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
        } else {
          controls.start({ opacity: 0, y: 60, transition: { duration: 0.6, ease: "easeIn" } });
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        marginBottom: "2rem",
      }}
    >
      {row.map((profile, index) => (
        <Profile key={index}>
          <ProfileTitle>{profile.name}</ProfileTitle>
          <ProfileList>
            {profile.profiles.map((item, idx) => (
              <ProfileItem key={idx}>
                <ProfileImage
                  src={item.image}
                  alt={item.name}
                  onClick={() => handleClick(item.link)}
                  style={{ cursor: "pointer" }}
                />
                <CodingTitle>{item.name}</CodingTitle>
              </ProfileItem>
            ))}
          </ProfileList>
        </Profile>
      ))}
    </motion.div>
  );
};

const CodingProfiles = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkSize = isLargeScreen ? 2 : 1;
  const rows = chunkArray(codingprofiles, chunkSize);

  return (
    <CodingProfilesContainer id="coding profiles">
      <Wrapper>
        <Title>Coding Profiles</Title>
        <Desc>Here are some of my Coding Profiles.</Desc>
        {rows.map((row, index) => (
          <AnimatedProfileRow key={index} row={row} />
        ))}
      </Wrapper>
    </CodingProfilesContainer>
  );
};

export default CodingProfiles;
