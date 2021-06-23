import React from "../_snowpack/pkg/react.js";
import styled from "../_snowpack/pkg/styled-components.js";
import Typewriter from "../_snowpack/pkg/typewriter-effect.js";
const Message = ({isFirstMessage, setIsFirstMessage, message}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(TypewriterMessage, {
    options: {
      delay: 20
    },
    onInit: (typewriter) => {
      if (isFirstMessage) {
        setTimeout(() => {
          typewriter.typeString(message).start();
        }, 300);
        setIsFirstMessage(false);
      } else {
        typewriter.typeString(message).start();
      }
    }
  }));
};
const TypewriterMessage = styled(Typewriter)`
    font-size: 6rem;  
`;
export default Message;
