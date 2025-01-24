import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import imgLogo from "../../images/kaizix-logo-solo-theme-dark.png"


import footerdata from "../../../footerdata.json"


const FooterContainer = styled.div`
    background: #211E25;
    display: grid;
    align-items: center;
    justify-items: center;
`
const FooterSubContainer = styled.div`
    width: 70vw;
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-gap: 30px;
    align-items: center;
    justify-items: center;

    @media (max-width: 640px) {
        height: 100%;
        grid-template-rows: repeat(3, auto);
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        width: unset;
        margin: 0 40px;
    }
`
const FooterTop = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 50px;
    align-items: center;
    justify-items: center;
    @media (max-width: 640px) {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: 1fr;
    }
`


const FooterLogo = styled.div`

`
const FooterColumn = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: 10px;
    align-items: center;
    justify-items: start;
`

const FooterColumnTitle = styled.h3`
    font-family: "FuturaLt";
    margin: 0;
    font-weight: 500;
    color: #DDDDDD;
    font-size: 20px;
    text-align: left;
    text-transform: uppercase;
`
const FooterColumnListLinkPages = styled.div`

    a, span{
        font-family: "FuturaMedium";
        font-size: 16px;
        color: white;
        text-decoration: none;
        text-align: left;
        &::after {
            content: " / ";
        }

    }
    &:last-child {
        &::after {
            content: none !important;
        }
    }

`

const FooterSeparator = styled.div`
    height: 1px;
    width: 100%;
    background-color: #FFFFFF;
`
const FooterBottom = styled.p`
    font-size: 12px;
    color: white;
    text-align: center;
`

const Footer = () => {



    return (
        <FooterContainer>
            <FooterSubContainer>
                <FooterTop>
                    <FooterLogo>
                        <Link to="/"><img src={imgLogo} alt="logo Sensei" height="182" width="182" /></Link>
                    </FooterLogo>
                    <FooterColumn>
                        <FooterColumnTitle>
                            Services Proposés
                        </FooterColumnTitle>
                        <FooterColumnListLinkPages>
                            {footerdata.footerPagesServices.map(page => (
                                <span>{page.label}</span>
                            ))}
                        </FooterColumnListLinkPages>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterColumnTitle>
                            Kaizix
                        </FooterColumnTitle>
                        <FooterColumnListLinkPages>
                            {footerdata.footerPagesKaizix.map(com => (
                                <a key={com.id} href={com.link} rel="noreferrer" target={com.isExternalLink ? "_blank" : "_self"}>{com.label}</a>
                            ))}
                        </FooterColumnListLinkPages>
                    </FooterColumn>
                </FooterTop>
                <FooterSeparator />
                <FooterBottom>
                    KAIZIX © Copyright 2025. Tout droits réservés.
                </FooterBottom>
            </FooterSubContainer>
        </FooterContainer>
    )
}

export default Footer