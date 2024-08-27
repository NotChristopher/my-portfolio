import React from "react";
import styled from "styled-components";
import ButtonPlayground from "../ui/styled/buttonsPlayground";


const Header = styled.h2`

`;

const Playground = styled.div`
 justify-content: center;
 align-items: center;
 padding: 2rem;
 max-width: 60vw;
 min-height: 50rem;
 max-height: 50reml;
 height: auto;
 min-width: 30rem;
 background-color: #dbf3fa;
`

const Context = styled.p`

`

const SectionTitle = styled.h3`

`

const Wrapper = styled.div`
    background: #657a8b;
    display: flexbox;
    justify-content:center;
    align-items:center;
`;
const Buttons = () =>{

    return (
        <Wrapper>
        <Header>Introduction</Header>
        <Context>Because the projects and repositories I worked on over the past years are under a NDA I thought it would be fitting to create a collection of UI elements I worked. Take a whirl at the diffrent components, each will have the corresponding code and hopefully some insights of what I tried to achieve with each section </Context>
        <SectionTitle>Buttons</SectionTitle>
        <Context>A pretty basic UI component but never the less an important and prevelant component each site, app or even hardware requires.</Context>
        <Playground><ButtonPlayground/></Playground>
        </Wrapper>
    )
};

export default Buttons;