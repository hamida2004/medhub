import React from 'react'
import styled from 'styled-components'
import { colors } from '../assets/style'
import logo from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
function Body() {
  const navigate = useNavigate()
  const Div = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:80px;
  gap:20px;
  flex-wrap:wrap;
  @media (max-width: 1024px) {
    padding: 40px; 
    justify-content:center;
    /* للأجهزة اللوحية (تابلت) */
  }

  @media (max-width: 768px) {
    padding: 20px;
    justify-content:center;
    
    /* للهواتف المحمولة */
  }
  
  `

  const Half = styled.div`
  width:40%;
  min-width:300px;
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

  const A = styled(Link)`
  text-decoration:none;
  text-align:left;
  cursor:pointer;
  color:${colors.black};
  &:hover {
      transform: scale(1.1, 1);
    }
  `

  const Card = styled.div`
  border-radius:16px;
  width:200px;
  padding:20px;
  display:flex;
  min-width:200px;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:20px;
  background-color:${colors.white};
  box-shadow: 2px 2px 4px ${colors.white};
  max-height:300px;
  overflow:hidden;
  margin:0px 20px;

  `

  const ListContainer = styled.ul`
  list-style: none;
  width:100%;
  padding:0px 20px;
  display:flex;
  align-items:center;
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
            justifyContent: 'center'
          }}
        >
          <Card>

            <A
              style={{
                fontWeight: 500,
                fontSize: "1.2rem",
                color: colors.primary
              }}
              to={'/detailed/pharma'}
            >Pharma</A>
            <ListContainer>
              <ListItem><A to='https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'>1st year</A></ListItem>
              <ListItem><A to='https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'>2nd year</A></ListItem>
              <ListItem><A to='https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'>3rd year</A></ListItem>
              <ListItem><A to='https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'>4th year</A></ListItem>
              <ListItem><A to='https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'>5th year</A></ListItem>
              <ListItem><A to='https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'>6th year</A></ListItem>
              <ListItem><A to='/detailed/pharma'
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
              to={'/detailed/medicine'}
            >Medcine</A>
            <ListContainer>
              <ListItem><A to={'https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'}>1st year</A></ListItem>
              <ListItem><A to={'https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'}>2nd year</A></ListItem>
              <ListItem><A to={'https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'}>3rd year</A></ListItem>
              <ListItem><A to={'https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'}>4th year</A></ListItem>
              <ListItem><A to={'https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'}>5th year</A></ListItem>
              <ListItem><A to={'https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'}>6th year</A></ListItem>
              <ListItem><A to={'https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'}>7th year</A></ListItem>
              <ListItem><A to={'/detailed/medicine'}
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
              to={'/detailed/dental'}
            >Dental</A>
            <ListContainer>
              <ListItem><A to={'https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'}>1st year</A></ListItem>
              <ListItem><A to={'https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'}>2nd year</A></ListItem>
              <ListItem><A to={'https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'}>3rd year</A></ListItem>
              <ListItem><A to={'https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'}>4th year</A></ListItem>
              <ListItem><A to={'https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'}>5th year</A></ListItem>
              <ListItem><A to={'https://drive.google.com/drive/folders/1-0G8KYEe_UD7i2OKq6jIQVpSsQmELaWu'}>6th year</A></ListItem>
              <ListItem><A
                to='/detailed/dental'
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