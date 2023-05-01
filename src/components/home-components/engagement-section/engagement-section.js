import * as React from "react"
import styled from "styled-components"

import SubHeader from "../../sub-header/sub-header"
// import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import un from "../../../images/home/engagement-section/engagement-1.png"
import deux from "../../../images/home/engagement-section/engagement-2.png"
import trois from "../../../images/home/engagement-section/engagement-3.png"

const EngagementContainer = styled(motion.div)`
    background: white;
    height: 100vh;
    display: grid;
    justify-content: center;
    margin: 20px 0;
    @media(max-width: 640px) {
        height: unset;
    }
`;

const EngagementTitle = styled(motion.h2)`
    font-family: "FuturaMedium";
    font-size: 50px;
    color: black;
    text-align: center;
    max-width: 800px;
    @media(max-width: 640px) {
        font-size: 30px;
    }
`;

const EngagementSubContainer = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    width: 70vw;    
    @media(max-width: 640px) {
        width: unset;
    }
`;

const EngagementColumnsContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    @media(max-width: 640px) {
        grid-template-columns: none;
        grid-template-rows: repeat(3, auto);
    }
`;

const EngagementColumnContainer = styled(motion.div)`
    display: grid;
    grid-template-rows: 200px auto;
    justify-content: center;
    justify-items: center;
    @media(max-width: 640px) {
        grid-template-rows: 150px auto;
        margin: 20px;
    }
`;

const EngagementColumnImg = styled.img`
    height: 200px;
    width: 350px;
    background: #F8F8F8;
    border-radius: 10px;
    transition: all 0.6s ease;
    &:hover{
        transform: scale(1.1);
    }

    @media(max-width: 640px) {
        height: 150px;
        width: 200px;
    }
`;

const EngagementColumnText = styled.div`
    font-family: "FuturaLt";
    font-size: 20px;
    color: black;
    text-align: center;
    margin: 10px 0 0 10px;

    @media(max-width: 640px) {
        font-size: 16px;
    }
`;

const EngagementText = styled(motion.p)`
    font-family: "FuturaLt";
    font-size: 24px;
    color: black;
    text-align: center;
    @media(max-width: 640px) {
        font-size: 20px;
        margin: 20px;
    }
`;


const columnsContainerVariants = {
    offscreen: {
        opacity: 0,
    }, 
    onscreen: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            type: "spring",
            duration: 1,
        }
    }
}
const columnVariants = {
    offscreen: {
        opacity: 0,
        y: 50
    }, 
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 1,
        }
    }
}
const EngagementSection = () => {
    return(
        <EngagementContainer>
            
            <EngagementSubContainer>
                <SubHeader initial={{opacity: 0, scale: 1.5}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1, delay: .5, ease: [0, 0.71, 0.2, 1.01]}} viewport={{once: true}} color="#CEB5A7" text="un engagement adapté"/>
                <EngagementTitle initial={{opacity: 0, scale: 1.5}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1, delay: .5, ease: [0, 0.71, 0.2, 1.01]}} viewport={{once: true}} >Lorsque nous collaborons, nous créons ensemble plus qu’un site ou une appli.</EngagementTitle>
                <EngagementColumnsContainer initial="offscreen" whileInView="onscreen" variants={columnsContainerVariants} viewport={{once: true}} >
                <EngagementColumnContainer variants={columnVariants}>
                    <EngagementColumnImg  src={un}/>
                    <EngagementColumnText  >
                    Quand une société de grande taille veut être à la pointe de la technologie, être performant 
                    </EngagementColumnText>
                </EngagementColumnContainer>
                <EngagementColumnContainer variants={columnVariants}>
                    <EngagementColumnImg src={deux}/>
                    <EngagementColumnText>
                    Quand une PME veut évoluer, augmenter sa productivité, automatiser certaines tâches ou augmenter sa visibilité
                    </EngagementColumnText>
                </EngagementColumnContainer>
                <EngagementColumnContainer variants={columnVariants}>
                    <EngagementColumnImg src={trois}/>
                    <EngagementColumnText>
                    Quand une startup ou un porteur de  projet a besoin d’un accompagnement afin de booster son business sur le web.
                    </EngagementColumnText>
                </EngagementColumnContainer>   
                </EngagementColumnsContainer>
                <EngagementText initial={{opacity: 0, scale: 1.5}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1, delay: .5, ease: [0, 0.71, 0.2, 1.01]}} viewport={{once: true}}>Nous les aidons à obtenir une plus grande présence en ligne, 
            de proposer une offre qui soit adaptée à leurs besoins et à leurs images de marque. 
            Pour ce faire, nous nous appuyons sur une conception esthétique et innovante basée sur l’expérience utilisateur, 
            un développement rigoureux et une éthique de travail saine et transparente sur ses méthodes. 
            Nous transformons leurs projets en résultats concrets.</EngagementText>
            </EngagementSubContainer> 
        </EngagementContainer>
    )
}

export default EngagementSection;