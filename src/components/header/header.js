import * as React from "react"
import { Link } from "gatsby"
import "./header.css"
import { useState, useEffect } from "react"
import logoKaizix from "../../images/kaizix-logo.png"
import styled from "styled-components"

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  padding: ${props => props.hasScrolled === true ? "30px 0": "20px 0"};
  z-index: 100;
  display: grid;
  justify-items: center;
  justify-content: center;
  transition: 0.5s;
  background: ${props => props.hasScrolled === true ? "rgba(255, 255, 255, 0.9)": "none"};
`;

const HeaderLogo = styled.img`
  width: 211px;
  height: 100px;
`


const HeaderGroup = styled.div`
  width: 70vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  a{
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    text-decoration: none;
    justify-self: start;
    font-family: "FuturaMedium";
    font-size: 24px;
    cursor: pointer;
  }
  `;

const NavGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  justify-self: end;
  grid-gap: 5px;
  max-width: 375px;
  button {
    cursor: pointer;
  }
  a {
    display: grid;
  }
`;

const HeaderButton = styled.button`
  outline: none;
  border: none;
  background: none;
  font-family: "FuturaMedium";
  color: black;
  text-transform: uppercase;
  width: 120px;
`;

const CtaButtonContainer = styled.div`
  align-items: center;
  justify-items: center;
  justify-self: end;
`;
const CtaButton = styled.button`
  background : #5BA4D9;
  font-family: "FuturaLt";
  border-radius: 10px;
  width: 280px;
  height :60px;
  color: white;
  font-size: 20px;
  outline: none;
  border: none;
`;

const Header = () => {
   const [hasScrolled, setHasScrolled] = useState(false);
   //const [isMenuOpened, setMenuOpened] = useState(false);
   
  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
    /* Cleanup function */
    return()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  

  const handleScroll = (event) => {
    const scrollTop = window.scrollY;
    if(scrollTop > 50){
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }


    return (
      <div>
        <HeaderContainer hasScrolled={hasScrolled}>
            <HeaderGroup>
              <Link to="/"><HeaderLogo src={logoKaizix} alt="kaizix-logo" /></Link>
              <NavGroup>
                <HeaderButton>Les travaux</HeaderButton>
                <HeaderButton>Les services</HeaderButton>
                <HeaderButton>À propos</HeaderButton>
              </NavGroup>
              <CtaButtonContainer>
                <CtaButton>
                  Discutons de votre projet
                </CtaButton>
              </CtaButtonContainer>
            </HeaderGroup>
        </HeaderContainer>
      </div>
    )
  
}

export default Header
