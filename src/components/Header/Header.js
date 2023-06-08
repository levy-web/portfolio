import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="#hero">
        <a style={{display: "flex", alignItems: "center", color: "white", }}>
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>

      <li>
        <Link href="#projects">
          <NavLink> Projects </NavLink>
        </Link>
      </li>

      <li>
        <Link href="#exp">
          <NavLink> Experience </NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink> About </NavLink>
        </Link>
      </li>

    </Div2>

    <Div3>

      <SocialIcons href='https://github.com/levy-web'>
        <AiFillGithub size="3rem"/> 
      </SocialIcons>

      <SocialIcons href='https://www.linkedin.com/in/levy-njiru-muguro/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>

      <SocialIcons href='https://www.instagram.com/muguro_levy/'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>

    </Div3>

  </Container>

);

export default Header;
