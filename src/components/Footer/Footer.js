import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      {/* <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+254791716946'>+254791716946</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:levymuguro@gmail.com'>levymuguro@gmail</LinkItem>
        </LinkColumn>
      </LinkList> */}
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Ensure Best Practices and Getting it Done.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/levy-web'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>

      <SocialIcons href='https://www.linkedin.com/in/levy-njiru-muguro/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>

      <SocialIcons href='https://www.instagram.com/muguro_levy/'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>

  );
};

export default Footer;
