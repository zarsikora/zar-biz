import React from "../_snowpack/pkg/react.js";
import styled from "../_snowpack/pkg/styled-components.js";
const Jumbotron = (props) => {
  return /* @__PURE__ */ React.createElement(Header, {
    style: {color: props.color, opacity: props.opacity}
  }, props.text);
};
export default Jumbotron;
const Header = styled.h1`
    font-size: 7rem;
    z-index: 2;
    display: block;
    text-align: center;
    margin-top: 8rem;
    @media(min-width: 768px){
        font-size: 10rem;
        margin-top: 0;
    }
    @media(min-width: 992px){
        margin: 0;
    }
`;
