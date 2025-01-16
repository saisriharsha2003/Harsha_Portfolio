import React, { useRef, useState } from "react";
import { Snackbar } from "@mui/material";
import { Resend } from 'resend';
import { Container, Wrapper, Title, Desc, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactButton } from "./ContactStyle";

const resend = new Resend('re_frKCJdMt_Jmp79n8Xj1hbifgg2X3V2AYe'); 

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { from_name, from_email, subject, message } = form.current;
  
    if (!from_name.value || !from_email.value || !subject.value || !message.value) {
      alert('Please fill in all fields');
      return;
    }
  
    try {
      await resend.emails.send({
        from: from_email.value, 
        to: 'saisriharsha.r@gmail.com', 
        subject: subject.value,
        html: `<p><strong>${from_name.value}</strong> has sent a message:</p><p>${message.value}</p>`,
      });
      setOpen(true); 
      form.current.reset(); 
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };
  
  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <div style={{"alignItems":"center", "textAlign":"center"}}>
            <ContactButton type="submit" value="Send" />
          </div>
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
