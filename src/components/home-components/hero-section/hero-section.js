import * as React from "react"
import styled from "styled-components"

import LogoCanvas from "../../canvas/logo"
import { motion } from "framer-motion"

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
    @media (min-width: 640px) and (max-width: 1080px) {
        padding-top: 150px;
        height: auto;
        margin: 0 40px;
  }
`

const HeroSubContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    align-items: center;
    width: 70vw;
    @media(max-width: 640px) {
        grid-template-rows: auto auto;
        grid-template-columns: none;
        width: unset;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        width: unset;
        grid-template-columns: auto auto;
        gap: 20px;
  }
`;
const HeroLeftContainer = styled(motion.div)`
    display: grid;
    grid-template-rows: repeat(4, auto);
    justify-items: start;
    align-items: start;
    @media(max-width: 640px) {
        justify-items: center;
        align-items: center;
    }
`;


const HeroTitle = styled(motion.h1)`
    font-family: "FuturaBold";
    font-size: 55px;
    color: black;
    max-width: 750px;
    margin: 25px 0;
    @media(max-width: 640px) {
        font-size: 30px;
        max-width: unset;
        margin: 20px;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        font-size: 40px;
  }
`;

const HeroText = styled(motion.p)`
    font-family: "FuturaLt";
    font-size: 24px;
    color: black;
    max-width: 750px;
    @media(max-width: 640px) {
        font-size: 16px;
        max-width: unset;
        margin: 20px;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        font-size: 20px;
  }
`;
const HeroRightContainer = styled(motion.div)`
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
    @media (min-width: 640px) and (max-width: 1080px) {
        height: 400px;
        width: 300px;
  }
`;

const HeroCTA = styled(motion.div)`
    border: solid 1px #5BA4D9;
    border-radius: 10px;
    display: grid;
    align-items: center;
    justify-items: center;
    padding: 10px;
    cursor: pointer;
    transition: all 0.6s ease;
    &:hover {
        background: #5BA4D9;
        div {
            color: #FFFFFF;
        }
    }

`
const HeroCTAText = styled.div`
    font-family: "FuturaMedium";
    font-size: 20px;
    color: #5BA4D9;
`

const SubHeaderContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: 30px auto;
    justify-items: center;
    align-items: center;
    border-radius: 10px;
    border: solid 1px #DDDDDD;
    min-width: 350px;
    padding: 5px;
    @media(max-width: 640px) {
        min-width: unset;
    }
`
const SubHeaderCercle = styled.div`
    width : 25px;
    height: 25px;
    background: #5BA4D9;
    border-radius: 50px;
`
const SubHeaderTexte = styled.div`
    font-family: "FuturaMedium";
    font-size: 20px;
    color: #000000;
    text-transform: uppercase;
    @media(max-width: 640px) {
        font-size: 16px;
    }
`

const HeroSection = (props) => {

    return(
        <HeroContainer>
            <HeroSubContainer>
                <HeroLeftContainer >
                    <SubHeaderContainer initial={{opacity: 0, scale: 1.5, x: 200}} animate={{opacity: 1, scale: 1, x: 0}} transition={{duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                        <SubHeaderCercle />
                        <SubHeaderTexte>à la pointe de votre besoin</SubHeaderTexte>
                    </SubHeaderContainer>
                    <HeroTitle initial={{opacity: 0, scale: 1.5, x: 200}} animate={{opacity: 1, scale: 1, x: 0}} transition={{duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>L'engagement de vous offrir le meilleur en matière de performance et d'esthétisme.</HeroTitle>
                    <HeroText initial={{opacity: 0, scale: 1.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 1, delay: 0.8, ease: [0, 0.71, 0.2, 1.01]}}>Nous sommes une agence de développement dans la création de sites web,
                     d’application web et mobile. Avec KAIZIX, Nous vous accompagnons dans la création de produits esthétiques, performants et personnalisés pour booster votre activité et vous différencier de la concurrence.
                     </HeroText>
                     <HeroCTA initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1.2, ease: [0, 0.71, 0.2, 1.01]}}>
                        <HeroCTAText onClick={props.click}>
                        Discutons de votre projet
                        </HeroCTAText>
                     </HeroCTA>
                </HeroLeftContainer>
                <HeroRightContainer initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                    <ImgContainer>
                        <LogoCanvas />
                    </ImgContainer>
                </HeroRightContainer>
            </HeroSubContainer>
        </HeroContainer>
    )
}

export default HeroSection;