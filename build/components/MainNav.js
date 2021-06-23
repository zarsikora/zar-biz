import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import styled from "../_snowpack/pkg/styled-components.js";
import {motion, AnimatePresence} from "../_snowpack/pkg/framer-motion.js";
import {
  BrowserRouter as Router,
  Link
} from "../_snowpack/pkg/react-router-dom.js";
import {Component} from "../_snowpack/pkg/react.js";
const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96]
};
const navPane = {
  hidden: {
    opacity: 0,
    background: "none"
  },
  show: {
    opacity: 1,
    background: "pink",
    transition: {
      duration: 0.01,
      delay: 0.61
    }
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};
const exitPane = {
  hidden: {
    scaleY: 0,
    originY: 1
  },
  leave: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};
const MainNav = ({handleMainNavRender}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(WaveIn, {
    viewBox: "0 0 1920 1080",
    preserveAspectRatio: "none"
  }, /* @__PURE__ */ React.createElement(motion.path, {
    initial: {scaleY: 0, originY: 0},
    animate: {scaleY: 1},
    transition,
    className: "morph",
    fill: "pink"
  })), /* @__PURE__ */ React.createElement(NavPane, {
    variants: navPane,
    initial: "hidden",
    animate: "show"
  }, /* @__PURE__ */ React.createElement(Nav, null, /* @__PURE__ */ React.createElement(NavItem, {
    onClick: () => handleMainNavRender()
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement(NavItem, {
    onClick: () => handleMainNavRender()
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/work"
  }, "Work")), /* @__PURE__ */ React.createElement(NavItem, {
    onClick: () => handleMainNavRender()
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/about"
  }, "About Me")), /* @__PURE__ */ React.createElement(NavItem, {
    onClick: () => handleMainNavRender()
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/contact"
  }, "Contact")))));
};
export default MainNav;
const WaveIn = styled.svg`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 105vw;
    height: 100%;
    pointer-events: none;
    z-index: 990;
    display: block;

    path {
        width: 100vw;
        animation: dripDown 700ms;
        animation-timing-function: ease-in;
    }
`;
const ExitPane = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #000;
    bottom: 0;
    right: 0;
    z-index: 999;
`;
const NavPane = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: pink;
    display: block;
    z-index: 997;
    transform-origin: 50% 0%;
`;
const Nav = styled(motion.ul)`
    margin: 0;
    padding: 0;
    list-style: none;  
    color: red;
    display: block;
    font-size: 7rem;
    position: absolute;
    top: 10rem; 
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
    font-family: 'Detechno';
    @media(min-width: 768px){
        font-size: 12rem;
        top: 5rem;
    }
    @media(min-width: 992px){
        font-size: 10rem;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    @media(min-width: 1440){
        font-size: 8vw;
    }
`;
const NavItem = styled(motion.li)`
    cursor: pointer;
    transition: all ease 300ms;

    &:hover {
        color: black;
    }

    a {
        color: red;
        transition: all ease 300ms;

        &:hover {
            color: #000;
        }
    }
`;