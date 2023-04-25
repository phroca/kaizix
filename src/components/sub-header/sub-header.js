import * as React from "react"
import styled from "styled-components"


const SubHeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 30px auto;
    justify-items: center;
    align-items: center;
    border-radius: 10px;
    border: solid 1px #DDDDDD;
    min-width: 350px;

    padding: 5px;
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
    color: black;
    text-transform: uppercase;
`

const SubHeader = (props) => {


    return (
        <SubHeaderContainer>
            <SubHeaderCercle color={props.color}/>
            <SubHeaderTexte>{props.text}</SubHeaderTexte>
        </SubHeaderContainer>
    );

}

export default SubHeader