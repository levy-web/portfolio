import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web application development world
      From Back-end to designs.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Javascript, React, APIs, <br/> Css and html
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Python, Ruby on Rails, <br/>
          Ruby and Databases
        </ListParagraph>
      </ListItem>
      {/* <ListItem>
        <DiZend size="3rem"/>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br/>
          CSS <br/>and Figma designs
        </ListParagraph>
      </ListItem> */}
      </List>
  </Section>

);

export default Technologies;
