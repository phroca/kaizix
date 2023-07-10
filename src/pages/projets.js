import * as React from "react";
import { useState } from "react"
import styled from "styled-components";
import Seo from "../components/seo";
import Layout from "../components/layout/layout";

const ProjetContainer = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 140px;
`;
const ProjetSubContainer = styled.div`
    display: grid;
    width: 70vw;
    justify-content: center;
    
`;
const ProjetH1 = styled.h1`
    display: ${props => props.hidden === true ? "none" : "block"};
`;
const ProjetH2 = styled.h2`
    font-family: "FuturaBold";
    color: black;
    margin-bottom: 80px;
    font-size: 50px;
`;

const ProjectNavContainer = styled.div`
    display: grid;
    justify-content: start;
`;
const ProjetNav = styled.nav`
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 40px;
    justify-content: center;
    
`;
const ProjetElement = styled.div`
    display: grid;
    justify-content: center;
`;
const ProjetLink = styled.a`
    font-family: "FuturaBold";
    color: black;
    margin-bottom: 80px;
    font-size: 32px;
    cursor: pointer;
`;

const ProjetNavResultList = styled.div`
    display: grid;
    justify-content: center;
`;

const ProjetCard = styled.div`
    
`
const ProjetCardImageContainer = styled.div`
    
`
const ProjetCardImage = styled.img`
    
`
const ProjetCardTitle = styled.h3`
    
`
const ProjetCardLabel = styled.p`
    
`

const Projets = () => {
    const [isCTATouched, setIsCTATouched] = useState(false);
    const [contentWork, setContentWork] = useState([]);

    const handleFilterDevWeb = () => {

    }
    const handleFilterDevMobile = () => {

    }
    const handleFilterDesign = () => {

    }
    return (
        <Layout modalContact={isCTATouched} modalContactUpdate={setIsCTATouched}>
            <Seo title="KAIZIX - Nos Projets" description="Kaizix aident les entreprises qui leur font confiance à atteindre leurs objectifs, à résoudre leurs problèmes. Voici les les projets réalisés par notre équipe."/>
            <ProjetContainer>
                <ProjetSubContainer>
                    <ProjetH1 hidden={true}>Nos Projets</ProjetH1>
                    <ProjetH2>Nous aidons les entreprises qui nous font confiance à atteindre leurs objectifs. Résoudre leurs problèmes.</ProjetH2>
                    <ProjectNavContainer>
                        <ProjetNav>
                            <ProjetElement>
                                <ProjetLink onClick={handleFilterDevWeb}>Developpment Web</ProjetLink>
                            </ProjetElement>
                            <ProjetElement>
                                <ProjetLink onClick={handleFilterDevMobile}>Developpment Mobile</ProjetLink>
                            </ProjetElement>
                            <ProjetElement>
                                <ProjetLink onClick={handleFilterDesign}>Design</ProjetLink>
                            </ProjetElement>
                        </ProjetNav>
                    </ProjectNavContainer>
                    <ProjetNavResultList>
                            {contentWork.map((element, index) => (
                                <ProjetCard>
                                    <ProjetCardImageContainer>
                                        <ProjetCardImage/>
                                    </ProjetCardImageContainer>
                                    
                                    <ProjetCardTitle></ProjetCardTitle>
                                    <ProjetCardLabel></ProjetCardLabel>
                                </ProjetCard>
                            ))}
                    </ProjetNavResultList>
                </ProjetSubContainer>
            </ProjetContainer>
        </Layout>
    )
}

export default Projets;