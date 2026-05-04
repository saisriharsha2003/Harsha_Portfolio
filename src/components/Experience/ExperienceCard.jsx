import React from 'react';
import { Card, Top, Image, Body, Role, Company, Date, Description, Span, Para, Exp, Skills, Skill, Document } from './ExperienceCardStyle';

const ExperienceCard = ({ experience, direction }) => {
  const renderDesc = (desc) => {
    if (!desc) return null;
    const paraBlocks = desc.split(/\r?\n\r?\n/).filter(Boolean);
    if (paraBlocks.length > 1) {
      return paraBlocks.map((p, i) => <Para key={i}>{p}</Para>);
    }
    const sentences = desc.split(/(?<=[.!?])\s+/);
    return sentences.map((s, i) => <Para key={i}>{s}</Para>);
  };

  return (
    <Card direction={direction}>
      <Top>
        <Image src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience.desc && (
          <>
            <Span>{experience.desc}</Span>
            <Exp>{renderDesc(experience.desc)}</Exp>
          </>
        )}
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