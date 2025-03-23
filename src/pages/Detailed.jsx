import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { specialities } from "../assets/links";
import { colors } from "../assets/style"; // ✅ استيراد الألوان

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
`;

const Title = styled.h2`
  color: ${colors.primary}; // ✅ استخدام اللون مباشرةً
  text-align: center;
  margin-bottom: 40px;
`;

const YearContainer = styled.div`
  margin-bottom: 10px;
  border: 1px solid ${colors.primary}; // ✅ استخدام اللون مباشرةً
  border-radius: 5px;
  overflow: hidden;
`;

const YearHeader = styled.div`
  background: ${colors.secondary};
  color: ${colors.black};
  padding: 10px;
  font-size: 18px;
  &:hover {
    background: ${colors.primary};
  }
`;

const YearContent = styled.div`
  background: #f9f9f9;
  padding: 10px;
  display: ${() => (true ? "block" : "none")};
`;

const DriveLink = styled.a`
  display: block;
  margin: 5px 0;
  color: ${colors.primary}; // ✅ استخدام اللون مباشرةً
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const P = styled.p`
  color: ${colors.primary}; // ✅ استخدام اللون مباشرةً
  text-align: center;`;

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:20px;
`;

function Detailed() {
  const { name } = useParams();
  const speciality = specialities.find((speciality) => speciality.name === name);
  const [openYears, setOpenYears] = useState({});

  if (!speciality) {
    return <Title>Speciality not found</Title>;
  }

  const toggleYear = (id) => {
    setOpenYears((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Container>
      <Title>{speciality.name.toUpperCase()} Speciality</Title>
      {speciality.years.map((year) => (
        <YearContainer key={year.id}>
          <YearHeader onClick={() => toggleYear(year.id)}>{year.year}</YearHeader>
          <YearContent isOpen={openYears[year.id]}>
            {year.drives.map((drive) => (
              <Div>
              <P>{drive.year}</P>
              <DriveLink key={drive.id} href={drive.driveLink} target="_blank">
                {drive.faculty} - Google Drive Link
              </DriveLink>
              </Div>
            ))}
          </YearContent>
        </YearContainer>
      ))}
    </Container>
  );
}

export default Detailed;
