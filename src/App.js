import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import CodingProfiles from "./components/CodingProfiles";
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
