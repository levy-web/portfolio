import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';


import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

function Projects(){
  const [pageNumber, setPageNumber] = useState(0)
  // const [paginated, setPaginated] = useState(protectedAreaProd.slice(0, protectedAreaProd.length))
  // const pageNumber = 0
  const productsPerPage = 2
  const pagesVisited = pageNumber * productsPerPage
  const pageCount = Math.ceil(projects.length / productsPerPage)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

 return(
  <Section nopadding id="projects">
    <SectionDivider />

    <SectionTitle main >Projects</SectionTitle>
    <GridContainer>
      {projects.slice(pagesVisited, pagesVisited + productsPerPage).map(({id, image, title, description, tags, source, visit})=>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>

          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, index)=>(
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Deployment</ExternalLinks>
            <ExternalLinks href={source}>Github</ExternalLinks>
          </UtilityList>
        </BlogCard>
        

      ))}
    </GridContainer>
    <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={changePage}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginatonActive"}
        />

  </Section>

);
}

export default Projects;