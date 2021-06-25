import React, { useState, useRef } from 'react';
import styled from "styled-components";
import rainyDay from "./../sound/rainy-day.mp3";
import speakerIcon from "./../img/icon/Speaker_Icon.svg";
import muteIcon from "./../img/icon/Mute_Icon.svg";

const AudioButton = () => {
    const music = new Audio(rainyDay);
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef();

    const songControls = () => {
        if(isPlaying){
            ref.current.pause();
        } else {
            ref.current.play();
        }
        
        setIsPlaying(!isPlaying);
    }

    return(
        <>
            <audio
                ref= {ref}
                src= {rainyDay}
            />
            <AudioBtn 
                aria-pressed={isPlaying} 
                onClick={songControls} 
                onKeyDown={songControls}
                aria-label="Click to toggle music on and off"
            >
                <img src={isPlaying ? speakerIcon : muteIcon} />
            </AudioBtn>
        </>
    )
}

export default AudioButton;

const AudioBtn = styled.button `
    background: none;
    outline: none;
    border: none;
    z-index: 999;
    position: absolute;
    display: none;

    @media(min-width: 768px){
        display: block
    }

    img {
        width: 3rem;
    }
`