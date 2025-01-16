import styled from 'styled-components';

export const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.3s ease, transform 0.3s ease;

  margin-top: 16px;
`;

export const Card = styled.div`
  width: 340px;
  min-height: 440px;
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.card},
    ${({ theme }) => theme.mode === 'dark' ? '#1c1c1c' : '#ffffff'}
  );
  border: 2px solid ${({ theme }) => (theme.mode === 'dark' ? '#ff7e5f' : '#feb47b')};
  border-radius: 16px;
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0px 0px 20px rgba(255, 255, 255, 0.2)'
      : '0px 0px 20px rgba(0, 0, 0, 0.2)'};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0px 0px 30px rgba(255, 255, 255, 0.3)'
        : '0px 0px 30px rgba(0, 0, 0, 0.3)'};
    border-color: ${({ theme }) => (theme.mode === 'dark' ? '#feb47b' : '#ff7e5f')};
  }

  &:hover ${Button} {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, ${({ theme }) => theme.mode === 'dark' ? 0.3 : 0.15});
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    ${Card}:hover & {
      transform: scale(1.1);
    }
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  margin: 0;
`;

export const Date = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;