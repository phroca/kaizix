import * as React from "react"
import styled from "styled-components"

import SubHeader from "../../sub-header/sub-header"

import un from "../../../images/home/engagement-section/engagement-1.png"
import deux from "../../../images/home/engagement-section/engagement-2.png"
import trois from "../../../images/home/engagement-section/engagement-3.png"

const EngagementContainer = styled.div`
    background: white;
    height: 100vh;
    display: grid;
    justify-content: center;
    margin: 20px 0 20px 0;
`;

const EngagementTitle = styled.h2`
    font-family: "FuturaMedium";
    font-size: 50px;
    color: black;
    text-align: center;
    max-width: 800px;
`;

const EngagementSubContainer = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    width: 70vw;
`;

const EngagementColumnsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
`;

const EngagementColumnContainer = styled.div`
    display: grid;
    grid-template-rows: 200px auto;
    justify-content: center;
    justify-items: center;
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
`;

const EngagementColumnText = styled.div`
    font-family: "FuturaLt";
    font-size: 20px;
    color: black;
    text-align: center;
    margin: 10px 0 0 10px;
`;

const EngagementText = styled.p`
    font-family: "FuturaLt";
    font-size: 24px;
    color: black;
    text-align: center;
`;


const EngagementSection = () => {

    return(
        <EngagementContainer>
            
            <EngagementSubContainer>
                <SubHeader color="#CEB5A7" text="un engagement adapté"/>
                <EngagementTitle>Lorsque nous collaborons, nous créons ensemble plus qu’un site ou une appli.</EngagementTitle>
                <EngagementColumnsContainer>
                <EngagementColumnContainer>
                    <EngagementColumnImg src={un}/>
                    <EngagementColumnText>
                    Quand une société de grande taille veut être à la pointe de la technologie, être performant 
                    </EngagementColumnText>
                </EngagementColumnContainer>
                <EngagementColumnContainer>
                    <EngagementColumnImg src={deux}/>
                    <EngagementColumnText>
                    Quand une PME veut évoluer, augmenter sa productivité, automatiser certaines tâches ou augmenter sa visibilité
                    </EngagementColumnText>
                </EngagementColumnContainer>
                <EngagementColumnContainer>
                    <EngagementColumnImg src={trois}/>
                    <EngagementColumnText>
                    Quand une startup ou un porteur de  projet a besoin d’un accompagnement afin de booster son business sur le web.
                    </EngagementColumnText>
                </EngagementColumnContainer>   
                </EngagementColumnsContainer>
                <EngagementText>Nous les aidons à obtenir une plus grande présence en ligne, 
            de proposer une offre qui soit adaptée à leurs besoins et à leurs images de marque. 
            Pour ce faire, nous nous appuyons sur une conception esthétique et innovante basée sur l’expérience utilisateur, 
            un développement rigoureux et une éthique de travail saine et transparente sur ses méthodes. 
            Nous transformons leurs projets en résultats concrets.</EngagementText>
            </EngagementSubContainer> 
        </EngagementContainer>
    )
}

export default EngagementSection;