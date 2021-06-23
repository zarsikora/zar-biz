import React, {useState} from "../_snowpack/pkg/react.js";
import styled from "../_snowpack/pkg/styled-components.js";
import gsap from "../_snowpack/pkg/gsap.js";
import Message from "./Message.js";
import rightArrow from "../img/icon/arrow-right.png.proxy.js";
const SpeechBox = ({isActive, setIsSpriteInSpeechBox, isSpriteInSpeechBox, messages, isNav, setPage}) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [arrowActive, setArrowActive] = useState(true);
  let lines = messages.lines;
  let hasNav = messages.navigation;
  if (isActive) {
    gsap.to(".speech-box", {duration: 0.3, opacity: 0.8});
  }
  const handleClick = () => {
    if (currentMessage < lines.length - 1) {
      setCurrentMessage(currentMessage + 1);
    } else if (hasNav) {
      setPage("nav");
      setArrowActive(false);
      setIsSpriteInSpeechBox(true);
    }
  };
  return /* @__PURE__ */ React.createElement(Box, {
    className: "speech-box"
  }, /* @__PURE__ */ React.createElement(Message, {
    isFirstMessage,
    setIsFirstMessage,
    message: lines[currentMessage],
    key: currentMessage,
    isSpriteInSpeechBox
  }), arrowActive && /* @__PURE__ */ React.createElement(Next, {
    onClick: handleClick
  }, /* @__PURE__ */ React.createElement("img", {
    src: rightArrow
  })));
};
export default SpeechBox;
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    background: rgba(0, 0, 0, 0.9);
    opacity: 0;
    width: 80%;
    height: 30vh;
    border-radius: 3rem;
    font-family: 'Roboto';
    font-size: 2.5rem;
    padding: 5rem;
    box-sizing: border-box;
    @media(min-width: 768px){
        font-size: 3.5rem;
        width: 90%;
    }
    @media(min-width: 992px){
        font-size: 3rem;
        width: 80%;
    }
`;
const Next = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;

    img {
        width: 3rem;
        animation: bounceRight 1s infinite;
    }
`;
