import * as React from "react";
import { Link } from "gatsby";
import "./header.css";
import { useState, useEffect } from "react";
import logoKaizix from "../../images/kaizix-logo.png";
import styled from "styled-components";
import open from "../../images/header/menu-open.png";
import close from "../../images/header/menu-close.png";

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
  @media(max-width: 640px) {
    height: ${props => props.heightMobile ? "unset" :"60px"};
    background: white;
  }
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
    justify-items: center;
    align-items: center;
    text-decoration: none;
    justify-self: start;
    font-family: "FuturaMedium";
    font-size: 24px;
    cursor: pointer;
  }

  @media(max-width: 640px) {
    grid-template-columns: none;
    grid-template-rows: repeat(3, 1fr);
    width: auto;
    a {
      justify-self: center;
      
    }
    }
  `;

const GroupLink = styled.div`
    @media(max-width: 640px) {
      display: grid;
      grid-template-columns: auto auto;
      justify-items: center;
      align-items: center;
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
  @media(max-width: 640px) {
    grid-template-columns: none;
    justify-self: center;
    grid-template-rows: repeat(3, 1fr);
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
  @media(max-width: 640px) {
    justify-self: center;
    }
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
  cursor: pointer;
  @media(max-width: 640px) {
    width: 200px;
    font-size: 16px;
    }
`;

const ImgMobileContainer = styled.div`
@media(max-width: 640px) {
  align-items: center;
  justify-items: center;
  justify-self: center;
}
`
const ImgMobile = styled.img`
  @media(max-width: 640px) {
    width: 48px;
    height: 48px;
    margin: 0 20px;
    }
`

const Header = () => {
   const [hasScrolled, setHasScrolled] = useState(false);
   const [isMenuOpened, setMenuOpened] = useState(false);
   const [isMobile, setIsMobile] = useState(false);

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
    /* Cleanup function */
    return()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 640px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }

        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        }
    },[])
  

  const handleScroll = (event) => {
    const scrollTop = window.scrollY;
    if(scrollTop > 50){
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }

  const handleToggleMenu = () => {
    setMenuOpened(isMenuOpened => !isMenuOpened);
  }

    return (
      <div>
        <HeaderContainer hasScrolled={hasScrolled} heightMobile={isMenuOpened}>
            <HeaderGroup>
              <GroupLink><Link to="/"><HeaderLogo src={logoKaizix} alt="kaizix-logo" /></Link>{isMobile && <ImgMobileContainer onClick={handleToggleMenu}><ImgMobile src={isMenuOpened ? close: open}/></ImgMobileContainer> }</GroupLink>
              {((isMobile && isMenuOpened) || !isMobile) && <><NavGroup>
                <HeaderButton>Les travaux</HeaderButton>
                <HeaderButton>Les services</HeaderButton>
                <HeaderButton>À propos</HeaderButton>
              </NavGroup>
              <CtaButtonContainer>
                <CtaButton>
                  Discutons de votre projet
                </CtaButton>
              </CtaButtonContainer> </>}
            </HeaderGroup>
        </HeaderContainer>
      </div>
    )
  
}

export default Header
