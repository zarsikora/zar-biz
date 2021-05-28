import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const DialogueNav = ({ options }) => {

    const Page = () => {
        <div>
            <h2>Home</h2>
        </div>
    }

    return (
        <div className="nav-menu">
            <Router>
                <Nav>
                    {options.map((option) => {
                        return (
                            <li>
                                <Link to={option.page} key={option.page}>{option.line}</Link>
                            </li>
                        );
                    })
                    }
                </Nav>

                <Switch>
                    {options.map((option) => {
                        return (
                            <Route key={option.page} path={option.page}>
                                <Page />
                            </Route>
                        );
                    })
                    }
                </Switch>
            </Router>
        </div>
    )
}

export default DialogueNav;

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