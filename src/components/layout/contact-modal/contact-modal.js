import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import useInput from "../../../hook/useInput";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"
import closeImg from "../../../images/modal/close.png"

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
`;

const ContactCloseButtonContainer = styled.div`
    position: absolute;
    right: -15px;
    top: -15px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: #000000C0;
    display: grid;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
const ContactCloseImg = styled.img`
    width: 20px;
    height: 20px;
`
const ContactBottomPart = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    width: 100%;
    position: relative;
    @media(max-width: 640px) {
        grid-template-rows: auto auto;
        grid-template-columns: none;
        width: unset;
        margin: 0 20px;
    }
`;

const ContactFormContainer = styled(motion.form)`
    display: grid;
    grid-template-rows: repeat(5, auto);
    align-content: center;
    grid-gap: 20px;
    background: #F8F8F8;
    border-radius: 10px;
    width: 100%;
    height: 650px;
    padding: 30px 0 20px 0;
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
const ContactModal = (props) => {
    const [loading, setLoading] = useState(false);
    const [messageNotification, setMessageNotification] = useState("");
    const nom = useInput("");
    const email = useInput("");
    const budget = useInput("");
    const message = useInput("");

    const validateEmail = (str) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(str);
    }

    const handleSendingMail = (event) => {
        event.preventDefault();
        setLoading(true);
        if(nom.value === "") {setLoading(false); setMessageNotification("Le nom est incomplet."); return;}
        if(email.value === "" && !validateEmail(email.value)) {setLoading(false); setMessageNotification("Le mail est incomplet."); return;}
        if(budget.value === "") {setLoading(false); setMessageNotification("Le budget est incomplet. Si vous n'avez pas d'idées, mettez 0."); return;}
        if(message.value === "") {setLoading(false); setMessageNotification("Le message est incomplet."); return;}
        const messageComplet = message.value + "\n" + "Le budget estimé : " + budget.value
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
            'U2pbE-4T0vMbQDnWS'
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
                
                <ContactBottomPart>
                <ContactCloseButtonContainer onClick={props.closeModal}>
                    <ContactCloseImg src={closeImg}/>
                </ContactCloseButtonContainer>
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
                            <LabelInput htmlFor="budget">Quel est votre budget ? Donnez nous une fourchette</LabelInput>
                            <InscriptionInput id="budget" placeholder="Budget" {...budget}></InscriptionInput>
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
                    </ContactBottomPart>
            </ContactSubContainer>
        </ContactContainer>
    )
}

export default ContactModal;