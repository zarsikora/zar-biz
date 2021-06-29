import React, {useState} from "../_snowpack/pkg/react.js";
import {useFrame} from "../_snowpack/pkg/@react-three/fiber.js";
const RotatingBox = () => {
  const myMesh = React.useRef();
  const [active, setActive] = useState(false);
  useFrame(({clock}) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });
  return /* @__PURE__ */ React.createElement("mesh", {
    scale: active ? 1.5 : 1,
    onClick: () => setActive(!active),
    ref: myMesh
  }, /* @__PURE__ */ React.createElement("boxBufferGeometry", {
    args: [2, 2, 2],
    position: [0, 5, 5]
  }), /* @__PURE__ */ React.createElement("meshNormalMaterial", null));
};
export default RotatingBox;
