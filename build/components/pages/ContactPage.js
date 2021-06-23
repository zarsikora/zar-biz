import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {motion} from "../../_snowpack/pkg/framer-motion.js";
import Shader from "../Shader.js";
import GrossCake from "../../img/gross-cake.png.proxy.js";
const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};
const WorkPage = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper, {
    initial: {opacity: 0},
    animate: {opacity: 1}
  }, /* @__PURE__ */ React.createElement(Shader, {
    img: GrossCake,
    opacity: ".3"
  }), /* @__PURE__ */ React.createElement(Pane, {
    initial: {opacity: 0},
    animate: {opacity: 1}
  }, /* @__PURE__ */ React.createElement(ContactList, null, contactData.map((contact) => {
    return /* @__PURE__ */ React.createElement(ContactBlock, {
      key: contact.name
    }, /* @__PURE__ */ React.createElement("a", {
      target: "_BLANK",
      href: contact.link
    }, /* @__PURE__ */ React.createElement("span", null, contact.name)));
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
    display: inline;
    position: relative;
    @media(min-width: 768px){
        font-size: 9rem;
    }

    a {
        color: #fff;
        text-decoration: none;
        transition: all ease 300ms;

        &:after {
            content: ", ";
            color: #fff;
            transition: all ease 300ms;
        }

        &:hover {
            color: red;

            &:after {
                color: red;
            }
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
    link: "mailto:howdy@zarah.biz"
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com/zaar"
  },
  {
    name: "Instagram (Main)",
    link: "https://www.instagram.com/jellodemon/"
  },
  {
    name: "Instagram (Design)",
    link: "https://www.instagram.com/zaaaaaaaaaaaaaaar/"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zarah-sikora-61980864/"
  },
  {
    name: "Resume",
    link: "./../../files/z-resume-0608.pdf"
  }
];
