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
    @media (min-width: 640px) and (max-width: 1080px) {
        height: auto;
        margin: 40px;
  }
  @media (min-width: 1081px) and (max-width: 1440px) {
    margin: 40px;
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
    @media (min-width: 640px) and (max-width: 1080px) {
        font-size: 30px;
  }
  @media (min-width: 1081px) and (max-width: 1440px) {
        font-size: 40px;
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
    @media (min-width: 640px) and (max-width: 1080px) {
        width: unset;
  }
  @media (min-width: 1081px) and (max-width: 1440px) {
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
        grid-template-rows: auto auto;
        margin: 20px;
    }

    @media (min-width: 640px) and (max-width: 1080px) {
        grid-template-rows: auto auto;
  }
`;

const EngagementColumnImgContainer = styled.div`
    background: #F8F8F8;
    border-radius: 10px;
    height: 200px;
    width: 350px;
    display: grid;
    justify-content: center;
    justify-items: center;
    align-content: center;
    @media (min-width: 640px) and (max-width: 1080px) {
        height: 150px;
        width: 200px;
  }
`;

const EngagementColumnImg = styled.img`
    height: 200px;
    width: auto;
    
    transition: all 0.6s ease;
    &:hover{
        transform: scale(1.1);
    }

    @media(max-width: 640px) {
        height: 150px;
        width: 150px;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        height: 150px;
        width: 150px;
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
    @media (min-width: 640px) and (max-width: 1080px) {
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
    @media (min-width: 640px) and (max-width: 1080px) {
        font-size: 20px;
  }
`;

const EngagementSection = () => {
    return(
        <EngagementContainer>
            
            <EngagementSubContainer>
                <SubHeader  color="#CEB5A7" text="un engagement adapté"/>
                <EngagementTitle>Lorsque nous collaborons, nous créons ensemble plus qu’un site ou une appli.</EngagementTitle>
                <EngagementColumnsContainer>
                <EngagementColumnContainer>
                    <EngagementColumnImgContainer>
                        <EngagementColumnImg  src={un}/>
                    </EngagementColumnImgContainer> 
                    <EngagementColumnText  >
                    Quand une société de grande taille veut être à la pointe de la technologie, être performant.
                    </EngagementColumnText>
                </EngagementColumnContainer>
                <EngagementColumnContainer>
                    <EngagementColumnImgContainer>
                        <EngagementColumnImg src={deux}/>
                    </EngagementColumnImgContainer> 
                    <EngagementColumnText>
                    Quand une PME veut évoluer, augmenter sa productivité, automatiser certaines tâches ou augmenter sa visibilité.
                    </EngagementColumnText>
                </EngagementColumnContainer>
                <EngagementColumnContainer>
                    <EngagementColumnImgContainer>
                        <EngagementColumnImg src={trois}/>
                    </EngagementColumnImgContainer> 
                    <EngagementColumnText>
                    Quand une startup ou un porteur de  projet a besoin d’un accompagnement afin de booster son business sur le web.
                    </EngagementColumnText>
                </EngagementColumnContainer>   
                </EngagementColumnsContainer>
                <EngagementText>Nous vous aidons à obtenir une plus grande présence en ligne, 
            de proposer une offre qui soit adaptée à vos besoins et votre image de marque. 
            Pour ce faire, nous nous appuyons sur une conception esthétique et innovante basée sur l’expérience utilisateur, 
            un développement rigoureux et une éthique de travail saine et transparente sur ses méthodes. 
            Nous transformons vos projets en résultats concrets.</EngagementText>
            </EngagementSubContainer> 
        </EngagementContainer>
    )
}

export default EngagementSection;