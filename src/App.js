import './App.css';
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './themes/Themes.js';
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
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

const Separator = styled.hr`
  border: none;
  height: 2px;
  background: linear-gradient(90deg, rgba(255,0,150,1) 0%, rgba(0,204,255,1) 100%);
  margin: 50px 0;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div``;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [theme, setTheme] = useState(darkTheme);  

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === darkTheme ? lightTheme : darkTheme));
  };

  useEffect(() => {
    console.log("Theme changed:", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar toggleTheme={toggleTheme} />
        <Body>
          <HeroSection />
          <Separator />
          <Wrapper>
            <Skills />
            <Separator />
            <CodingProfiles />
            <Separator />
            <Experience />
          </Wrapper>
          <Separator />
          <Wrapper>
            <Education />
          </Wrapper>
          <Separator />
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
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
