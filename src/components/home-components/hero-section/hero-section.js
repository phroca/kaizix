import * as React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"

import imgHero from "../../../images/home/hero-section/hero-img-tr.png"
import SubHeader from "../../sub-header/sub-header"

const HeroContainer = styled.div`
    background: white;
    height: 100vh;
    display: grid;
    justify-content: center;
`

const HeroSubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    width: 70vw;
`;
const HeroLeftContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(4, auto);
    justify-items: start;
    align-items: start;
`;


const HeroTitle = styled.h1`
    font-family: "FuturaBold";
    font-size: 60px;
    color: black;
    max-width: 750px;
`

const HeroText = styled.p`
    font-family: "FuturaLt";
    font-size: 24px;
    color: black;
    max-width: 750px;
`
const HeroRightContainer = styled.div`
    display: grid;
    justify-self: end;
    justify-items: center;
    align-items: center;
`;

const ImgHero = styled.img`
    height: 650px;
    background: #F8F8F8;
    border-radius: 10px;
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
                    <ImgHero src={imgHero} />
                </HeroRightContainer>
            </HeroSubContainer>
        </HeroContainer>
    )
}

export default HeroSection;