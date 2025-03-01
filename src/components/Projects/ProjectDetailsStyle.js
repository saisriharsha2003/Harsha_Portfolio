import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.5s ease;
`;

export const Wrapper = styled.div`
  max-width: 800px;
  width: 90%;
  border-radius: 16px;
  margin: 20px auto;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
  margin: 10px 0;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Date = styled.div`
  font-size: 14px;
  margin: 8px 0;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Desc = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin: 10px 0;
  line-height: 1.5;
  text-align: justify;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Image = styled.img`
  width: 80%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 12px;
  margin: 15px auto;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
  display: block;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0;
  justify-content: center;
`;

export const Tag = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: white;
  padding: 4px 8px;
  border-radius: 16px;
  background-color: #ff00b7;
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  gap: 12px;
`;

export const Button = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  background-color: #ec008c;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #d9007a;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
