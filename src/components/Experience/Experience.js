import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import 'react-vertical-timeline-component/style.min.css';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import { styles, IconImg, IconDiv, Paragr, H3Title, Ul, Li } from './ExperienceStyles'
import { experiences } from '../../constants/constants'

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <IconDiv>
        <IconImg 
          src={experience.icon}
          alt={experience.company_name}
        />
      </IconDiv>
    }
  >
    <div>
      <H3Title > {experience.title}</H3Title>
      <Paragr style={{margin: 0}}>{experience.company_name}</Paragr>
    </div>
    <Ul >
      {experience.points.map((point, index)=>(
        <Li key={`experience-point-${index}`} >
          {point}
        </Li>
      ))}
    </Ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <Section>
        <SectionTitle
        >Work Experience. </SectionTitle>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index)=>(
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>

      </div>
    </Section>
  )
}

export default Experience