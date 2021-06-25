import React from 'react';
import styled from 'styled-components';

const Sprite = ({ handleMainNavRender, isNavActive }) => {
    let rightPos = "2rem";
    let topPos = "2rem";

    return( 
        <>
            <SpriteWrapper 
                style={{top: topPos, right: rightPos}} 
                className="sprite-wrapper" 
                onClick={ () => handleMainNavRender()} 
                onKeyDown={() => handleMainNavRender()}
                role="button"
                aria-pressed={isNavActive}
                aria-label="Click to toggle navigation"
            >
                <SpriteImg 
                    alt="Illustrative depiction of Zar, they have shoulder length hair and look impassive" 
                    src="./../img/sprite.png" 
                />

                <SpeechBubble alt="Pixel art speech bubble with text that reads 'Click Me'" src="./../img/click-me.png" />

            </SpriteWrapper>
        </>
    );
}

export default Sprite;

const SpriteWrapper = styled.div `
    //position: fixed;
    position: absolute;
    width: 10rem;
    height: 10rem;
    z-index: 999;
    @media(min-width: 992px){
        width: 12rem;
        height: 12rem;
    }
`;

const SpeechBubble = styled.img `
    position: absolute;
    width: 10rem;
    left: -7rem;
    display: none;
    @media(min-width: 992px){
        display: block;
    }
`

const SpriteImg = styled.img `
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: bounce 1s infinite;
    cursor: pointer;
`;
