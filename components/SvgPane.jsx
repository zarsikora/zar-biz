import React from 'react';
import styled from 'styled-components';

const SvgPane = () => {
    return (
        <Wave id="morph" viewBox="0 0 1920 1080" preserveAspectRatio="none">
            <path className="morph" fill="pink"></path>
        </Wave>
    );
}

export default SvgPane;

const Wave = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 990;
    display: block;

    .morph {
        width: 100vw;
        animation: dripPane 1s;
        animation-timing-function: ease-in;
    }
`
