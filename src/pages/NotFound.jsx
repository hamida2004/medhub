import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../assets/style'


function NotFound() {
  const navigate = useNavigate();
  const Button = styled.button`
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
  const Div = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:80px;
  gap:20px;
  flex-direction:column;

  `
  const H1 = styled.h1`
  color:${colors.black}
  font-size:3rem;
  font-weight:700;

  `
  return (
    <Div>
      <H1
        style={{
          color: colors.primary,
          fontSize
            : '2rem',
          fontWeight: 500
        }}
      >Ooops</H1>
      <H1>404 - Page Not Found!</H1>
      <Button onClick={() => navigate('/')}>Go Home</Button>
    </Div>
  )
}

export default NotFound