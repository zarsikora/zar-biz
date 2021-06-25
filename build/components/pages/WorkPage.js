import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {motion} from "../../_snowpack/pkg/framer-motion.js";
import Shader from "../Shader.js";
import FreshSites from "../../img/fresh-sites-min.png.proxy.js";
const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const listItem = {
  hidden: {opacity: 0},
  show: {opacity: 1}
};
const WorkPage = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Shader, {
    img: FreshSites,
    opacity: ".5",
    alt: "Vintage photography of a hand reaching into a full refrigerator, warped by WebGL shaders"
  }), /* @__PURE__ */ React.createElement(Pane, null, /* @__PURE__ */ React.createElement(Header, {
    inital: {opacity: 0},
    animate: {opacity: 1}
  }, "Work"), /* @__PURE__ */ React.createElement(WorkList, {
    variants: container,
    initial: "hidden",
    animate: "show"
  }, workData.map((work) => {
    return /* @__PURE__ */ React.createElement(WorkBlock, {
      variants: listItem,
      key: work.name,
      bg: work.bg,
      text: work.text
    }, /* @__PURE__ */ React.createElement("a", {
      target: "_BLANK",
      href: work.link,
      "aria-label": work.label
    }, /* @__PURE__ */ React.createElement("span", null, work.name), /* @__PURE__ */ React.createElement("img", {
      src: work.img,
      alt: work.alt
    })));
  })))));
};
export default WorkPage;
const Wrapper = styled.div`
    background-color: #000
`;
const Pane = styled(motion.div)`
    padding: 5rem;
    width: 100%;
    height: 100vh;
    display: block;
    overflow-y: scroll;
    background-color: none;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
`;
const Header = styled(motion.h1)`
    text-align: center;
    color: #fff;
    font-size: 7rem;
    @media(min-width: 992px){
        font-size: 7vw;
    }

`;
const WorkList = styled(motion.ul)`
    list-style: none;
    padding: 0;
    text-align: center;
    font-size: 5rem;
    @media(min-width: 992px){
        font-size: 5vw;
    }

    li, a {
        color: #000;
        text-decoration: none;
        transition: all ease 300ms;
    }
`;
const WorkBlock = styled(motion.li)`
    background-color: ${(props) => props.bg};
    width: 100%;
    margin: 2rem auto;
    position: relative;
    transition: all ease 300ms;
    @media(min-width: 992px){
        width: 50%;

        &:hover {
            img {
                opacity: 1;
            }

            a span {
                color: #fff;
                position: relative;
                z-index: 88; 
            }
        }
    }

    img {
        position: absolute;
        width: 100%;
        height: 100%; 
        object-fit: cover;
        left: 0;
        top: 0;
        opacity: 0;
        mix-blend-mode: multiply;
        transition: all ease 300ms;
    }

    a {
        color: ${(props) => props.text};
        text-decoration: none;
        box-sizing: border-box;
        display: block;
        padding: 5rem 2rem;
    }
`;
const workData = [
  {
    name: "Alarad",
    link: "https://www.alaradcapital.com/",
    bg: "#27331d",
    text: "#bd8e65",
    img: "./../../img/work/alarad-peek.png",
    alt: "Green and gold geometric designs of Alarad brand kit",
    label: "View Alarad project"
  },
  {
    name: "Steel Root",
    link: "https://steelroot.us/",
    bg: "#181d40",
    text: "#01adcb",
    img: "./../../img/work/sr-peek.png",
    alt: "Cyborg with glowing eyes",
    label: "View Steel Root project"
  },
  {
    name: "DriveForce",
    link: "https://driveforce.golf",
    bg: "#919A6B",
    text: "#081D1A",
    img: "./../../img/work/df-peek.png",
    alt: "A man swinging a golf club adorned with a semicircular graphic to accentute the swing motion",
    label: "View DriveForce project"
  },
  {
    name: "TransHealth",
    link: "https://www.transhealth.org/",
    bg: "#96b0c5",
    text: "#2a275b",
    img: "./../../img/work/th-peek.png",
    alt: "The Transhealth logo",
    label: "View Transhealth project"
  },
  {
    name: "ThinkForward",
    link: "https://thinkforwardfinancial.com/home/",
    bg: "#e16e37",
    text: "#fff",
    img: "./../../img/work/tff-peek.png",
    alt: "A diverse group talk at a meeting table",
    label: "View ThinkForward project"
  }
];
