import React from "../../_snowpack/pkg/react.js";
import {NavLink} from "../../_snowpack/pkg/react-router-dom.js";
import {TweenMax, TimelineMax, Power3, Power4} from "../../_snowpack/pkg/gsap.js";
import {useRef, useEffect} from "../../_snowpack/pkg/react.js";
const TestPage = () => {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      height: "100%",
      ease: Power3.easeInOut
    });
    tl.to(screen, {
      duration: 1,
      top: "100%",
      ease: Power3.easeInOut,
      delay: 0.3
    });
    tl.set(screen, {left: "-100%"});
    TweenMax.to(body, 0.3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut
      }
    }).delay(2);
    return () => {
      TweenMax.to(body, 1, {
        css: {
          opacity: "0",
          pointerEvents: "none"
        }
      });
    };
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "load-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "load-screen1",
    ref: (el) => screen = el
  })), /* @__PURE__ */ React.createElement("div", {
    "data-barba": "container",
    className: "Contact"
  }, /* @__PURE__ */ React.createElement("div", {
    ref: (el) => body = el,
    className: "Headd"
  }, /* @__PURE__ */ React.createElement("div", null, " Contact Me!!!"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/",
    className: "button"
  }, "Home"))));
};
export default TestPage;
