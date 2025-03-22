import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { BsList } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { colors } from '../assets/style'

const NavBar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;
  position: fixed;
  z-index: 2;
  top: 0px;
  left: 0px;
  background-color: ${colors.white};
  box-shadow: 0px 0px 4px ${colors.secondary};
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Image = styled.img`
  height: 40px;
  z-index: 3;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    height: calc(100vh - 60px);
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  }
`;

const A = styled.a`
  text-decoration: none;
  color:${colors.black};
  padding: 4px 8px;
  &:hover {
    color: ${colors.primary};
    transform: scale(1.1, 1);
  }
`;

const ScrollButton = styled.button`
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

function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollDown = () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.scrollY + window.innerHeight + 40,
        behavior: "smooth",
      });
    }, 100);
  };

  // Update `isMobile` state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavBar>
      <A href="/">
        <Image src={logo} alt="logo" />
      </A>
      {isMobile && !isMenuOpen && (
        <BsList
          color="#02E1C3"
          size={40}
          style={{ cursor: "pointer" }}
          onClick={() => setIsMenuOpen(true)}
        />
      )}
      {isMobile && isMenuOpen && (
        <IoClose
          color="#02E1C3"
          size={40}
          style={{ cursor: "pointer" }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <Ul isMenuOpen={isMenuOpen}>
        <A href="/" onClick={() => setIsMenuOpen(false)}>
          Medcine
        </A>

        <A href="/" onClick={() => setIsMenuOpen(false)}>
          Parma
        </A>

        <A href="/" onClick={() => setIsMenuOpen(false)}>
          Dental
        </A>


      </Ul>
      <ScrollButton onClick={() => {
        scrollDown();
        setIsMenuOpen(false);
      }}>
        Contact
      </ScrollButton>
    </NavBar>
  );
}

export default Nav;
