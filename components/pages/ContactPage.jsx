import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Shader from "./../Shader";
import GrossCake from './../../img/gross-cake-min.png';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const WorkPage = () => {
    return (
        <>
            <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Shader img={GrossCake} opacity=".3" />

                <Pane initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

                    <ContactList>
                        {contactData.map((contact) => {
                            return (
                                <ContactBlock key={contact.name}>
                                    <span>
                                        <a target="_BLANK" href={contact.link} >
                                            <span>{contact.name}</span>
                                        </a>
                                    </span>
                                </ContactBlock>
                            )
                        })}
                    </ContactList>

                </Pane>
            </Wrapper>
        </>
    );
}

export default WorkPage;

const Wrapper = styled(motion.div)`
    background-color: #000;
`

const Pane = styled(motion.div)`
    padding: 5rem;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    background-color: none;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
`

const ContactList = styled.ul`
    list-style: none;
    text-align: center;
    padding: 0;
`

const ContactBlock = styled.li`
    font-size: 5rem;
    display: inline;
    position: relative;
    @media(min-width: 768px){
        font-size: 9rem;
    }

    span {
        transition: all ease 300ms;
        background: none;
        padding: 1rem;

        &:hover {
            background: #000;
        }

        @media (hover: none) {
        &:hover {
            background: none;
        }
}
    }

    a {
        color: #fff;
        text-decoration: none;
        transition: all ease 300ms;
        background: none;
        padding: 1rem;

        &:after {
            content: ", ";
            color: #fff;
            transition: all ease 300ms;
        }
    }

    &:last-child {
        a {
            &:after {
                display: none;
            }
        }
    }
`

const contactData = [
    {
        name: "Email Me",
        link: "mailto:howdy@zarah.biz"
    },
    {
        name: "Dribbble",
        link: "https://dribbble.com/zaar"
    },
    {
        name: "Instagram (Main)",
        link: "https://www.instagram.com/jellodemon/"
    },
    {
        name: "Instagram (Design)",
        link: "https://www.instagram.com/zaaaaaaaaaaaaaaar/"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/zarah-sikora-61980864/"
    },
    {
        name: "Resume",
        link: "./../../files/z-resume-0608.pdf"
    }
]