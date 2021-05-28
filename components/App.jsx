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
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

//SPRITE SHIFTING FUNC
//TODO: connect dialogue change to speechbox
//TODO: add work page dialogue to array and get it working
const App = () => {
    const [spriteClicked, setSpriteClicked] = useState(false);
    const [paneActive, setPaneActive] = useState(false);
    const [isWorkActive, setIsWorkActive] = useState(false);
    const [isSpeechBoxActive, setIsSpeechBoxActive] = useState(false);
    const [isSpriteInSpeechBox, setIsSpriteInSpeechBox] = useState(false);
    const [isNav, setIsNav] = useState(false);
    let speechBoxData = dialogueObj.intro;
    let initialSpriteClick = true;

    const spriteClickHandler = () => {
        if (initialSpriteClick) {
            setSpriteClicked(true);
            setPaneActive(true);

            setTimeout(() => {
                setIsSpeechBoxActive(true);
            }, 500);
        } else {
            speechBoxData = dialogueObj.work;
            console.log(speechBoxData);
            setIsSpeechBoxActive(true);
        }

    }

    const showNav = () => {
        setIsNav(true);
    }

    const removeSpeechBox = () => {
        setIsSpeechBoxActive(false);
    }

    const paneSlideUp = (pane) => {
        gsap.to(pane, { duration: .7, scaleY: 1, transformOrigin: 'bottom' });
    }

    const navLinkHandler = () => {
        setIsWorkActive(true);
        removeSpeechBox();
    }

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );

    function Home() {
        return <h2>Home</h2>;
    }

    function About() {
        return <h2>About</h2>;
    }

    function Users() {
        return <h2>Users</h2>;
    }
        // <div className="app" data-barba="container">
        //     <Router>
        //         <Switch>
        //             <Route exact path ='/'>
        //                 <h2>Small pee a pee pe</h2>
        //             </Route>
        //             <Route path='/workz'>
        //                 <h1>Big kaka popooo</h1>
        //             </Route>
        //         </Switch>
        //     </Router>

        //     <GlobalStyle />
        //     <AudioButton />
        //     <Jumbotron text="HOWDY" color="#CEFF00" />

        //     <Sprite
        //         isSpriteInSpeechBox={isSpriteInSpeechBox}
        //         active={spriteClicked}
        //         spriteClickHandler={spriteClickHandler}
        //     />

        //     <AnimationPane active={paneActive} paneSlideUp={paneSlideUp} />

        //     {isNav && <MainNav 
        //                 navLinkHandler={navLinkHandler} 
        //                 paneSlideUp={paneSlideUp}
        //             />
        //     }

        //     {isSpeechBoxActive &&
        //         <SpeechBox
        //             isActive={isSpeechBoxActive}
        //             setIsSpriteInSpeechBox={setIsSpriteInSpeechBox}
        //             isSpriteInSpeechBox={isSpriteInSpeechBox}
        //             messages={speechBoxData}
        //             setIsNav={setIsNav}
        //             isNav={isNav}
        //             showNav={showNav}
        //         />
        //     }
        // </div>

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