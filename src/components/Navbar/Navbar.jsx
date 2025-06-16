import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  ButtonContainer,
  MobileIcon,
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  NavLinkMore,
  MobileMenu,
  MobileLink,
  ThemeToggle,
  Circle,
  SunIcon,
  DropIcon,
  MoonIcon,
} from "./NavbarStyle";
import { SiSimilarweb } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";

const Navbar = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentTheme = useTheme();

  const mainSections = ["about", "experience", "skills", "projects", "contact"];
  const dropdownSections = ["education", "coding profiles"];
  const sections = [...mainSections, ...dropdownSections];

  const handleScroll = () => {
    let scrollPosition = window.scrollY + 100;

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const sectionTop = top + window.scrollY;
        const sectionBottom = bottom + window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav>
      <NavbarContainer>
        <ScrollLink
          to={"about"}
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

        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>

        <NavItems>
          {mainSections.map((section, index) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <NavLink
                as={ScrollLink}
                to={section}
                smooth={true}
                duration={500}
                offset={-80}
                className={activeSection === section ? "active" : ""}
                onClick={() => setActiveSection(section)}
              >
                {capitalizeWords(section)}
              </NavLink>
            </motion.div>
          ))}
          <DropdownContainer
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <NavLinkMore>
              More <DropIcon />
            </NavLinkMore>
            {dropdownOpen && (
              <DropdownMenu>
                {dropdownSections.map((section) => (
                  <DropdownItem
                    key={section}
                    as={ScrollLink}
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setActiveSection(section)}
                  >
                    {capitalizeWords(section)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </DropdownContainer>
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
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <MobileMenu isOpen={isOpen}>
              {sections.map((section) => (
                <MobileLink
                  key={section}
                  as={ScrollLink}
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setActiveSection(section)}
                >
                  {capitalizeWords(section)}
                </MobileLink>
              ))}
            </MobileMenu>
          </motion.div>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
