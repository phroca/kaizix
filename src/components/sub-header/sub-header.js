import * as React from "react"
import styled from "styled-components"
import { forwardRef } from "react"
import { motion } from "framer-motion"

const SubHeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 30px auto;
    justify-items: center;
    align-items: center;
    border-radius: 10px;
    border: solid 1px #DDDDDD;
    min-width: 350px;
    background: ${props=> props.theme === "dark" ? "#1D1D1B": "transparent"};
    padding: 5px;
    @media(max-width: 640px) {
        min-width: unset;
    }
`
const SubHeaderCercle = styled.div`
    width : 25px;
    height: 25px;
    background: ${props =>props.color};
    border-radius: 50px;
`
const SubHeaderTexte = styled.div`
    font-family: "FuturaMedium";
    font-size: 20px;
    color: ${props=> props.theme === "dark" ? "#FFFFFF": "#000000"};
    text-transform: uppercase;
    @media(max-width: 640px) {
        font-size: 16px;
    }
`

const SubHeader = forwardRef((props ,ref) => (
        <SubHeaderContainer ref={ref} theme={props.mode}>
            <SubHeaderCercle color={props.color}/>
            <SubHeaderTexte theme={props.mode}>{props.text}</SubHeaderTexte>
        </SubHeaderContainer>
));

const SubHeaderMotion = motion(SubHeader);
export default SubHeaderMotion;