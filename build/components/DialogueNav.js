import React from "../_snowpack/pkg/react.js";
import styled from "../_snowpack/pkg/styled-components.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "../_snowpack/pkg/react-router-dom.js";
const DialogueNav = ({options}) => {
  const Page = () => {
    /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Home"));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "nav-menu"
  }, /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Nav, null, options.map((option) => {
    return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
      to: option.page,
      key: option.page
    }, option.line));
  })), /* @__PURE__ */ React.createElement(Switch, null, options.map((option) => {
    return /* @__PURE__ */ React.createElement(Route, {
      key: option.page,
      path: option.page
    }, /* @__PURE__ */ React.createElement(Page, null));
  }))));
};
export default DialogueNav;
const Nav = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;  
    color: red;
    display: block;
    font-size: 7rem;
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
    font-family: 'Detechno';
    @media(min-width: 768px){
        font-size: 10rem;
    }
    @media(min-width: 992px){
        font-size: 6vw;
    }
    @media(min-width: 1440){
        font-size: 8vw;
    }

    li {
        cursor: pointer;
        transition: all ease 300ms;

        &:hover {
            color: black;
        }
    }
`;
