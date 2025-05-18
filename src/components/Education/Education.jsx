import React, { useEffect, useState, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EducationCard from "./EducationCard";
import { educations } from "../Education/EducationData";
import {
  Container,
  Header,
  Title,
  EducationDescription,
} from "./EducationStyle";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "styled-components";

const Education = () => {
  const [scrollDir, setScrollDir] = useState("down");
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setScrollDir(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container id="education">
      <Header>
        <Title>Education</Title>
        <EducationDescription>
            My educational journey has been a transformative experience. Here are the milestones of my academic achievements.
        </EducationDescription>
      </Header>

      <VerticalTimeline layout={isMobile ? "1-column-left" : "2-columns"}>
        {educations.map((item, index) => {
          const isMobile = window.innerWidth <= 768;

          const position = isMobile
            ? "right"
            : index % 2 === 0
              ? "left"
              : "right";

          let xInitial = 80; 
          if (!isMobile) {
            xInitial = position === "left" ? -80 : 80; 
          }

          const cardControls = useAnimation();
          const iconControls = useAnimation();
          const ref = useRef();

          useEffect(() => {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (!entry.isIntersecting && scrollDir === "up") {
                  cardControls.start({
                    opacity: 0,
                    x: xInitial,
                    transition: { duration: 1.2, ease: "easeInOut" },
                  });
                  iconControls.start({
                    opacity: 0,
                    transition: { duration: 0.6 },
                  });
                } else if (entry.isIntersecting) {
                  cardControls.start({
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  });
                  iconControls.start({
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeOut" },
                  });
                }
              },
              { threshold: 0.2 }
            );

            if (ref.current) observer.observe(ref.current);
            return () => {
              if (ref.current) observer.unobserve(ref.current);
            };
          }, [scrollDir, cardControls, iconControls, xInitial]);

          const arrowStyle = {
            position: "absolute",
            top: "20px",
            fontSize: "50px",
            width: 0,
            height: 0,
            borderTop: "15px solid transparent",
            borderBottom: "15px solid transparent",
          };

          if (isMobile) {
            Object.assign(arrowStyle, {
              left: "-10px",
              borderRight: "12px solid white",
            });
          } else {
            if (position === "left") {
              Object.assign(arrowStyle, {
                right: "-10px",
                borderLeft: "12px solid white",
              });
            } else {
              Object.assign(arrowStyle, {
                left: "-10px",
                borderRight: "12px solid white",
              });
            }
          }

          return (
            <div ref={ref} key={item.id || index}>
              <VerticalTimelineElement
                position={position}
                icon={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={iconControls}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      overflow: "hidden",
                      background: item.img
                        ? "#fff"
                        : item.icon === "work"
                          ? "#06D6A0"
                          : "#f9c74f",
                      padding: item.img ? 4 : 0,
                    }}
                  >
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.school}
                        style={{
                          width: "80%",
                          height: "80%",
                          objectFit: "contain",
                        }}
                      />
                    ) : null}
                  </motion.div>
                }
                iconStyle={{ background: "transparent", boxShadow: "none" }}
                contentStyle={{
                  background: "transparent",
                  boxShadow: "none",
                  padding: 0,
                  position: "relative",
                }}
                contentArrowStyle={{ borderRight: "0px", background: "linear-gradient(145deg, #1c1c1c, #292929)" }}
              >
                <motion.div
                  initial={{ opacity: 0, x: xInitial }}
                  animate={cardControls}
                  style={{
                    position: "relative",
                  }}
                  whileHover={{
                    scale: 1.09,                    
                    boxShadow: "0px 0px 30px " + (theme.mode === "dark" ? "#0d1b2a" : "#00bfff"),
                  }}
                >
                  <div style={arrowStyle} />
                  <EducationCard educations={item} direction={position} />
                </motion.div>
              </VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
    </Container>
  );
};

export default Education;
