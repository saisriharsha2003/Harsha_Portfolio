import {
  Card,
  ImageWrapper,
  Details,
  Title,
  Button,
  Span1,
} from "./CertificationsCardStyle";
import { motion } from "framer-motion";

const CertificationCard = ({ certification }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <ImageWrapper>
          <img src={certification.image} alt={certification.title} />
        </ImageWrapper>
        <Details>
          <Title>{certification.title}</Title>
          <p style={{ fontSize: "15px", fontWeight: 500, textAlign: "center" }}>
            <Span1>Organization:</Span1>{" "}
            <span style={{ fontWeight: 500, color: "white" }}>
              {certification.organization}
            </span>
          </p>
        </Details>
        <Button
          target="_blank"
          onClick={() => window.open(certification.link, "_blank")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View Certificate
        </Button>
      </Card>
    </motion.div>
  );
};

export default CertificationCard;
