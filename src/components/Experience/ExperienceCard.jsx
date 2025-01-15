import React from 'react';
import { Card, Top, Image, Body, Role, Company, Date, Description, Span, Skills, Skill, Document } from './ExperienceCardStyle';

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Image src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience.desc && <Span>{experience.desc}</Span>}
        {experience.skills && (
          <>
            <br />
            <Skills>
              {experience.skills.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </Skills>
          </>
        )}
      </Description>
      {experience.doc && (
        <a href={experience.doc} target="new">
          <Document src={experience.doc} />
        </a>
      )}
    </Card>
  );
};

export default ExperienceCard;
