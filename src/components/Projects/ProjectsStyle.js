import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)"
      : "linear-gradient(135deg, #b3e5fc 0%, #81d4fa 35%, #4fc3f7 70%, #29b6f6 100%)"};  
  -webkit-background-clip: text;
  color: transparent;
  @media (max-width: 768px) {
    margin-top: 12px;
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
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    
    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;