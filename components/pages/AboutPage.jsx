import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Media
import headshot from "./../../img/me-min.png";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const AboutPage = () => {
    return (
        <Wrapper>
            <Pane initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Header inital={{ opacity: 0 }} animate={{ opacity: 1 }}>About</Header>
                <FlexWrapper>
                    <TextWrapper>
                        <AboutList>
                            <li><span>Pronouns:</span> they/them</li>
                            <li><span>Sign:</span> virgo</li>
                            <li><span>Currently learning:</span> UX, three.js, intermediate react, French</li>
                            <li><span>Interests:</span> creative development, accessibility, experimental animation, language learning, equitable design, post-structuralism</li>
                            <li><span>Inspiration:</span> liminal spaces, cursed images, mark rothko, beijing, earthbound</li>
                            <li><span>Role Models:</span> mortis ghost, chaz bear, leyland kirby</li>
                        </AboutList>
                    </TextWrapper>

                    <ImageWrapper inital={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <MainPhoto src={headshot} alt="Portrait of Zar in a suit, sitting at a table covered in bright vintage food. They are being handed a crystal cup of multicolor jello" />
                    </ImageWrapper>
                </FlexWrapper>
            </Pane>
        </Wrapper>
    );
}

export default AboutPage;

const Wrapper = styled.div`
    background-color: #000;
`

const Pane = styled(motion.div)`
    padding: 5rem;
    width: 100%;
    height: 100vh;
    display: block;
    overflow-y: scroll;
    background-color: none;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
`

const Header = styled(motion.h1)`
    text-align: center;
    color: #fff;
    font-size: 7rem;
    @media(min-width: 992px){
        font-size: 7vw;
    }
`

const FlexWrapper = styled.div`
    max-width: 1000px;
    margin: 4rem auto 0;
    @media(min-width: 992px){
        display: flex;
    }
`

const ImageWrapper = styled(motion.div)`
    flex: 0 0 50%;
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 3;
    @media(min-width: 992px){
        order: 1;
    }
`

const MainPhoto = styled.img`
    height: 70vh; 
    width: 100%;
    object-fit: cover;
    @media(min-width: 768px){
        width: 100%;
        height: 40rem;
        object-fit: contain;
    }
    @media(min-width: 992px){
        width: auto;
        height: 50rem;
    }
`

const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;

    @media(min-width: 992px){
        margin-bottom: 0;
        padding: 5rem;
    }
`

const AboutList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 2rem;
    font-family: "Roboto";
    position: relative;
    z-index: 3;

    li {
        margin-bottom: 1rem;
        &:last-child {
            margin-bottom: 0;
        }

        span {
            color: pink;
        }
    }
`