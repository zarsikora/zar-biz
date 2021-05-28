import React from "react";
import styled from "styled-components";
import headshot from "./../../img/me.png";

const AboutPage = () => {
    return(
        <Pane>
            <Header>About</Header>
            <FlexContainer>
                <TextWrapper>
                    <AboutList>
                        <li>Pronouns: they/them</li>
                        <li>Sign: virgo</li>
                        <li>Currently learning: three.js, intermediate react, UX, French</li>
                        <li>Interests: accessibility, creative development, experimental animation</li>
                        <li>Inspiration: liminal spaces, cursed images, japanese lifestyle magazines, mark rothko, ugly midcentury food, beijing city, earthbound</li>
                        <li>Role Models: jamie hewlett, mortis ghost, the hamburglar</li>
                    </AboutList>
                </TextWrapper>
                
                <ImageWrapper>
                    <MainPhoto src={headshot} />
                </ImageWrapper>
            </FlexContainer>
            
        </Pane>
    );
}

export default AboutPage;

const Pane = styled.div`
    position: absolute;
    top: 0;
    padding: 5rem;
    width: 100vw;
    height: 100%;
    overflow-y: scroll;
    background: linear-gradient(270deg, #e55d87, #5fc3e4);
    background-size: 400% 400%;
    animation: GradientShift 30s ease infinite;
`

const Header = styled.h1`
    text-align: center;
`

const FlexContainer = styled.div `
    display: flex;
    margin: 4rem auto;
`

const TextWrapper = styled.div `
    height: 70vh;
    overflow-y: scroll;
`

const AboutList = styled.ul`
    list-style: none;
    padding: 0;
    flex: 0 0 50%;
    color: #000;
    font-size: 2rem;
    font-family: "Roboto";

    li {
        margin-bottom: 1rem;
        &:last-child {
            margin-bottom: 0;
        }
    }
`

const ImageWrapper = styled.div `
    flex: 0 0 50%;
    order: 2;
    position: relative;
    display: flex;
    justify-content: center;
`

const MainPhoto = styled.img `
    height: 70vh; 
`