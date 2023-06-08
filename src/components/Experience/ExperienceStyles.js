import styled from 'styled-components';

export const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
  
    heroHeadText:
      "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

export const IconImg = styled.img`
  width:60%;
  height:60%;
  object-fit: contain;

`

export const IconDiv = styled.div`
  width:100%;
  height:100%;
  justify-content:center;
  align-items:center;
  display:flex;

`

export const H3Title = styled.h3`
  color:white;
  font-weight: blod;
  font-size:24px;

`
export const Paragr = styled.p`
  color:#9FA6B2;
  font-weight: 600;
  font-size:16px;

`
export const Ul = styled.ul`
  margin-top:5px;
  margin-left:5px;
  // space-y-2

`
export const Li = styled.li`
  list-style-type: disc;
  margin-top:2px;
`

export const VerticalTimelineDiv = styled.div`
  margin-top:20px;
  margin-bottom:20px;
`
