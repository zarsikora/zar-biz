import React from 'react';
import styled from 'styled-components';

const Jumbotron = (props) => {
    return (
        <Header style={{color: props.color, opacity: props.opacity}}>{props.text}</Header>
    );
}

export default Jumbotron;

const Header = styled.h1`
    font-size: 7rem;
    z-index: 2;
    display: block;
    text-align: center;
    @media(min-width: 768px){
        font-size: 10rem;
    }
    @media(min-width: 992px){
        margin: 0;
    }
`