import React from 'react'
import styled from 'styled-components'
import { colors } from '../assets/style'

function Footer() {

  const Div = styled.footer`
  width:100%;
  height :40px;
  background-color:${colors.secondary};
  display:flex;
  align-items:center;
  justify-content:center;
  `
  const P = styled.p`
  color:${colors.black}
  `
  const year = new Date().getFullYear()
  return (
    <Div>
      <P>© copyright{year}</P>
    </Div>
  )
}

export default Footer