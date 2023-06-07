import React from 'react';
import Typed from 'react-typed'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, Typediv, Button } from './HeroStyles';

function Hero() {
  const openWhatsApp = () => {
    const phoneNumber = '+254 791 716 946'; // Replace with your phone number
    const message = 'Hello, Levy.'; // Replace with your default message
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

 return(
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm <br/>
        Levy Muguro
      </SectionTitle>

      <SectionText>
      A Full-Stack Software, and <br/> Network Engineer leveraging in &nbsp;<br className='sm:block hidden'/>

      <Typediv>
        <Typed
            strings={[
              "Javascript and frameworks.",
              "Reactjs.",
              "Python.",
              "Ruby and ruby on rails.",
              "restful APIs.",
              "Cisco and Ubiquity."          
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
        </Typediv>
      </SectionText>
      <Button onClick={openWhatsApp}> whatsapp </Button>
    </LeftSection>
  </Section>
);
}

export default Hero;