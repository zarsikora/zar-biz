import React, {useRef, useState, Suspense} from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {Canvas} from "../../_snowpack/pkg/@react-three/fiber.js";
import RotatingBox from "../RotatingBox.js";
const PlaygroundPage = () => {
  return /* @__PURE__ */ React.createElement(CanvasContainer, null, /* @__PURE__ */ React.createElement(Canvas, null, /* @__PURE__ */ React.createElement("ambientLight", {
    intensity: 0.1
  }), /* @__PURE__ */ React.createElement("directionalLight", {
    color: "red",
    position: [0, 0, 5]
  }), /* @__PURE__ */ React.createElement(RotatingBox, null)));
};
export default PlaygroundPage;
const CanvasContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;
