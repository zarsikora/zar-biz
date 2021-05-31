import React from 'react';
import styled from 'styled-components';
import gsap from "gsap";


const Sprite = ({ spriteClickHandler, isSpriteInSpeechBox, spriteClicked, isInitialSpriteClick, isSpriteNavButton, location}) => {
    let leftPos = "50%";
    let topPos = "50%";
    if(location.pathname !== "/"){
        leftPos = "90%";
        topPos = "10rem";
    }

    if(spriteClicked){
        if(window.innerWidth > 767){
            gsap.to(".sprite-wrapper", {duration: .5, scale: 2, translateY: -100, transformOrigin: 'center'});
        } else {
            gsap.to(".sprite-wrapper", {duration: .5, scale: 1.5, translateY: -200, transformOrigin: 'center'});
        }
    }

    if(isSpriteInSpeechBox){
        if(window.innerWidth > 991){
            gsap.to(".sprite-wrapper", {duration: .5, scale: 1, translateY: 210, translateX: -450, transformOrigin: 'center'});
        } else if(window.innerWidth > 767) {
            gsap.to(".sprite-wrapper", {duration: .5, scale: 1, translateY: 350, translateX: -250});
        } else {
            gsap.to(".sprite-wrapper", {duration: .5, scale: 1, translateY: 30, translateX: 0});
        }
    }

    //if we start on not home, initial click is false already
    //improve page transitions
    //improve look of about page
    //finish adding content to contact page
    // responsivity

    return( 
        <>
            <SpriteWrapper style={{top: topPos, left: leftPos}} className="sprite-wrapper" onClick={() => spriteClickHandler()}>
                <SpriteImg src="./../img/sprite.png" />
            </SpriteWrapper>
        </>
    );
}

export default Sprite;

const SpriteWrapper = styled.div `
    position: fixed;
    width: 15rem;
    height: 15rem;
    transform: translate(-50%, -50%);
    z-index: 999;
`;

const SpriteImg = styled.img `
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: bounce 1s infinite;
    cursor: pointer;
`;
