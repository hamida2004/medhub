import React from 'react'
import styled from 'styled-components'
import { colors } from '../assets/style'
import logo from '../assets/images/logo.png'
function Body() {

  const Div = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:80px;
  gap:20px

  `

  const Half = styled.div`
  width:40%;
  display:flex;
  flex-direction:column;
  gap:20px;
  align-items:center;
  justify-content:center
  `
  const Image = styled.img`
  width:50%;

  
  `

  const Title = styled.h1`
  color:${colors.black}
  text-align: center;
  font-size:1.4rem

  `
  const H2 = styled.h2`
  color:${colors.black}
  font-size:1.2rem;
  font-weight:500;
  text-align:left

  `
  const P = styled.p`
  color:${colors.black}
  font-size:1.2rem;
  font-weight:500;
  text-align:left

  `

  const A = styled.a`
  text-decoration:none;
  text-align:left;
  cursor:pointer;

  &:hover {
      transform: scale(1.1, 1);
    }
  `

  const Card = styled.div`
  border-radius:16px;
  width:200px;
  padding:20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:20px;
  background-color:${colors.white};
  box-shadow: 2px 2px 4px ${colors.white}
  `

  const ListContainer = styled.ul`
  list-style: none;
  width:100%;
  padding:0px 20px;
  display:flex;
  align-items:start;
  justify-content:center;
  flex-direction:column;
  gap:12px;
  `
  const ListItem = styled.li`
  width:100%;
  &:hover {
      transform: scale(1.2, 1);
    }
  
  `
  return (
    <>
      <Div
        style={{
          backgroundColor: colors.white
          ,
          height: '80vh'
        }}
      >
        <Half>
          <Image
            src={logo}
            alt='logo'
          />
          <H2>your medecine studies assistnat </H2>

        </Half>
        <Half>

          <P>
            Midhub is a platform where you can easily find your courses , tds , tps and also exams and solutions. made by students to help students and encourage colaboration between them.  You are a medicine student , dental or pharmacy , here you find all what you need !
          </P>
        </Half>

      </Div>
      <Div
        style={{
          backgroundColor: colors.secondary,
          flexDirection: "column",
        }}
      >
        <Title>Resources</Title>
        <Div
          style={{
            height: '80%',
            padding: '0px 80px'
          }}
        >
          <Card>

            <A
              style={{
                fontWeight: 500,
                fontSize: "1.2rem",
                color: colors.primary
              }}
            >Pharma</A>
            <ListContainer>
              <ListItem><A>1st year</A></ListItem>
              <ListItem><A>2nd year</A></ListItem>
              <ListItem><A>3rd year</A></ListItem>
              <ListItem><A>4th year</A></ListItem>
              <ListItem><A>5th year</A></ListItem>
              <ListItem><A>6th year</A></ListItem>
              <ListItem><A
                style={{ fontWeight: 500 }}
              >Other</A></ListItem>
            </ListContainer>
          </Card>
          <Card>

            <A
              style={{
                fontWeight: 500,
                fontSize: "1.2rem",
                color: colors.primary
              }}
            >Medcine</A>
            <ListContainer>
              <ListItem><A>1st year</A></ListItem>
              <ListItem><A>2nd year</A></ListItem>
              <ListItem><A>3rd year</A></ListItem>
              <ListItem><A>4th year</A></ListItem>
              <ListItem><A>5th year</A></ListItem>
              <ListItem><A>6th year</A></ListItem>
              <ListItem><A>7th year</A></ListItem>
              <ListItem><A
                style={{ fontWeight: 500 }}
              >Other</A></ListItem>
            </ListContainer>
          </Card>
          <Card>

            <A
              style={{
                fontWeight: 500,
                fontSize: "1.2rem",
                color: colors.primary
              }}
            >Dental</A>
            <ListContainer>
              <ListItem><A>1st year</A></ListItem>
              <ListItem><A>2nd year</A></ListItem>
              <ListItem><A>3rd year</A></ListItem>
              <ListItem><A>4th year</A></ListItem>
              <ListItem><A>5th year</A></ListItem>
              <ListItem><A>6th year</A></ListItem>
              <ListItem><A
                style={{ fontWeight: 500 }}
              >Other</A></ListItem>
            </ListContainer>
          </Card>

        </Div>
      </Div>
    </>
  )
}

export default Body