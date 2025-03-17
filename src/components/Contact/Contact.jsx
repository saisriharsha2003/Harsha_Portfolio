import React, { useRef, useState } from "react";
import { Snackbar } from "@mui/material";
import { Resend } from 'resend';
import { 
  Container, Wrapper, Title, Desc, ContactForm, ContactTitle, ContactInput, 
  ContactInputMessage, ContactButton, FormContainer 
} from "./ContactStyle";

const resend = new Resend('re_Gnuoz1Mb_CCZNnSfbaLWkjnDCtLkYwQAi'); 

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
        <Title>Contact Me</Title>
        <Desc>Feel free to reach out for collaborations or just a chat!</Desc>
        <FormContainer>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Drop a Message 📩</ContactTitle>
            <ContactInput placeholder="Your Email" name="from_email" required />
            <ContactInput placeholder="Your Name" name="from_name" required />
            <ContactInput placeholder="Subject" name="subject" required />
            <ContactInputMessage placeholder="Message" rows="5" name="message" required />
            <ContactButton type="submit" value="Send" />
          </ContactForm>
        </FormContainer>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
