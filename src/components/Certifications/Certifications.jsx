import React, { useEffect, useState } from "react";
import CertificationCard from "./CertificationsCard"; 
import certifications from "../Certifications/CertificationsData.js";
import { Container, Wrapper, Title, Desc, CardContainer, ArrowButton } from "./CertificationsStyle";
import { motion } from "framer-motion";

const Certifications = ({ openModal, setOpenModal }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = isLargeScreen ? 3 : 1; // ✅ mobile shows only 1 card

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => {
    setStartIndex((prev) =>
      prev - visibleCount < 0
        ? certifications.length - visibleCount
        : prev - visibleCount
    );
  };

  const next = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= certifications.length
        ? 0
        : prev + visibleCount
    );
  };

  const visibleCerts = certifications.slice(startIndex, startIndex + visibleCount);

  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>
          Here are some of the certifications I have earned over the years.
        </Desc>
        
        <CardContainer>
          <ArrowButton onClick={prev}>
            {"<"}
          </ArrowButton>

          {visibleCerts.map((cert, idx) => (
            <motion.div
              key={cert.id || idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <CertificationCard
                certification={cert}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            </motion.div>
          ))}

          <ArrowButton onClick={next}>
            {">"}
          </ArrowButton>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certifications;
