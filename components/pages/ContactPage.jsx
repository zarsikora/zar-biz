import React from "react";
import styled from "styled-components";

const ContactPage = () => {
    return(
        <Pane>
            <Header>Contact Page</Header>
        </Pane>
    );
}

export default ContactPage;

const Pane = styled.div`
    position: absolute;
    top: 0;
    padding: 5rem;
    width: 100vw;
    height: 100vh;
    background-color: #000;
`

const Header = styled.h1`
    text-align: center;
`