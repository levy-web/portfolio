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
  color:#444;
  background:#00FF00;;
  cursor:pointer;
  max-width: 200px;
  padding: 20px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    border-radius: 25px;
    color:#444;
    background:#00FF00;;
    cursor:pointer;
    max-width: 100%;
    padding: 10px;
    text-align: center;
    margin:auto;

  }


`

