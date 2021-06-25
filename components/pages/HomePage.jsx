import React from "react";
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import { motion } from "framer-motion";
//Components
import Jumbotron from "../Jumbotron";
import ShaderImage from './../ShaderImage';
import Hamburglar from './../../img/hamburglar.jpg';

const HomePage = () => {
    return (
        <>
            <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div>
                    <Jumbotron text="HOWDY" color="#fff" opacity="1" />
                    <ShaderImage img={Hamburglar} alt="Image description: Vintage image of the Hamburglar being disrupted by WebGL shaders" />
                    <SubHeader>I'm Zar, a designer and creative developer with a passion for equitable design, accessibility, and spicy aesthetics.</SubHeader>

                    <CallToAction>
                        <Link to="/work">View my work. <span>&#128121;</span> </Link>
                    </CallToAction>
                </div>
            </Wrapper>
        </>
    );
}

export default HomePage;

const Wrapper = styled(motion.div)`
    min-height: 100vh;
    padding: 0 2rem;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    position: relative;
    @media(min-width: 768px){
        padding: 0;
    }
`

const SubHeader = styled.p`
    font-family: "Roboto";
    color: #fff;
    text-align: center;
    font-size: 1.6rem;
    margin: 2rem auto;
    @media(min-width: 768px){
        width: 50%;
    }
    @media(min-width: 1440px){
        font-size: 1.111vw;
    }
    @media(min-width: 1920px){
        font-size: 2.13rem;
    }
`

const CallToAction = styled.span`
    text-align: center;
    a {
        color: pink;
        font-family: "Roboto";
        margin: 0 auto;
        display: block;
        font-size: 2rem;
        text-decoration: none;
        transition: all ease 300ms;

        span {
            @media(hover: hover){
                opacity: 0;
                transition: all ease 300ms;
            }
        }

        &:hover {
            @media (hover: hover) {
                color: red;

                span {
                    opacity: 1;
                }
            }
        }
    }
`