import React from "react";
import styled from "styled-components";

const Document = styled.img`
  display: none;
  height: 70px;
  width: auto;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Card = styled.div`
  width: 650px;
  border-radius: 12px;
  padding: 16px 20px;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(145deg, #1c1c1c, #292929)"
      : "linear-gradient(145deg, #ffffff, #f3f3f3)"};
  border: 2px solid
    ${({ theme }) => (theme.mode === "dark" ? "#ff7e5f" : "#feb47b")};
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "4px 4px 20px rgba(255, 255, 255, 0.1), -4px -4px 20px rgba(0, 0, 0, 0.3)"
      : "4px 4px 20px rgba(0, 0, 0, 0.1), -4px -4px 20px rgba(255, 255, 255, 0.5)"};
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) =>
      theme.mode === "dark"
        ? "6px 6px 30px rgba(255, 255, 255, 0.2), -6px -6px 30px rgba(0, 0, 0, 0.5)"
        : "6px 6px 30px rgba(0, 0, 0, 0.2), -6px -6px 30px rgba(255, 255, 255, 0.7)"};
    transform: translateY(-8px);
    border-color: ${({ theme }) =>
      theme.mode === "dark" ? "#feb47b" : "#ff7e5f"};
  }

  &:hover ${Document} {
    display: block;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  width: 100px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0px 0px 20px rgba(255, 255, 255, 0.2)"
      : "0px 0px 20px rgba(0, 0, 0, 0.1)"};

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  gap: 4px;
  align-items: center;

  b {
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    -webkit-background-clip: text;
    color: transparent;
  }

  span {
    color: ${({ theme }) => theme.text_secondary};
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade:</b> <span>{education.grade}</span>
      </Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;
