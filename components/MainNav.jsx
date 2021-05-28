import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";

const MainNav = ({ navLinkHandler, paneSlideUp }) => {
    return (
        <>
            <Router>
                <Nav>
                    <li>
                        <Link to="/work">View My Work</Link>
                    </li>
                    <li>
                        <Link onClick={navLinkHandler} to="/about">Hear About Me</Link>
                    </li>
                    <li>
                        <Link onClick={navLinkHandler} to="/contact">Contact Me</Link>
                    </li>
                </Nav>

                <Switch> 
                    <Route exact path="/work"  component={WorkPage} />
                    <Route exact path="/about"  component={AboutPage} />
                    <Route exact path="/contact"  component={ContactPage} />
                </Switch>
            </Router>
        </>
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