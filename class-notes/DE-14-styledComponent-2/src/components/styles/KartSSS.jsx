import styled from 'styled-components';

const KartSSS = styled.div`
  background-color: aquamarine;
  padding: 60px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  gap:2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction:${({ ters }) => ters || "row"} ;

  @media(max-width:${({ theme }) => theme.responsive}){
flex-direction: column;


  }
`;

export default KartSSS;
