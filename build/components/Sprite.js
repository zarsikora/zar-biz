import React from "../_snowpack/pkg/react.js";
import styled from "../_snowpack/pkg/styled-components.js";
const Sprite = ({handleMainNavRender}) => {
  let rightPos = "2rem";
  let topPos = "2rem";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SpriteWrapper, {
    style: {top: topPos, right: rightPos},
    className: "sprite-wrapper",
    onClick: () => handleMainNavRender()
  }, /* @__PURE__ */ React.createElement(SpriteImg, {
    src: "./../img/sprite.png"
  }), /* @__PURE__ */ React.createElement(SpeechBubble, {
    src: "./../img/click-me.png"
  })));
};
export default Sprite;
const SpriteWrapper = styled.div`
    //position: fixed;
    position: absolute;
    width: 10rem;
    height: 10rem;
    z-index: 999;
    @media(min-width: 992px){
        width: 12rem;
        height: 12rem;
    }
`;
const SpeechBubble = styled.img`
    position: absolute;
    width: 10rem;
    left: -7rem;
    display: none;
    @media(min-width: 992px){
        display: block;
    }
`;
const SpriteImg = styled.img`
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: bounce 1s infinite;
    cursor: pointer;
`;
