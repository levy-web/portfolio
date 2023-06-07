import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Typediv = styled.div`
  color:#00FFFF;

`

export const Button = styled.div`
  border-radius: 25px;
  display:inline-block;
  color:#444;
  border:1px solid #CCC;
  background:#00FF00;;
  box-shadow: 0 0 5px -1px rgba(0,0,0,0.2);
  cursor:pointer;
  vertical-align:middle;
  max-width: 200px;
  padding: 20px;
  text-align: center;


`

