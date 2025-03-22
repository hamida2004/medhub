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
  height :40vh;
  background-color:${colors.white}
  
  `

  return (
    <Div>

    </Div>
  )
}

export default Other