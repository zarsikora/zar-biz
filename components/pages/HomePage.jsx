import React from "react";
import { NavLink } from "react-router-dom";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import Jumbotron from "./../Jumbotron";
import MainNav from "./../MainNav";
import SpeechBox from "./../SpeechBox";

const HomePage = () => {
    let screen = useRef(null);
    let body = useRef(null);
    return(
        <>
            <Jumbotron text="HOWDY" color="#CEFF00" />

            {isNav && <MainNav 
                        navLinkHandler={navLinkHandler} 
                        paneSlideUp={paneSlideUp}
                    />
            }

            {isSpeechBoxActive &&
                <SpeechBox
                    isActive={isSpeechBoxActive}
                    setIsSpriteInSpeechBox={setIsSpriteInSpeechBox}
                    isSpriteInSpeechBox={isSpriteInSpeechBox}
                    messages={speechBoxData}
                    setIsNav={setIsNav}
                    isNav={isNav}
                    showNav={showNav}
                />
            }
        </>
    )
}

export default HomePage;