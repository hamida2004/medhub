import React from 'react'
import styled from 'styled-components'
import { colors } from '../assets/style'

function Other() {

  const Title = styled.h1`
  color:${colors.black}
  text-align: center;
  font-size:1.4rem

  `

  const Div = styled.div`
  width:100%;
  background-color:${colors.white};
  display:flex; 
  align-items:center;
  justify-content:center;
  `

  const Btn = styled.button`
  background-color:${colors.secondary};
  color:${colors.black};
  padding:10px 20px;
  border:none;
  border-radius:8px;
  cursor:pointer;

  &:hover{
  transform:scale(1.2,1);}
  
  `

  const sendEmail = () => {
    const email = "hamida2004dada@gmail.com";
    const subject = "Collaboration to MidHub";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoLink;
  };

  const Half = styled.div`
  width:40%;
  display:flex;
  gap:20px;
  align-items:start;
  justify-content:center;
  flex-direction:column;
  `
  const P = styled.p`
    color:${colors.black}
    font-size:1.2rem;
    font-weight:500;
    text-align:left
  
    `
    const Button= styled.button`
    background: none;
    border: none;
    color:${colors.primary};
    cursor: pointer;
    font-size: inherit;
    padding: 4px 8px;
    text-decoration: none;
  
    &:hover {
      transform: scale(1.2, 1);
    }
  `;

  return (
    <Div
      style={{
        flexDirection: 'column',
        padding: '80px',
        gap: '20px'
      }}
    >
      <Title>Others</Title>
      <Div
        style={{
          justifyContent: 'space-between'
        }}
      >
        <Half>
          <P>
            Here you can collaborate and be part of other’s success by sharing drives and ressources
          </P>

          <Btn

            onClick={sendEmail}>
            click me
          </Btn>
        </Half>
        <Half>

          <P>
            By being part of this comunity you are suppose to respect the terms and conditions of use
          </P>
          <Button>
            Terms and conditions
          </Button>
        </Half>
      </Div>

    </Div>
  )
}

export default Other