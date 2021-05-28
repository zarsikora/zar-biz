import React from "react";
import styled from "styled-components";
import gsap from "gsap";

//TODO: Add DF
const WorkPage = () => {
    gsap.to(".work-pane", { duration: .7, scaleY: 1, transformOrigin: 'bottom' });

    return (
        <Pane className="test">
            <Header>Work</Header>
            <WorkList>
                {workData.map((work) => {
                    return (
                        <WorkBlock key={work.name} bg={work.bg} text={work.text}>
                            <a target="_BLANK" href={work.link} >
                                <span>{work.name}</span>
                                <img src={work.img} />
                            </a>
                        </WorkBlock>
                    )
                })}
                {/* Add DF */}
            </WorkList>
        </Pane>
    );
}

export default WorkPage;

const Pane = styled.div`
    padding: 5rem;
    width: 100%;
    height: 100vh;
    display: block;
    overflow-y: scroll;
    background-color: #f9f9f9;
    box-sizing: border-box;
    // transform: scaleY(0);
`

const Header = styled.h1`
    text-align: center;
    color: #000;
    font-size: 7vw;
    // opacity: 0;
`

const WorkList = styled.ul`
    list-style: none;
    padding: 0;
    text-align: center;
    font-size: 5vw;
    // opacity: 0;

    li, a {
        color: #000;
        text-decoration: none;
        transition: all ease 300ms;
    }
`

const WorkBlock = styled.li`
    background-color: ${props => props.bg};
    width: 50%;
    margin: 2rem auto;
    position: relative;
    transition: all ease 300ms;
    // opacity: 0;

    &:hover {
        img {
            opacity: 1;
        }

        a span {
            color: #fff;
            position: relative;
            z-index: 88;
        }
    }

    img {
        position: absolute;
        width: 100%;
        height: 100%; 
        object-fit: cover;
        left: 0;
        top: 0;
        opacity: 0;
        mix-blend-mode: multiply;
        transition: all ease 300ms;
    }

    a {
        color: ${props => props.text};
        text-decoration: none;
        box-sizing: border-box;
        display: block;
        padding: 5rem;
    }
`

const workData = [
    {
        name: "Alarad",
        link: "https://www.alaradcapital.com/",
        bg: "#27331d",
        text: "#bd8e65",
        img: "./../../img/work/alarad-peek.png"
    },
    {
        name: "Steel Root",
        link: "https://steelroot.us/",
        bg: "#181d40",
        text: "#db5150",
        img: "./../../img/work/sr-peek.png"
    },
    {
        name: "TransHealth",
        link: "https://www.transhealth.org/",
        bg: "#96b0c5",
        text: "#2a275b",
        img: "./../../img/work/th-peek.png"
    },
    {
        name: "ThinkForward Financial",
        link: "https://thinkforwardfinancial.com/home/",
        bg: "#e16e37",
        text: "#fff",
        img: "./../../img/work/tff-peek.png"
    }
]