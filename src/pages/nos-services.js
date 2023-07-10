import * as React from "react";
import { useState } from "react"
import styled from "styled-components";
import Seo from "../components/seo";
import Layout from "../components/layout/layout";

const ServiceContainer = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 140px;
`;
const ServiceSubContainer = styled.div`
    display: grid;
    width: 70vw;
    justify-content: center;
    
`;
const ServiceH1 = styled.h1`
    font-family: "FuturaBold";
    color: black;
    margin-bottom: 20px;
    font-size: 60px;
`;
const ServiceH2 = styled.h2`
    font-family: "FuturaBold";
    color: black;
    margin-bottom: 80px;
    font-size: 40px;
`;
const Service = () => {
    const [isCTATouched, setIsCTATouched] = useState(false);

    return (
        <Layout modalContact={isCTATouched} modalContactUpdate={setIsCTATouched}>
            <Seo title="KAIZIX - Nos services" description="Avec Kaizix, nous créeons des identités de marques, lançons des strtups, aidons les entreprises à se développer à travers le web. Voici comment nous procédons."/>
            <ServiceContainer>
                <ServiceSubContainer>
                    <ServiceH1>Nos services</ServiceH1>
                    <ServiceH2>Avec Kaizix, nous créeons des identités de marques, lançons des strtups, aidons les entreprises à se développer à travers le web. Voici comment nous procédons.</ServiceH2>
                </ServiceSubContainer>
            </ServiceContainer>
        </Layout>
    )
}

export default Service;