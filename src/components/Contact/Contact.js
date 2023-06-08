import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

// import { styles } from "../styles";
import { LabelForm, Form, StyledForm, StyledLabel, StyledButton, StyledInput, StyledTextArea } from "./ContactStyles";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_j4ovt39',
        'template_y0oapfd',
        {
          from_name: form.name,
          to_name: "Levy Muguro",
          from_email: form.email,
          to_email: "levymuguro@gmail.com",
          message: form.message,
        },
        'QLZX4m_6jFeoyDETh'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <Section>
        <SectionTitle >Contact.</SectionTitle>

        <StyledForm
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <label>
            <StyledLabel>Your Name</StyledLabel>
            <StyledInput
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            /><br/>
          </label><br/>
          <label>
            <StyledLabel >Your email</StyledLabel>
            <StyledInput
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            /><br/>
          </label><br/>
          <label>
            <StyledLabel >Your Message</StyledLabel>
            <StyledTextArea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Leave a message'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label><br/>

          <StyledButton
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </StyledButton>
        </StyledForm>
    </Section>
  );
};

export default Contact;