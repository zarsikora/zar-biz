import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

const MainNav = ({ setIsNav, setIsSpeechBoxActive }) => {
    console.log('I am getting rendered')

    // TODO: move this up a level and remove set is nav and is nav from this component
    // const removeNavAndSpeechBox = () => {
    //     //animation 
    //     setIsNav(false);
    //     setIsSpeechBoxActive(false);
    // }

    return (
        <NavPane>
            <Nav>
                <NavItem onClick={() => removeNavAndSpeechBox()}>
                    <Link to="/work">
                        View My Work
                    </Link>
                </NavItem>
                <NavItem onClick={() => removeNavAndSpeechBox()}>
                    <Link to="/about">
                        Hear About Me
                    </Link>
                </NavItem>
                <NavItem onClick={() => removeNavAndSpeechBox()}>
                    <Link to="/contact">
                        Contact Me
                    </Link>
                </NavItem>
            </Nav>
        </NavPane>
    );
}

export default MainNav;

const NavPane = styled.div`
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

const Nav = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;  
    color: red;
    display: block;
    font-size: 7rem;
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
    font-family: 'Detechno';
    @media(min-width: 768px){
        font-size: 10rem;
    }
    @media(min-width: 992px){
        font-size: 6vw;
    }
    @media(min-width: 1440){
        font-size: 8vw;
    }
`

const NavItem = styled.li `
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