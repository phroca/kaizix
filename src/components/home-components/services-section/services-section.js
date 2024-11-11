import { motion } from "framer-motion";
import * as React from "react";
import styled, { keyframes } from "styled-components";

import vdServices from "../../../videos/kaizix-presentation.mp4"
import vdServicesWebM from "../../../videos/kaizix-presentation.webm"
import SubHeader from "../../sub-header/sub-header"

const ServicesContainer = styled.div`
    background: white;
    //height: 100vh;
    display: grid;
    justify-content: center;
    margin: 50px 0;
    @media (min-width: 640px) and (max-width: 1080px) {
        margin: 40px;
  }
`

const ServicesSubContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
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
const ServicesRightContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(7, auto);
    justify-items: start;
    align-items: start;
    @media(max-width: 640px) {
        justify-items: center;
        align-items: center;
        grid-row: 1;
    }
    @media (min-width: 1081px) and (max-width: 1440px) {
        max-width: 450px;
    }
`;


const ServicesTitle = styled(motion.h2)`
    font-family: "FuturaMedium";
    font-size: 50px;
    color: black;
    max-width: 750px;
    @media(max-width: 640px) {
        font-size: 30px;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        font-size: 30px;
  }
  @media (min-width: 1081px) and (max-width: 1440px) {
        font-size: 40px;
    }
`
const ServiceParagraphContainer = styled.div`
    display: grid;
    justify-items: start;
    align-items: center;
`;

const ServiceParagraph = styled(motion.div)`
    display: grid;
    grid-template-rows: auto auto;
    justify-items: start;
    align-items: center;
`;

const ParagraphTitle = styled.h3`
    font-family: "FuturaMedium";
    font-size: 24px;
    color: black;
    max-width: 750px;
    @media(max-width: 640px) {
        font-size: 20px;
        margin: 20px;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        font-size: 20px;
  }
`
const ParagraphText = styled.p`
    font-family: "FuturaLt";
    font-size: 20px;
    color: black;
    max-width: 750px;
    @media(max-width: 640px) {
        font-size: 16px;
        margin: 20px;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        font-size: 16px;
  }
`
const ServicesLeftContainer = styled.div`
    display: grid;
    justify-self: start;
    justify-items: center;
    align-items: center;
    @media(max-width: 640px) {
        justify-self: center;
        grid-row: 2;
    }
`;

const ImgContainer = styled.div`
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
`

const VideoService = styled.video`
    height: auto;
    max-width: 100%;
`

const ColorGradientAnimation = keyframes`
    0% {
        background-position: 0% 70%;
    }
    50% {
        background-position: 100% 30%;
    }
    100% {
        background-position: 0% 70%;
    }
`
const ColorGradient = styled(motion.div)`
    width: 100%;
    height: 100px;
    border-radius: 10px;
    margin: 20px 0; 
    background: linear-gradient(45deg, #5BA4D9, #7FCBB1);
    background-size: 200% 400%;
    animation-name: ${ColorGradientAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    //animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
    @media(max-width: 640px) {
        height: 100px;
        margin: 5px 0 20px 0; 
    }
`

const serviceData = [
    {
        "id": 1,
        "title": "Developpement Web",
        "text": "Notre point fort est le développement web sur le cycle complet : Nous pouvons prendre un projet à partir d’un idée et de la traduire en solution. Cela inclut la conception, la construction la marque, envelopper le tout dans le code et lancer le site Web."
    },
    {
        "id": 2,
        "title": "Developpement Mobile",
        "text": "Nous créons des applications mobiles sur toutes les plateformes (Android & iOS). Notre expertise nous permet de développer des solutions pour diverses entreprises, notamment dans e-commerce, la santé, l’éducation, l’innovation et technologie, l’ioT, etc. "
    },
    {
        "id": 3,
        "title": "Design",
        "text": "La conception de sites web et d’applications a un but en terme de visuel et d’expérience utilisateur. Grâce à nos compétences en UX/UI, nous créons des visuels attrayants et efficaces. "
    },
    {
        "id": 4,
        "title": "Service de maintenance",
        "text": "Un site web ou une application web n’est pas statique et doit être en constante évolution. Nous nous efforçons de maintenir et de garantir le fonctionnement optimal en terme de sécurité et de stabilité avec les dernières technologies."
    },
    {
        "id": 5,
        "title": "Formations et mentorat",
        "text": "Nous proposons des services de formation et de mentorat pour aider les entreprises à développer leurs compétences en matière de développement web mais aussi d’utilisation de nos outils développé pour ces entreprises."
    }

];

const ServiceSection = () => {

    return (
        <ServicesContainer id="services">
            <ServicesSubContainer>
                <ServicesLeftContainer>
                    <ImgContainer>
                        <VideoService autoPlay={true} loop preload="auto" muted src={vdServices}>
                            <source src={vdServices} type="video/mp4" />
                            <source src={vdServicesWebM} type="video/webm" />
                        </VideoService>
                    </ImgContainer>
                    <ColorGradient />
                </ServicesLeftContainer>
                <ServicesRightContainer>
                    <SubHeader color="#000000" text="Nos services" />
                    <ServicesTitle >Ce que nous proposons</ServicesTitle>
                    <ServiceParagraphContainer>
                        {serviceData.map((service, index) => (
                            <ServiceParagraph key={service.id}>
                                <ParagraphTitle>
                                    {service.title}
                                </ParagraphTitle>
                                <ParagraphText>
                                    {service.text}
                                </ParagraphText>
                            </ServiceParagraph>
                        ))}
                    </ServiceParagraphContainer>
                </ServicesRightContainer>
            </ServicesSubContainer>
        </ServicesContainer>
    )

}

export default ServiceSection;