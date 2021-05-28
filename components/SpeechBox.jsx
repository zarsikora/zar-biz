import React, { useState } from 'react';
import styled from 'styled-components';
import gsap from "gsap";
import Message from "./Message";
import rightArrow from "./../img/icon/arrow-right.png";

const SpeechBox = ({ isActive, setIsSpriteInSpeechBox, isSpriteInSpeechBox, messages, isNav, showNav }) => {
    const [currentMessage, setCurrentMessage] = useState(0);
    const [isFirstMessage, setIsFirstMessage] = useState(true);

    let lines = messages.lines;
    let nav = messages.navigation;

    console.log(messages);

    if (isActive) {
        gsap.to(".speech-box", { duration: .3, opacity: .8 });
    }

    const handleClick = () => {
        if (currentMessage < lines.length - 1) {
            setCurrentMessage(currentMessage + 1);
        } else if (nav) {
            showNav();
            setIsSpriteInSpeechBox(true);
        }
    };

    return (
        <Box className="speech-box">
            <Message 
                isFirstMessage={isFirstMessage} 
                setIsFirstMessage={setIsFirstMessage} 
                message={lines[currentMessage]} 
                key={currentMessage} 
                isSpriteInSpeechBox={isSpriteInSpeechBox}
            />

            {!isNav && <Next onClick={handleClick}><img src={rightArrow} /></Next>}
        </Box>
    );
}

export default SpeechBox;

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    background: rgba(0, 0, 0, 0.9);
    opacity: 0;
    width: 80%;
    height: 30vh;
    border-radius: 3rem;
    font-family: 'Roboto';
    font-size: 2.5rem;
    padding: 5rem;
    box-sizing: border-box;
    @media(min-width: 768px){
        font-size: 3.5rem;
        width: 90%;
    }
    @media(min-width: 992px){
        font-size: 3rem;
        width: 80%;
    }
`

const Next = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;

    img {
        width: 3rem;
        animation: bounceRight 1s infinite;
    }
`
