import React from 'react';
import styled from 'styled-components';

const AnimationPane = ({ active, paneSlideUp }) => {
    
    if(active){
        paneSlideUp(".animation-pane");
    }

    return (
        <Pane className="animation-pane" />
    )
}

export default AnimationPane;

const Pane = styled.div `
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: pink;
    transform: scaleY(0);
`