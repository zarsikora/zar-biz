import React, {useState, useRef} from "../_snowpack/pkg/react.js";
import styled from "../_snowpack/pkg/styled-components.js";
import rainyDay from "../sound/rainy-day.mp3.proxy.js";
import speakerIcon from "../img/icon/Speaker_Icon.svg.proxy.js";
import muteIcon from "../img/icon/Mute_Icon.svg.proxy.js";
const AudioButton = () => {
  const music = new Audio(rainyDay);
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef();
  const songControls = () => {
    if (isPlaying) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("audio", {
    ref,
    src: rainyDay
  }), /* @__PURE__ */ React.createElement(AudioBtn, {
    "aria-pressed": isPlaying,
    onClick: songControls,
    onKeyDown: songControls,
    "aria-label": "Click to toggle music on and off"
  }, /* @__PURE__ */ React.createElement("img", {
    src: isPlaying ? speakerIcon : muteIcon
  })));
};
export default AudioButton;
const AudioBtn = styled.button`
    background: none;
    outline: none;
    border: none;
    z-index: 999;
    position: absolute;
    display: none;

    @media(min-width: 768px){
        display: block
    }

    img {
        width: 3rem;
    }
`;
