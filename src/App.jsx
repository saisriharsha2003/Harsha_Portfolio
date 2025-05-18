import "./App.css";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./themes/Themes.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Education from "./components/Education/Education.jsx";
import ProjectDetails from "./components/Projects/ProjectDetails.jsx";
import CodingProfiles from "./components/CodingProfiles/CodingProfiles.jsx";
import styled from "styled-components";
import GalaxyBackground from "./GalaxyBackground.jsx";

const Separator = styled.hr`
  border: none;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(255, 0, 150, 1) 0%,
    rgba(0, 204, 255, 1) 100%
  );
  margin: 50px 0;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const Body = styled.div`
  background-color: transparent;
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div``;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [theme, setTheme] = useState(null); // start null to prevent flicker
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    // On first mount, read theme from localStorage or default to dark
    const savedThemeMode = localStorage.getItem("themeMode") || "dark";
    setTheme(savedThemeMode === "dark" ? darkTheme : lightTheme);
    setIsThemeLoaded(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === darkTheme ? lightTheme : darkTheme;
      localStorage.setItem("themeMode", newTheme === darkTheme ? "dark" : "light");
      return newTheme;
    });
  };

  // Don't render app until theme is loaded
  if (!isThemeLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <GalaxyBackground />
      <Router>
        <Navbar toggleTheme={toggleTheme} />
        <Body>
          <HeroSection />
          <Separator />
          <Wrapper>
            <Experience />
            <Separator />
            <Skills />
            <Separator />
            <CodingProfiles />
          </Wrapper>
          <Separator />
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Separator />
          <Wrapper>
            <Education />
          </Wrapper>
          <Separator />
          <Wrapper>
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
