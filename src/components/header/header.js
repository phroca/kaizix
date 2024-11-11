import * as React from "react";
import { Link } from "gatsby";
import "./header.css";
import { useState, useEffect } from "react";
import logoKaizix from "../../images/kaizix-logo.png";
import logoKaizixDark from "../../images/kaizix-logo-dark.png";
import styled from "styled-components";
import open from "../../images/header/menu-open.png";
import close from "../../images/header/menu-close.png";
import { motion } from "framer-motion";
import { navigate } from "gatsby-link";

const HeaderContainer = styled(motion.div)`
  position: fixed;
  width: 100%;
  padding: ${props => props.hasScrolled === true ? "30px 0" : "20px 0"};
  z-index: 100;
  display: grid;
  justify-items: center;
  justify-content: center;
  transition: 0.5s;
  background: ${props => props.hasScrolled === true ? props.isDark === true ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)" : "none"};
  @media(max-width: 640px) {
    height: ${props => props.heightMobile ? "unset" : "60px"};
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

    @media (min-width: 640px) and (max-width: 1080px) {
        width: 100%;
        grid-template-columns: repeat(3, auto);
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
  grid-template-columns: repeat(4, auto);
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
    grid-template-rows: repeat(4, 1fr);
    }
    @media (min-width: 640px) and (max-width: 1080px) {
      grid-template-columns: repeat(4, auto);
  }
`;

const HeaderButton = styled.button`
  outline: none;
  border: none;
  background: none;
  font-family: "FuturaMedium";
  color: ${props => props.isDark === true ? "#9d9dad" : "black"};
  text-transform: uppercase;
  min-width: 120px;
  max-width: 180px;
  @media (min-width: 640px) and (max-width: 1080px) {
      width: 100px;
  }
`;

const CtaButtonContainer = styled.div`
  align-items: center;
  justify-items: center;
  justify-self: end;
  @media(max-width: 640px) {
    justify-self: center;
    }

    @media (min-width: 640px) and (max-width: 1080px) {
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

  @media (min-width: 640px) and (max-width: 1080px) {
      width: 100%;
      font-size: 16px;
      height :40px;
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

const Header = (props) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    /* Cleanup function */
    return () => {
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
  }, [])


  const handleScroll = (event) => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
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
      <HeaderContainer initial={{ opacity: 0, y: -200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} hasScrolled={hasScrolled} isDark={props.isDark} heightMobile={isMenuOpened}>
        <HeaderGroup>
          <GroupLink><Link to="/"><HeaderLogo src={props.isDark === true ? logoKaizixDark : logoKaizix} alt="kaizix-logo" /></Link>{isMobile && <ImgMobileContainer onClick={handleToggleMenu}><ImgMobile src={isMenuOpened ? close : open} /></ImgMobileContainer>}</GroupLink>
          {((isMobile && isMenuOpened) || !isMobile) && <><NavGroup>
            {/* <HeaderButton isDark={props.isDark} onClick={() => navigate("/projets")} >Nos projets</HeaderButton>*/}
            <HeaderButton isDark={props.isDark} onClick={() => navigate("#services")} >Nos services</HeaderButton>
            <HeaderButton isDark={props.isDark} onClick={() => navigate("#realisations")} >Nos réalisations</HeaderButton>
            {/* <HeaderButton isDark={props.isDark} onClick={() => navigate("/blog")} >Blog</HeaderButton>
                <HeaderButton isDark={props.isDark} onClick={() => navigate("/calculateur-de-projets")} >Calculateur de projets</HeaderButton>  */}
          </NavGroup>
            <CtaButtonContainer>
              <CtaButton onClick={props.onclick}>
                Discutons de votre projet
              </CtaButton>
            </CtaButtonContainer> </>}
        </HeaderGroup>
      </HeaderContainer>
    </div>
  )

}

export default Header
