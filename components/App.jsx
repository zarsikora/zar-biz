// the worms control the spice 
import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from "framer-motion";
import { createGlobalStyle } from 'styled-components';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
//Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import PlaygroundPage from './pages/PlaygroundPage';
//Components
import AudioButton from './AudioButton';
import Sprite from './Sprite';
import MainNav from "./MainNav";


const App = () => {
    const [speechBoxDialogue, setSpeechBoxDialogue] = useState(dialogueObj.intro);
    const [isNavActive, setIsNavActive] = useState(false);

    const handleMainNavRender = () => {
        setIsNavActive(!isNavActive);
    }

    const webFontConfig = {
        custom: {
            families: ['Detechno', 'Roboto']
        }
    }

    return (
        <>
            <WebfontLoader config={webFontConfig}>
                <Router>
                    <GlobalStyle />
                    <AudioButton />

                    <Sprite handleMainNavRender={handleMainNavRender} isNavActive={isNavActive} />

                    <AnimatePresence>
                        {isNavActive && <MainNav handleMainNavRender={handleMainNavRender} />}
                    </AnimatePresence>
                    
                    {/* if route is whereto do this */}
                    {/* <SpeechBox messages={speechBoxDialogue} /> */}

                    <AnimatePresence initial={false} exitBeforeEnter>
                        <Switch>
                            <Route exact path="/">
                                <HomePage />
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
                            <Route path="/playground">
                                <PlaygroundPage />
                            </Route>
                        </Switch>
                    </AnimatePresence>
                </Router>
            </WebfontLoader>
        </>
    );
}

export default App;

const dialogueObj = {
    intro: {
        lines: [
            "Hi, I'm Zar -- Welcome to my little pocket of the digital hellscape.",
            "<span class='small'>Well technically I'm a graphical representation, but you get my meaning...</span>",
            "What can I do ya for?"
        ],
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

//Stop font flickering
.wf-loading body {
    opacity: 0;
}
.wf-active body .wf-inactive body {
    opacity: 1;
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


p.alt {
    font-family: 'Roboto';
}

// ANIMATION
@keyframes bounce {
  0% {top: -2px}
  50% {top: 2px}
  100% { top: -2px}
}

@keyframes fadeIn {
    0% { opacity: 0}
    100% {opacity: 1}
}

    @keyframes spin {
        0% {
        transform: translateY(0) rotate(0deg);
        }
        100% {
        transform: translateY(-100%) rotate(360deg);
        }
    }

@keyframes bounceRight {
    0% {transform: translateX(-2px)}
    50% {transform: translateX(2px)}
    100% { transform: translateX(-2px)}
  }

  @keyframes dripDown {
    0% { d: path("M1920.5,27.81s-143.91,5.27-254,39.62-307.44,73.32-668-19.5S.5,27.34.5,27.34V.5H1916.6Z"); }
    100% { d: path("M1920.5,1555.21s-143.91,70.43-254,529.13-307.44,979.4-668-260.34S.5,1548.89.5,1548.89V.5h1920Z"); }
  }

  @keyframes dripUp {
      0% { d: path("M.5,70.13s144-3,254.59-35.53,308.57-68.38,667.6,30.22,997.55,36.63,997.55,36.63l-.43,26.83H.5Z") }
      100% { d: path("M7.56,1037.66s144.23-69.77,256.37-528,311.88-978,666.83,263.38,996.75,279.63,996.75,279.63l-7,1548.37L.5,2592.35Z") }
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