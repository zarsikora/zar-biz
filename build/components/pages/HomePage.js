import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {
  BrowserRouter as Router,
  Link
} from "../../_snowpack/pkg/react-router-dom.js";
import {motion} from "../../_snowpack/pkg/framer-motion.js";
import Jumbotron from "../Jumbotron.js";
import ShaderImage from "../ShaderImage.js";
import Hamburglar from "../../img/hamburglar.jpg.proxy.js";
const HomePage = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper, {
    initial: {opacity: 0},
    animate: {opacity: 1}
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Jumbotron, {
    text: "HOWDY",
    color: "#fff",
    opacity: "1"
  }), /* @__PURE__ */ React.createElement(ShaderImage, {
    img: Hamburglar,
    alt: "Image description: Vintage image of the Hamburglar being disrupted by WebGL shaders"
  }), /* @__PURE__ */ React.createElement(SubHeader, null, "I'm Zar, a designer and creative technologist with a passion for equitable design, accessibility, and spicy aesthetics."), /* @__PURE__ */ React.createElement(CallToAction, null, /* @__PURE__ */ React.createElement(Link, {
    to: "/work",
    "aria-label": "View my work"
  }, "View my work. ", /* @__PURE__ */ React.createElement("span", null, "👹"))))));
};
export default HomePage;
const Wrapper = styled(motion.div)`
    min-height: 100vh;
    padding: 0 2rem;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    position: relative;
    @media(min-width: 768px){
        padding: 0;
    }
`;
const SubHeader = styled.p`
    font-family: "Roboto";
    color: #fff;
    text-align: center;
    font-size: 1.6rem;
    margin: 2rem auto;
    @media(min-width: 768px){
        width: 50%;
    }
    @media(min-width: 1440px){
        font-size: 1.111vw;
    }
    @media(min-width: 1920px){
        font-size: 2.13rem;
    }
`;
const CallToAction = styled.span`
    text-align: center;
    a {
        color: pink;
        font-family: "Roboto";
        margin: 0 auto;
        display: block;
        font-size: 2rem;
        text-decoration: none;
        transition: all ease 300ms;

        span {
            @media(hover: hover){
                opacity: 0;
                transition: all ease 300ms;
            }
        }

        &:hover {
            @media (hover: hover) {
                color: red;

                span {
                    opacity: 1;
                }
            }
        }
    }
`;
