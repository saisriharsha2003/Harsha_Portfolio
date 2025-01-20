import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyle";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../HeroSection/HeroSectionData.js";
import { useTheme } from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import styled from "styled-components";

const Navbar = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("/"); 
  const currentTheme = useTheme();

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/"> {/* Link to the homepage */}
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink
            as={Link} // Use Link component from react-router-dom
            to="/" // Change to route path
            className={activeSection === "/" ? "active" : ""}
            onClick={() => handleNavClick("/")}
          >
            Home
          </NavLink>
          <NavLink
            as={Link}
            to="/skills"
            className={activeSection === "/skills" ? "active" : ""}
            onClick={() => handleNavClick("/skills")}
          >
            Skills
          </NavLink>
          <NavLink
            as={Link}
            to="/experience"
            className={activeSection === "/experience" ? "active" : ""}
            onClick={() => handleNavClick("/experience")}
          >
            Experience
          </NavLink>
          <NavLink
            as={Link}
            to="/projects"
            className={activeSection === "/projects" ? "active" : ""}
            onClick={() => handleNavClick("/projects")}
          >
            Projects
          </NavLink>
          <NavLink
            as={Link}
            to="/education"
            className={activeSection === "/education" ? "active" : ""}
            onClick={() => handleNavClick("/education")}
          >
            Education
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>

        <ButtonContainer>
          <ThemeToggle onClick={toggleTheme}>
            <Circle theme={currentTheme}>
              {currentTheme.bg === "#ffffff" ? <MoonIcon /> : <SunIcon />}
            </Circle>
          </ThemeToggle>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <ButtonContainer>
              <ThemeToggle onClick={toggleTheme}>
                <Circle theme={currentTheme}>
                  {currentTheme.bg === "#ffffff" ? <MoonIcon /> : <SunIcon />}
                </Circle>
              </ThemeToggle>
            </ButtonContainer>
            <MobileLink
              as={Link} // Use Link for mobile menu
              to="/"
              onClick={() => {
                handleNavClick("/");
                setIsOpen(!isOpen);
              }}
            >
              Home
            </MobileLink>
            <MobileLink
              as={Link}
              to="/skills"
              onClick={() => {
                handleNavClick("/skills");
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              as={Link}
              to="/experience"
              onClick={() => {
                handleNavClick("/experience");
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              as={Link}
              to="/projects"
              onClick={() => {
                handleNavClick("/projects");
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              as={Link}
              to="/education"
              onClick={() => {
                handleNavClick("/education");
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${currentTheme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

const ThemeToggle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) =>
    theme.bg === "#ffffff" ? "#fff" : "#fff"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
`;

const SunIcon = styled(FaSun)`
  font-size: 18px;
  color: #ff7e5f;
`;

const MoonIcon = styled(FaMoon)`
  font-size: 18px;
  color: #ff7e5f;
`;

export default Navbar;
