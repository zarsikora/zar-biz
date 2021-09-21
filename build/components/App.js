import React, {useState, useRef, useEffect} from "../_snowpack/pkg/react.js";
import {AnimatePresence} from "../_snowpack/pkg/framer-motion.js";
import {createGlobalStyle} from "../_snowpack/pkg/styled-components.js";
import {Switch, BrowserRouter as Router, Route} from "../_snowpack/pkg/react-router-dom.js";
import WebfontLoader from "../_snowpack/pkg/@dr-kobros/react-webfont-loader.js";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import WorkPage from "./pages/WorkPage.js";
import ContactPage from "./pages/ContactPage.js";
import PlaygroundPage from "./pages/PlaygroundPage.js";
import TokyoBikes from "./case-studies/TokyoBikes.js";
import LesFleursDeMars from "./case-studies/LFDM.js";
import BrutalistDunks from "./case-studies/BrutalistDunks.js";
import Parafactory from "./case-studies/Parafactory.js";
import TransHealth from "./case-studies/TransHealth.js";
import AudioButton from "./AudioButton.js";
import Sprite from "./Sprite.js";
import MainNav from "./MainNav.js";
const App = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const handleMainNavRender = () => {
    setIsNavActive(!isNavActive);
  };
  const webFontConfig = {
    custom: {
      families: ["Detechno", "Roboto"]
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    id: "app-wrapper",
    className: isNavActive ? "nav-active" : ""
  }, /* @__PURE__ */ React.createElement(WebfontLoader, {
    config: webFontConfig
  }, /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(GlobalStyle, null), /* @__PURE__ */ React.createElement(AudioButton, null), /* @__PURE__ */ React.createElement(Sprite, {
    handleMainNavRender,
    isNavActive
  }), /* @__PURE__ */ React.createElement(AnimatePresence, null, isNavActive && /* @__PURE__ */ React.createElement(MainNav, {
    handleMainNavRender
  })), /* @__PURE__ */ React.createElement(AnimatePresence, {
    initial: false,
    exitBeforeEnter: true
  }, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/"
  }, /* @__PURE__ */ React.createElement(HomePage, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/work"
  }, /* @__PURE__ */ React.createElement(WorkPage, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/about"
  }, /* @__PURE__ */ React.createElement(AboutPage, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/contact"
  }, /* @__PURE__ */ React.createElement(ContactPage, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/playground"
  }, /* @__PURE__ */ React.createElement(PlaygroundPage, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/tokyo-bikes"
  }, /* @__PURE__ */ React.createElement(TokyoBikes, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/lfdm"
  }, /* @__PURE__ */ React.createElement(LesFleursDeMars, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/parafactory"
  }, /* @__PURE__ */ React.createElement(Parafactory, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/transhealth"
  }, /* @__PURE__ */ React.createElement(TransHealth, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/brutalist-dunks"
  }, /* @__PURE__ */ React.createElement(BrutalistDunks, null)))))));
};
export default App;
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

//fix height when nav is open
#app-wrapper {
    &.nav-active {
        height: 100vh;
        overflow: hidden;
    }
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
`;
