import React from 'react';
import styled from 'styled-components';

const Jumbotron = (props) => {
    return (
        <Header style={{color: props.color}}>{props.text}</Header>
    );
}

export default Jumbotron;

const Header = styled.h1`
    text-align: center;
    transition: all ease 300ms;
    font-size: 10rem;
    margin: 10rem auto 0;
    @media(min-width: 768px){
        display: block;
        font-size: 20rem;
    }
    @media(min-width: 992px){
        font-size: 80vh;
        margin: 0;
    }
`