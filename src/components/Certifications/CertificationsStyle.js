import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  gap: 20px;
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)"
      : "linear-gradient(135deg, #b3e5fc 0%, #81d4fa 35%, #4fc3f7 70%, #29b6f6 100%)"};
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  padding: 0 20px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 20px; 
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 16px;
    padding: 16px; 
  }
`;

export const ArrowButton = styled.button`
  background: transparent;
  border: none;
  font-size: 32px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
    color: #fff;
  }
`;
