import React from "react";
import {Card, Top, Image, Body, Name, Degree, Date, Grade, Description, Span} from "./EducationCardStyle"

const EducationCard = ({ educations }) => {
  return (
    <Card>
      <Top>
        <Image src={educations.img} />
        <Body>
          <Name>{educations.school}</Name>
          <Degree>{educations.degree}</Degree>
          <Date>{educations.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade:</b> <span>{educations.grade}</span>
      </Grade>
      <Description>
        <Span>{educations.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;
