import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96]
};

const navPane = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.01,
            delay: 0.61
        }
    },
    hide: {
        opacity: 0,
        transition: {
            duration: .5,
            delay: .3
        }
    }
}

const exitPane = {
    hidden: {
        scaleY: 0,
        originY: 1
    },
    leave: { 
        scaleY : 1, 
        transition: {
            duration: .5,
            ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
}

const MainNav = ({ handleMainNavRender }) => {

    return (
        <>
            <WaveIn viewBox="0 0 1920 1080" preserveAspectRatio="none">
                <motion.path initial={{ scaleY: 0, originY: 0 }} animate={{ scaleY: 1 }} transition={transition} className="morph" fill="pink"></motion.path>
            </WaveIn>

            <ExitPane variants={exitPane} initial="hidden" exit="leave">
            </ExitPane>

            <NavPane variants={navPane} initial="hidden" animate="show" exit="hide">
                <Nav>
                    <NavItem onClick={() => handleMainNavRender()} >
                        <Link to="/">
                            Home
                        </Link>
                    </NavItem>
                    <NavItem onClick={() => handleMainNavRender()} >
                        <Link to="/work">
                            Work
                        </Link>
                    </NavItem>
                    <NavItem onClick={() => handleMainNavRender()}>
                        <Link to="/about">
                            About Me
                        </Link>
                    </NavItem>
                    <NavItem onClick={() => handleMainNavRender()}>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </NavItem>
                    {/* playground */}
                </Nav>
            </NavPane>
        </>
    );
}

export default MainNav;

const WaveIn = styled.svg`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 105vw;
    height: 100%;
    pointer-events: none;
    z-index: 990;
    display: block;

    path {
        width: 100vw;
        animation: dripDown 700ms;
        animation-timing-function: ease-in;
    }
`

const ExitPane = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #000;
    bottom: 0;
    right: 0;
    z-index: 999;
`

const NavPane = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: pink;
    display: block;
    z-index: 997;
    transform-origin: 50% 0%;
`

const Nav = styled(motion.ul)`
    margin: 0;
    padding: 0;
    list-style: none;  
    color: red;
    display: block;
    font-size: 7rem;
    position: absolute;
    top: 10rem; 
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
    font-family: 'Detechno';
    @media(min-width: 768px){
        font-size: 12rem;
        top: 5rem;
    }
    @media(min-width: 992px){
        font-size: 10rem;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    @media(min-width: 1440){
        font-size: 8vw;
    }
`

const NavItem = styled(motion.li)`
    cursor: pointer;
    transition: all ease 300ms;

    &:hover {
        color: black;
    }

    a {
        color: red;
        transition: all ease 300ms;

        &:hover {
            color: #000;
        }
    }
`