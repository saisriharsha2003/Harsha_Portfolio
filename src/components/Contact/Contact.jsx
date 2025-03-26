import React, { useState } from "react";
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

export default function Contact() {
  const [result, setResult] = useState("");

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

      if (data.success)
      {
        Swal.fire({
          title: "🚀 Success!",
          text: "Your message has been sent successfully!",
          icon: "success",
          confirmButtonColor: "#ff7e5f",
          background: "linear-gradient(145deg, #1c1c1c, #292929)",
          color: "#fff",
        }).then((result) => {
          if (result.isConfirmed || result.isDismissed) {
            event.target.reset();
            setResult("");
          }
        });
        
      }
      else {
        Swal.fire({
          title: "🚫 Error!",
          text: "An error occurred while sending your message.",
          icon: "error",
          confirmButtonColor: "#ff7e5f",
          background: "linear-gradient(145deg, #1c1c1c, #292929)",
          color: "#fff",
        }).then((result) => {
          console.log("Error Alert closed", result);
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
        <ContactDesc>Feel free to reach out for collaborations or just a chat!</ContactDesc>
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
      </ContactWrapper>
    </ContactContainer>
  );
}