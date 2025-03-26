import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

export const Nav = styled.nav`
  background: rgba(17, 17, 17, 0.9);
  backdrop-filter: blur(10px);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.4s ease-in-out;

  @media (max-width: 960px) {
    transition: 0.4s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    color: #ff7e5f;
  }
`;

export const Span = styled.span`
  padding-left: 12px;
  font-size: 18px;
  color: white;
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(LinkR)`
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
  padding-bottom: 4px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: white;
    cursor: pointer;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    bottom: -5px;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active {
    border-bottom: 2px solid white;
  }
`;

export const ThemeToggle = styled.button`
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  color: white;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) =>
    theme.bg === "#ffffff" ? "#fff" : "#fff"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
  transform: rotate(
    ${({ theme }) => (theme.bg === "#ffffff" ? "0deg" : "180deg")}
  );
`;

export const SunIcon = styled(FaSun)`
  font-size: 20px;
  color: #ff7e5f;
`;

export const MoonIcon = styled(FaMoon)`
  font-size: 20px;
  color: #ff7e5f;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: #ff7e5f;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  background: rgba(17, 17, 17, 0.9);
  backdrop-filter: blur(10px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 0 0 20px 20px;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const MobileLink = styled(LinkR)`
  color: white;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ff7e5f;
  }

  &.active {
    border-bottom: 2px solid #ff7e5f;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
