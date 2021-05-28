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

    useEffect(() => {
        var tl = new TimelineMax();
        tl.to(screen, {
          duration: 1.2,
          width: "100%",
          left: "0%",
          ease: Power3.easeInOut,
        });
        tl.to(screen, {
          duration: 1,
          left: "100%",
          ease: Power3.easeInOut,
          delay: 0.3,
        });
        tl.set(screen, { left: "-100%" });
        TweenMax.to(body, .3, {css: {
          opacity: "1",
          pointerEvents: "auto",
          ease: Power4.easeInOut
        }}).delay(2);
        return () => {
          TweenMax.to(body, 1, {css: {
            opacity: "0",
            pointerEvents: 'none'
          }});
      }
      });
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