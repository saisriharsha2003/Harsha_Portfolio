import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
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
  ThemeToggle,
  Circle,
  SunIcon,
  MoonIcon,
} from "./NavbarStyle";
import { SiSimilarweb } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import { Bio } from "../HeroSection/HeroSectionData.js";

const Navbar = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const currentTheme = useTheme();

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            offset={-80}
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
            }}
          >
            <SiSimilarweb size="2rem" /> <Span>Portfolio</Span>
          </ScrollLink>
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>

        <NavItems>
          {["about", "skills", "experience", "projects", "education"].map(
            (section, index) => (
              <motion.div
                key={section}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <NavLink
                  as={ScrollLink}
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={activeSection === section ? "active" : ""}
                  onClick={() => handleNavClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </NavLink>
              </motion.div>
            )
          )}

          <ButtonContainer>
            <GitHubButton href={Bio.github} target="_blank">
              Github Profile
            </GitHubButton>
          </ButtonContainer>
        </NavItems>

        <ButtonContainer>
          <motion.div whileTap={{ scale: 0.9 }}>
            <ThemeToggle onClick={toggleTheme}>
              <Circle theme={currentTheme}>
                {currentTheme.bg === "#ffffff" ? <MoonIcon /> : <SunIcon />}
              </Circle>
            </ThemeToggle>
          </motion.div>
        </ButtonContainer>

        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.5 }}
          >
            <MobileMenu isOpen={isOpen}>
              {["about", "skills", "experience", "projects", "education"].map(
                (section) => (
                  <MobileLink
                    key={section}
                    as={ScrollLink}
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => handleNavClick(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </MobileLink>
                )
              )}
              <GitHubButton href={Bio.github} target="_blank">
                Github Profile
              </GitHubButton>
            </MobileMenu>
          </motion.div>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
