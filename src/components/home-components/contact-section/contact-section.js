import * as React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

import imgContact from "../../../images/home/contact-section/contact-img.webp"
import SubHeader from "../../sub-header/sub-header"

import useInput from "../../../hook/useInput";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"
import MediaRendering from "../../../components/composables/media-rendering"

const ContactContainer = styled.div`
    height: 100vh;
    display: grid;
    justify-content: center;
    margin: 50px 0;
    @media(max-width: 640px) {
        height: auto;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        height: auto;
        margin: 40px;
    }
    @media (min-width: 1081px) and (max-width: 1440px) {
        height: auto;
        margin: 40px;
  }
`;

const ContactSubContainer = styled.div`
    display: grid;
    justify-items: start;
    align-items: center;
    width: 70vw;
    @media(max-width: 640px) {
        justify-items: center;
        width: unset;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        width: unset; 
    }
    @media (min-width: 1081px) and (max-width: 1440px) {
        width: unset; 
  }
`;
const ContactBottomPart = styled.div`
    display: grid;
    grid-template-columns: auto 30%;
    justify-items: center;
    align-items: center;
    width: 100%;
    @media(max-width: 640px) {
        grid-template-rows: auto auto;
        grid-template-columns: none;
        width: unset;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        width: unset; 
        grid-template-columns: auto auto;
    }
`;


const ContactLeftContainer = styled.div`
    display: grid;
    justify-self: start;
    width: 90%;
    @media(max-width: 640px) {
        justify-self: center;
        width: unset;
    }
`;


const ContactTitle = styled(motion.h1)`
    font-family: "FuturaMedium";
    font-size: 50px;
    color: black;
    max-width: 750px;
    @media(max-width: 640px) {
        font-size: 30px;
        max-width: unset;
        margin: 20px;
        text-align: center;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        font-size: 30px;
    }
    @media (min-width: 1081px) and (max-width: 1440px) {
        font-size: 40px;
    }
`;

const ContactRightContainer = styled.div`
    display: grid;
    justify-self: end;
    justify-items: center;
    align-items: center;
    @media(max-width: 640px) {
        justify-self: center;
    }
`;

const ImageAnimation = keyframes`
    0% {
        transform: translateY(-30px) translateX(0px)
    }
    50% {
        transform: translateY(30px) translateX(0px)
    }
    100% {
        transform: translateY(-30px) translateX(0px)
    }
`

const ImageAnimationPad = keyframes`
    0% {
        transform: translateY(-70px) translateX(0px)
    }
    50% {
        transform: translateY(70px) translateX(0px)
    }
    100% {
        transform: translateY(-70px) translateX(0px)
    }
`
const ImgContact = styled.img`
    height: 650px;
    animation: ${ImageAnimation};
    animation-timing-function: cubic-bezier(0.8, 0.5, 0.5, 0.8);
    animation-duration: 10s;
    animation-iteration-count: infinite;
    @media(max-width: 640px) {
        height: 300px;
        width: 200px;
        margin: 20px 0 20px 0;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        height: 400px;
        width: 300px;
        animation: ${ImageAnimationPad};
        animation-timing-function: cubic-bezier(0.8, 0.5, 0.5, 0.8);
        animation-duration: 10s;
        animation-iteration-count: infinite;
    }
`

const ImgContainer = styled(motion.div)`
    height: 650px;
    background: #F8F8F8;
    border-radius: 10px;
    @media(max-width: 640px) {
        height: 300px;
        width: 200px;
        margin: 20px 0 20px 0;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        width: 300px;
        display: grid;
        align-items: center;
    }
`

const ContactFormContainer = styled(motion.form)`
    display: grid;
    grid-template-rows: repeat(5, auto);
    align-content: center;
    grid-gap: 20px;
    background: #F8F8F8;
    border-radius: 10px;
    width: 100%;
    height: 650px;
`;

const InputWrapper = styled.div`
    display: grid;
    grid-template-rows: auto;
    padding: 0 40px 0 40px;
`

const LabelInput = styled.label`
    color: #000000;
`
const InscriptionInput = styled.input`
    padding: 0 20px 0 0;
    height: 64px;
    border-bottom: 1px solid #DDDDDD;
    border-top: none;
    border-right: none;
    border-left: none;
    color: #000000;
    font-family: "FuturaLt";
    background: transparent;
    :focus {
        outline: none;
    }
`


const ContactButtonContainer = styled.div`
  align-items: center;
  justify-items: center;
  justify-self: end;
  padding: 0 40px 0 40px;
`;
const ContactButton = styled.button`
  background : #7FCBB1;
  font-family: "FuturaLt";
  border-radius: 10px;
  width: 280px;
  height :60px;
  color: white;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const ContactMessage = styled.p`
    font-family: "FuturaMedium";
    font-size: 20px;
    text-align: center;
    color: black;
    display: grid;
    justify-content: center;
`;
const ContactSection = () => {
    const [loading, setLoading] = useState(false);
    const [messageNotification, setMessageNotification] = useState("");
    const nom = useInput("");
    const email = useInput("");
    const message = useInput("");

    const validateEmail = (str) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(str);
    }

    const handleSendingMail = (event) => {
        event.preventDefault();
        setLoading(true);
        if (nom.value === "") { setLoading(false); setMessageNotification("Le nom est incomplet."); return; }
        if (email.value === "" && !validateEmail(email.value)) { setLoading(false); setMessageNotification("Le mail est incomplet."); return; }
        if (message.value === "") { setLoading(false); setMessageNotification("Le message est incomplet."); return; }
        const messageComplet = message.value + "\n";
        emailjs.send(
            'service_pwbbi7c',
            'template_lc1p4rs',
            {
                from_name: nom.value,
                to_name: 'Kaizix',
                from_email: email.value,
                to_email: 'roca.philippe63@gmail.com',
                message: `${messageComplet}`
            },
            'JmOpH28DRtw0Z428V'
        ).then(() => {
            setLoading(false);
            setMessageNotification("Merci. Nous vous recontacterons le plus rapidement possible.");
        }, (error) => {
            setLoading(false);
            console.log(error);
            setMessageNotification("Une erreur est survenue. Veuillez recommencer");
        });

    }
    return (
        <ContactContainer>
            <ContactSubContainer>

                <SubHeader color="#7FCBB1" text="Discutons de votre projet" />
                <ContactTitle>Vous avez une idée ? Nous pouvons vous aider.</ContactTitle>
                <ContactBottomPart>
                    <ContactLeftContainer>
                        <ContactFormContainer>
                            <InputWrapper>
                                <LabelInput htmlFor="nom">Quel est votre nom ?</LabelInput>
                                <InscriptionInput id="nom" placeholder="Nom" {...nom}></InscriptionInput>
                            </InputWrapper>
                            <InputWrapper>
                                <LabelInput htmlFor="email">On vous répondra via email. Pas de spam.</LabelInput>
                                <InscriptionInput id="email" placeholder="Email" {...email}></InscriptionInput>
                            </InputWrapper>
                            <InputWrapper>
                                <LabelInput htmlFor="message">Dites-nous en plus sur votre projet et nous serons ravis de travailler dessus avec vous.</LabelInput>
                                <InscriptionInput id="message" placeholder="Message" {...message}></InscriptionInput>
                            </InputWrapper>
                            <ContactButtonContainer>
                                <ContactButton onClick={(e) => handleSendingMail(e)}>
                                    {loading ? "Envoi en cours..." : "Envoyez"}
                                </ContactButton>
                            </ContactButtonContainer>
                            <ContactMessage>
                                {messageNotification}
                            </ContactMessage>
                        </ContactFormContainer>
                    </ContactLeftContainer>
                    <MediaRendering minWidth="1024" maxWidth={null}>
                        <ContactRightContainer>
                            <ImgContainer>
                                <ImgContact src={imgContact} />
                            </ImgContainer>
                        </ContactRightContainer>
                    </MediaRendering>
                </ContactBottomPart>
            </ContactSubContainer>
        </ContactContainer>
    )
}

export default ContactSection;