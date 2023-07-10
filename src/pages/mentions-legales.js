import * as React from "react";
import { useState } from "react"
import styled from "styled-components";
import Seo from "../components/seo";
import Layout from "../components/layout/layout";

const MlContainer = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 140px;
`;
const MlSubContainer = styled.div`
    display: grid;
    width: 70vw;
    justify-content: center;
    
`;

const MlH1 = styled.h1`
    display: ${props => props.hidden === true ? "none" : "block"};
`;
const MlH2 = styled.h2`
    font-family: "FuturaBold";
    color: black;
    margin-bottom: 80px;
    font-size: 96px;
`;
const MlH3 = styled.div`
    font-family: "FuturaBold";
    color: black;
    font-size: 32px;
    margin-bottom: 24px;
`;
const MlHr = styled.hr`
    color: #cccccc;
    width: 100%;
    border: 0 solid;
    border-top-width: 1px;
    margin-bottom: 40px;
`;

const MlParagraph = styled.div`
    font-family: "FuturaLt";
    color: black;
    font-size: 20px;
    margin-bottom: 40px;
`;


const MentionsLegales = () => {
    const [isCTATouched, setIsCTATouched] = useState(false);
    return (
        <Layout modalContact={isCTATouched} modalContactUpdate={setIsCTATouched}>
            <Seo title="KAIZIX - Mentions Légales" />
            <MlContainer>
                <MlSubContainer>
                    <MlH1 hidden={true}>Mentions Légales</MlH1>
                    <MlH2>Mentions Légales</MlH2>
                    <MlH3>Données personnelles</MlH3>
                    <MlParagraph>
                        Les informations collectées ne sont pas conservées sans votre consentement. 
                        Certaines données informatiques sont collectées à des fins statistiques et ne permettent pas de vous identifier. 
                        Ces données sont supprimées dès que le traitement des statistiques est terminé.
                        Vous disposez d’un droit d’accès, de modification et de suppression des données personnelles vous concernant. 
                        Pour prendre connaissance de ces données ou pour exercer vos droits, contactez nous par email ou par courrier à l’adresse suivante :
                    </MlParagraph>
                    <MlParagraph>
                        KAIZIX <br />
                        1 Pl. Rivierre Casalis<br />
                        45400 Fleury-les-Aubrais
                    </MlParagraph>
                    <MlHr />
                    <MlH3>Droits d’auteur</MlH3>
                    <MlParagraph>
                        La reproduction ou représentation, intégrale ou partielle, des pages, des données et de tout autre élément constitutif au site, par quelque 
                        procédé ou support que ce soit, est interdite et constitue sans autorisation une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur.
                    </MlParagraph>
                    <MlHr />
                    <MlH3>Responsables de la publication</MlH3>
                    <MlParagraph>
                        ROCA Philippe<br /><br />
                        Téléphone : 0643135636<br /><br />
                        Hebergé par :<br />
                        Netlify (www.netlify.com)<br />
                        44 Montgomery Street, Suite 300<br />
                        San Francisco, California 94104<br />
                        United-State
                    </MlParagraph>
                </MlSubContainer>
            </MlContainer>
        </Layout>
    )
}

export default MentionsLegales;