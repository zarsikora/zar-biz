import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import Mock1 from "../../img/case-studies/brutalist-dunks/bd-mock-1.png.proxy.js";
import Mock2 from "../../img/case-studies/brutalist-dunks/bd-mock-2.png.proxy.js";
import Comparison from "../../img/case-studies/brutalist-dunks/comparison.png.proxy.js";
const BrutalistDunks = () => {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Hero, null, /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("h1", null, "Brutalist Dunks")), /* @__PURE__ */ React.createElement(Details, null, /* @__PURE__ */ React.createElement("p", null, "Because workers of the world (or at least Massachusetts) really do run on Dunkin."))), /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Inspiration"), /* @__PURE__ */ React.createElement("p", null, "I was heavily inspired by Peter Chadwick's ", /* @__PURE__ */ React.createElement("a", {
    target: "_BLANK",
    href: "https://www.theguardian.com/artanddesign/gallery/2018/mar/10/graphic-brutality-posters-of-italian-brutalist-architecture-in-pictures"
  }, "Brutalismo"), " project, which highlights the beauty of Italian Brutialist architecture with mid-century graphic flair. I wanted to emulate Chadwick's use of grain and loud mod shapes to build off of the inherently interesting shapes of Brutalism."), /* @__PURE__ */ React.createElement("p", null, 'So why not choose a famous Brutalist building like Boston City Hall? Well, when I think of quintessential proletariat institutions in Massachusetts, Dunkin Donuts ranks higher on my list. The shops may not be concrete, but the spirit of the worker is undeniable. Plus, I liked the challenge of "brutalizing" something that did not inherently fit the visual theme.'), /* @__PURE__ */ React.createElement("img", {
    alt: "",
    src: Comparison
  }), /* @__PURE__ */ React.createElement("p", null, "Once I finished my first take, I decided to expand on the concept and make some companion pieces.")), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "As Posters"), /* @__PURE__ */ React.createElement("img", {
    alt: "",
    src: Mock2
  }), /* @__PURE__ */ React.createElement(Attribution, {
    href: "https://www.freepik.com/psd/poster"
  }, "Poster psd created by antonioli")), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "As Packaging"), /* @__PURE__ */ React.createElement("img", {
    alt: "",
    src: Mock1
  }))));
};
export default BrutalistDunks;
const MobileImg = styled.img`
    display: block;
    @media (min-width: 768px){
        display: none;
    }
`;
const DesktopImg = styled.img`
    display: none;
    @media (min-width: 768px){
        display: block;
    }
`;
const Wrapper = styled.div`
    color: #000;
    background-color: #fff;
    padding-bottom: 3rem;
    text-align: center;
    @media (min-width: 768px){
        padding-bottom: 8rem;
    }
`;
const Hero = styled.div`
    padding: 5rem 5rem 2rem;
    text-align: center;

    h1 {
        font-size: 8rem;
        @media(min-width: 768px){
            font-size: 10rem;
        }
    }
`;
const Details = styled.div`
    font-family: "Roboto";
    font-size: 1.6rem;
`;
const Content = styled.div`
    font-family: "Roboto";
    padding: 0 2rem;
    @media (min-width: 768px){
        padding: 0 5rem;
        max-width: 90%;
        margin: 0 auto;
    }

    p {
        font-family: "Helvetica";
        font-size: 1.6rem;
        line-height: 1.5em;
        max-width: 60rem;
        margin: 1rem 0;
    }

    a {
        color: #000;
        text-decoration: underline;
        transition: all ease 300ms;

        &:hover {
            color: red;
        }
    }

    ul {
        padding: 0;
        margin-left: 2rem;
        font-size: 1.6rem;
        font-family: Helvetica;
        list-style: none;
        display: flex;
        max-width: 60rem;
        margin: 0 auto;
        
        li {
            margin-bottom: 1.5rem;
        }
    }

    img {
        width: 100%;
        max-width: 700px;
        height: auto;
        margin: 2rem auto;
    }
`;
const Attribution = styled.a`
    display: block;
`;
const Heading = styled.h2`
    font-size: 3rem;
`;
const PinkBlock = styled.div`
    background-color: #ED5AAB;
    padding: 2rem;
    display: block;
    margin: 0 auto 2rem;
    @media (min-width: 768px){
        width: 50%;
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-top: 0;
    }

    p {
        font-family: "Roboto";
    }

    &:last-child {
        margin-bottom: 0;
    }
`;
const RichText = styled.div`
    margin-bottom: 6rem;
    text-align: center;

    &.desktopOnly {
        display: none;
        @media (min-width: 768px){
            display: block;
        }
    }

    p {
        margin: 1rem auto;

        &:last-child{
            margin-bottom: 0;
        }
    }
`;
