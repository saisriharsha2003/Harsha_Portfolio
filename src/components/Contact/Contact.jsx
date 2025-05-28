import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import {
  ContactContainer,
  ContactWrapper,
  ContactTitle,
  ContactDesc,
  ContactForm,
  ContactFormTitle,
  ContactInput,
  ContactInputMessage,
  ContactButton,
  ContactFormContainer,
} from "./ContactStyle";
import { motion, useAnimation } from "framer-motion";

export default function Contact() {
  const [result, setResult] = useState("");
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          });
        } else {
          controls.start({ opacity: 0, y: 40 });
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c5ed8572-81d3-495a-a9d5-a4166c94b9d6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "🚀 Success!",
          text: "Your message has been sent successfully!",
          icon: "success",
          confirmButtonColor: "#00bfff",
          background: "linear-gradient(145deg, #1c1c1c, #292929)",
          color: "#fff",
        }).then((result) => {
          if (result.isConfirmed || result.isDismissed) {
            event.target.reset();
            setResult("");
          }
        });
      } else {
        Swal.fire({
          title: "🚫 Error!",
          text: "An error occurred while sending your message.",
          icon: "error",
          confirmButtonColor: "#00bfff",
          background: "linear-gradient(145deg, #1c1c1c, #292929)",
          color: "#fff",
        });
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactTitle>Contact Me</ContactTitle>
        <ContactDesc>
          Feel free to reach out for collaborations or just a chat!
        </ContactDesc>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          style={{ width: "100%"}}
        >
          <ContactFormContainer>
            <ContactForm onSubmit={onSubmit}>
              <ContactFormTitle>Drop a Message 📩</ContactFormTitle>
              <ContactInput placeholder="Your Name" name="name" required />
              <ContactInput
                placeholder="Your Email"
                name="email"
                type="email"
                required
              />
              <ContactInputMessage
                placeholder="Message"
                rows="5"
                name="message"
                required
              />
              <ContactButton type="submit" value="Send" />
            </ContactForm>
          </ContactFormContainer>
          <span>{result}</span>
        </motion.div>
      </ContactWrapper>
    </ContactContainer>
  );
}
