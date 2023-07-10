import * as React from "react";
import { useState } from "react"
import styled from "styled-components";
import Seo from "../components/seo";
import Layout from "../components/layout/layout";

const CalcProjetContainer = styled.div`
    background: #000000;
    display: grid;
    justify-content: center;
    height: 80vh;
    padding-top: 50px;
`;
const CalcProjetSubContainer = styled.div`
    display: grid;
    width: 70vw;
    justify-content: center;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    gap: 40px;
`;
const CalcProjetH1 = styled.h1`
    font-family: "FuturaBold";
    color: #FFFFFF;
    margin-bottom: 20px;
    font-size: 60px;
`;

const CalcProjetRightSide = styled.div`
    display: grid;
`;

const CalcProjetH2 = styled.h2`
    font-family: "FuturaLt";
    color: #FFFFFF;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
`;


const CtaButtonContainer = styled.div`
  align-items: center;
  justify-items: center;
  @media(max-width: 640px) {
    justify-self: center;
    }

    @media (min-width: 640px) and (max-width: 1080px) {
      justify-self: center;
  }
`;
const CtaButton = styled.button`
  background : transparent;
  font-family: "FuturaMedium";
  border-radius: 10px;
  width: 280px;
  height :60px;
  color: white;
  font-size: 20px;
  outline: none;
  border: solid 2px #FFFFFF;
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

const CalcProjet = () => {
    const [isCTATouched, setIsCTATouched] = useState(false);

    const handleStartTest = () => {

    }

    return (
        <Layout modalContact={isCTATouched} modalContactUpdate={setIsCTATouched} isDark={true}>
            <Seo title="KAIZIX - Calculateur de projet" description="Combien coûte votre projet ? Kaizix peut déterminer une approximation du temps de l'élaboration de votre projet."/>
            <CalcProjetContainer>
                <CalcProjetSubContainer>
                    <CalcProjetH1>Combien votre projet coûte ?</CalcProjetH1>
                    <CalcProjetRightSide>
                        <CalcProjetH2>
                            Si vous avez besoin de créer un design qui vous ressemble, de développer un site Web ou une application, 
                            de créer un excellent produit rentable, mais vous ne savez pas combien cela coûtera. 
                            Suivez simplement ce test simple et répondez à plusieurs questions.
                        </CalcProjetH2>
                        <CtaButtonContainer>
                            <CtaButton onClick={handleStartTest}>
                            Commençons !
                            </CtaButton>
                        </CtaButtonContainer>
                    </CalcProjetRightSide>
                </CalcProjetSubContainer>
            </CalcProjetContainer>
        </Layout>
    )
}

export default CalcProjet;