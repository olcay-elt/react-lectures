import styled from 'styled-components';

const ButonStyle = styled.button`
  background-color: ${({ sefa }) => sefa ? "lightblue" : "orange"};
  color: blue;
  cursor: pointer;
  padding: 1rem 1.5rem;
  border: 2px solid green;
  border-radius: 5px;
  font-family: "tahoma";
  font-size: 30px;
&:hover{
    transform:scale(0.95)
}

`;


export const DomatesButon = styled(ButonStyle)`
color:${({ mehmet }) => mehmet ? " tomato" : "green "};
background-color:aquamarine;
border:3px solid red;

`


export default ButonStyle;
