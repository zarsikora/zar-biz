// the worms control the spice 
import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import gsap from "gsap";
import AudioButton from './AudioButton';
import Jumbotron from "./Jumbotron";
import Sprite from './Sprite';
import AnimationPane from './AnimationPane';
import SpeechBox from "./SpeechBox";
import MainNav from "./MainNav";
import AboutPage from './pages/AboutPage';
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

//SPRITE SHIFTING FUNC
//TODO: connect dialogue change to speechbox
//TODO: add work page dialogue to array and get it working
const App = () => {
    // 
    const [spriteClicked, setSpriteClicked] = useState(false);
    const [isSpeechBoxActive, setIsSpeechBoxActive] = useState(false);
    const [isSpriteInSpeechBox, setIsSpriteInSpeechBox] = useState(false);
    const [speechBoxData, isSpeechBoxData] = useState(dialogueObj.intro)
    // I think this wants to be refactored to some other name
    const [isNav, setIsNav] = useState(false);
    
    // are these pages? things like panes take up this space
    // const [page, setPage] = useState('home')

    let initialSpriteClick = true;

    // does this do way too much?
    const spriteClickHandler = () => {
        if (initialSpriteClick) {
            setSpriteClicked(true);
            setPage('pane');
            // setPaneActive(true);
            // useEffect for animation change here too
            setTimeout(() => {
                setIsSpeechBoxActive(true);
            }, 500);
            // this else block never runs for some reason, need to figure that out
        } else {
            // check this works
            setSpeechBoxData(dialogueObj.work);
            console.log(speechBoxData);
            setIsSpeechBoxActive(true);
        }

    }

    const removeSpeechBox = () => {
        setIsSpeechBoxActive(false);
    }

    const pages = {
        home: <Jumbotron text="HOWDY" color="#CEFF00" />,
        nav: <MainNav setPage={setPage} />,
        work: <WorkPage />,
        about: <AboutPage />,
        contact: <ContactPage />
    }

    return (
        <>
            <Router>
                <GlobalStyle />
                <AudioButton />
                {/* {pages[page]} */}

                {/*  active is not needed as props, refactor out.  */}
                <Sprite
                    isSpriteInSpeechBox={isSpriteInSpeechBox}
                    // active seems like a really bad name, this makes me think 
                    // it is a component render boolean
                    active={spriteClicked}
                    spriteClickHandler={spriteClickHandler}
                />

                {isSpeechBoxActive &&
                    <SpeechBox
                        isActive={isSpeechBoxActive}
                        setIsSpriteInSpeechBox={setIsSpriteInSpeechBox}
                        isSpriteInSpeechBox={isSpriteInSpeechBox}
                        messages={speechBoxData}
                        setPage={setPage}
                        isNav={isNav}
                    />
                }

                <Switch>
                    <Route exact path="/">
                        <Jumbotron text="HOWDY" color="#CEFF00" />
                    </Route>
                    <Route path="/nav">
                        <MainNav setPage={setPage} />
                    </Route>
                    <Route path="/work">
                        <WorkPage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/contact">
                        <ContactPage />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;

const dialogueObj = {
    intro: {
        lines: [
            "Fancy seeing you here! I'm Zar -- Welcome to my little pocket of the digital hellscape.",
            "<span class='small'>Well technically I'm a graphical representation, but you get my meaning...</span>",
            "What can I do ya for?"
        ],
        navigation: {
            options: [
                {
                    line: "View My Work",
                    page: "/work"
                },
                {
                    line: "Hear About Me",
                    page: "/about"
                },
                {
                    line: "Contact Me",
                    page: "/contact"
                }
            ]
        }
    },
    work: {
        lines: [
            "Here is a secondary bit of dialogue!",
        ]
    }
}

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Detechno';
    src: local('Detechno'), url(./../fonts/LL-DEtechno/LLDEtechnoTwistGX.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url(./../fonts/RobotoMono-VariableFont_wght.ttf) format('truetype');
}

html {
    font-size: 62.5%;
}

body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Detechno';
    background-color: #141515;
    color: #fff;
    position: relative;
    overflow: hidden;
}

h1 {
    font-size: 5rem;
    margin: 0;
    @media(min-width: 992px){
        font-size: 5.556vw;
    }
    @media(min-width: 1920px){
        font-size: 10.6rem;
    }
}

span.small {
    font-size: 20px;
    opacity: .5;
}

// ANIMATION
@keyframes bounce {
  0% {top: -2px}
  50% {top: 2px}
  100% { top: -2px}
}

@keyframes bounceRight {
    0% {transform: translateX(-2px)}
    50% {transform: translateX(2px)}
    100% { transform: translateX(-2px)}
  }

@keyframes textWiggle {
    0% {font-variation-settings: "TWST" 100}
    50% {font-variation-settings: "TWST" 50}
    100% {font-variation-settings: "TWST" 100}
}

@-webkit-keyframes GradientShift {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes GradientShift {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes GradientShift {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
`