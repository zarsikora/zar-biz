import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {motion} from "../../_snowpack/pkg/framer-motion.js";
import Shader from "../Shader.js";
import GrossCake from "../../img/gross-cake-min.png.proxy.js";
const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};
const WorkPage = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper, {
    initial: {opacity: 0},
    animate: {opacity: 1}
  }, /* @__PURE__ */ React.createElement(Shader, {
    img: GrossCake,
    opacity: ".3",
    alt: "Image description: Vintage photography of vibrant berry pie slices are disrupted by WebGL shaders"
  }), /* @__PURE__ */ React.createElement(Pane, {
    initial: {opacity: 0},
    animate: {opacity: 1}
  }, /* @__PURE__ */ React.createElement(ContactList, null, contactData.map((contact) => {
    return /* @__PURE__ */ React.createElement(ContactBlock, {
      key: contact.name
    }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("a", {
      target: "_BLANK",
      href: contact.link,
      "aria-label": contact.label
    }, /* @__PURE__ */ React.createElement("span", null, contact.name))));
  })))));
};
export default WorkPage;
const Wrapper = styled(motion.div)`
    background-color: #000;
`;
const Pane = styled(motion.div)`
    padding: 5rem;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    background-color: none;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
`;
const ContactList = styled.ul`
    list-style: none;
    text-align: center;
    padding: 0;
`;
const ContactBlock = styled.li`
    font-size: 5rem;
    display: block;
    position: relative;
    @media(min-width: 768px){
        font-size: 9rem;
        display: inline;
    }

    span {
        @media(min-width: 768px){
            transition: all ease 300ms;
            background: none;
            padding: 1rem .5rem;

            &:hover {
                background: #000;
            }

            @media (hover: none) {
                &:hover {
                    background: none;
                }
            }     
        }
    }

    a {
        color: #fff;
        text-decoration: none;
        transition: all ease 300ms;
        background: none;
        padding: 1rem;

        &:after {
            content: ",";
            color: #fff;
            transition: all ease 300ms;
        }
    }

    &:last-child {
        a {
            &:after {
                display: none;
            }
        }
    }
`;
const contactData = [
  {
    name: "Email Me",
    link: "mailto:howdy@zarah.biz",
    label: "Email me"
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com/zaar",
    label: "Visit my Dribbble"
  },
  {
    name: "Instagram (Main)",
    link: "https://www.instagram.com/jellodemon/",
    label: "Visit my personal Instagram"
  },
  {
    name: "Instagram (Design)",
    link: "https://www.instagram.com/zaaaaaaaaaaaaaaar/",
    label: "Visit my design Instagram"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zarah-sikora-61980864/",
    label: "Visit my LinkedIn"
  },
  {
    name: "Resume",
    link: "./../../files/z-resume-0827.pdf",
    label: "Download my resume"
  }
];
