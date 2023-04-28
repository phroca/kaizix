import * as React from "react"
import styled, {keyframes} from "styled-components"

import LogoCanvas from "../../canvas/logo"
import SubHeader from "../../sub-header/sub-header"

const HeroContainer = styled.div`
    background: white;
    height: 100vh;
    display: grid;
    justify-content: center;
    padding-top: 50px;
    @media(max-width: 640px) {
        padding-top: 150px;
        height: auto;
    }
`

const HeroSubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    width: 70vw;
    @media(max-width: 640px) {
        grid-template-rows: auto auto;
        grid-template-columns: none;
        width: unset;
    }
`;
const HeroLeftContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(4, auto);
    justify-items: start;
    align-items: start;
    @media(max-width: 640px) {
        justify-items: center;
        align-items: center;
    }
`;


const HeroTitle = styled.h1`
    font-family: "FuturaBold";
    font-size: 60px;
    color: black;
    max-width: 750px;
    @media(max-width: 640px) {
        font-size: 30px;
        max-width: unset;
        margin: 20px;
    }
`

const HeroText = styled.p`
    font-family: "FuturaLt";
    font-size: 24px;
    color: black;
    max-width: 750px;
    @media(max-width: 640px) {
        font-size: 16px;
        max-width: unset;
        margin: 20px;
    }
`
const HeroRightContainer = styled.div`
    display: grid;
    justify-self: end;
    justify-items: center;
    align-items: center;
    @media(max-width: 640px) {
        justify-self: center;
    }
`;

const ImgContainer = styled.div`

    height: 650px;
    width: 500px;
    background: #F8F8F8;
    border-radius: 10px;
    @media(max-width: 640px) {
        height: 300px;
        width: 200px;
        margin: 20px 0 20px 0;
    }
`


const HeroSection = () => {

    return(
        <HeroContainer>
            <HeroSubContainer>
                <HeroLeftContainer>
                    <SubHeader color="#5BA4D9" text="à la pointe de votre besoin"/>
                    <HeroTitle>KAIZIX - Agence de développement web & création digitale</HeroTitle>
                    <HeroText>Nous sommes une agence de développement dans la création de sites web,
                     d’application web et mobile. Nous apportons des solutions innovantes aux entreprises 
                     afin de construire une relation saine avec leurs clients à travers un design adapté, 
                     des performances élevés et une visibilité accrue de leurs business.</HeroText>
                </HeroLeftContainer>
                <HeroRightContainer>
                    <ImgContainer>
                        {/* <ImgHero src={imgHero} /> */}
                        <LogoCanvas />
                    </ImgContainer>
                </HeroRightContainer>
            </HeroSubContainer>
        </HeroContainer>
    )
}

export default HeroSection;