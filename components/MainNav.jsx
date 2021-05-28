import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const MainNav = ({ setPage }) => {
    return (
        <Nav>
            <li onClick={() => { setPage('work') }}>
                View My Work
                    </li>
            <li onClick={() => { setPage('about') }}>
                Hear About Me
                    </li>
            <li onClick={() => { setPage('contact') }}>
                Contact Me
                    </li>
        </Nav>
    );
}

export default MainNav;

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

    li {
        cursor: pointer;
        transition: all ease 300ms;

        &:hover {
            color: black;
        }
    }
`