import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import AEmpathy from "../../img/case-studies/tokyo-bikes/a-empathy.png.proxy.js";
import AEmpathyMobile from "../../img/case-studies/tokyo-bikes/AEmpathy-mobile.png.proxy.js";
import Persona1 from "../../img/case-studies/tokyo-bikes/user-persona-1.png.proxy.js";
import MobilePersona1 from "../../img/case-studies/tokyo-bikes/persona-mobile-1.png.proxy.js";
import MobilePersona2 from "../../img/case-studies/tokyo-bikes/persona-mobile-2.png.proxy.js";
import Persona2 from "../../img/case-studies/tokyo-bikes/user-persona-2.png.proxy.js";
import UserFlow from "../../img/case-studies/tokyo-bikes/user-flow.png.proxy.js";
import RoughWiresGif from "../../img/case-studies/tokyo-bikes/rough-wires.gif.proxy.js";
import PolishedDrafts from "../../img/case-studies/tokyo-bikes/polished-drafts.png.proxy.js";
import LofiPrototypes from "../../img/case-studies/tokyo-bikes/lofi-prototypes.png.proxy.js";
import AffinityMap from "../../img/case-studies/tokyo-bikes/affinity-map.png.proxy.js";
import Hifi from "../../img/case-studies/tokyo-bikes/hifi-proto.png.proxy.js";
import StickerSheet from "../../img/case-studies/tokyo-bikes/sticker-sheet.png.proxy.js";
import FinalMock from "../../img/case-studies/tokyo-bikes/final-mock-1.png.proxy.js";
const TokyoBikes = () => {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Hero, null, /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("h1", null, "Tokyo Bikes")), /* @__PURE__ */ React.createElement(Details, null, /* @__PURE__ */ React.createElement("p", null, "Role: UX designer, UX researcher, graphic designer"), /* @__PURE__ */ React.createElement("p", null, "Status: Complete"), /* @__PURE__ */ React.createElement("p", null, "Duration: June 2021-July 2021"))), /* @__PURE__ */ React.createElement(SlidesCta, {
    target: "BLANK",
    href: "https://docs.google.com/presentation/d/1oo_2zIuCuGhL02PfqsykkHZn0a3kpSDCHLozYLgFqHM/edit?usp=sharing",
    "aria-label": "View Tokyo Bikes Project Slides"
  }, "View Slides"), /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Project Vision"), /* @__PURE__ */ React.createElement("p", null, "Over the course of the pandemic, the concept of using design and technology in an attempt to substitute face-to-face human interaction has been on many minds, mine included. After pulling a prompt to create an app for a bike shop in Tokyo for the Google UX Design certification, I envisioned a mobile application that could substitute for an in-person experience at a cycle shop, delivering familiarity and expertise to users from a distance.")), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Challenges"), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("p", null, "Increase accessibility of cycling knowledge")), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("p", null, "Lower the barriers to entry associated with cycling as a hobby")), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("p", null, "Create simple and easy-to-follow user flows for research and purchasing")), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("p", null, "Design a visually interesting UI that doesn't sacrifice usability"))), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Getting to Know the User"), /* @__PURE__ */ React.createElement("p", null, "The only type of cycling I do is indoor and stationary, so my first goal was to get to know the type of user more likely to seek out a cycling app."), /* @__PURE__ */ React.createElement("p", null, "To do that, I conducted interviews with four cycling enthusiasts of varying levels, ages, and genders. After transcribing their words, I was able to convert what I learned into individual empathy maps. Here is an example:"), /* @__PURE__ */ React.createElement(MobileImg, {
    alt: "Empathy map for user A. - mobile version",
    src: AEmpathyMobile
  }), /* @__PURE__ */ React.createElement(DesktopImg, {
    alt: "Empathy map for user A. - desktop version",
    src: AEmpathy
  }), /* @__PURE__ */ React.createElement("p", null, "From this research, 3 consistent pain points regarding digital experiences for cyclists emerged:"), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("h3", null, "Lack of Guidance from Experts"), /* @__PURE__ */ React.createElement("p", null, "Users want guidance from experts on which parts and equipment are best, as well as an expert-backed knowledge base to learn more about cycling and maintenance")), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("h3", null, "Poor Product Organization"), /* @__PURE__ */ React.createElement("p", null, "It can be very hard and time-consuming to sort through endless pages of poorly organized products to find what the user is looking for")), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("h3", null, "Overwhelmed by Options"), /* @__PURE__ */ React.createElement("p", null, "Even if products are well organized, the sheer number of options per product type are enough to leave users confused and intimidated to make a purchase"))), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Meet the Users"), /* @__PURE__ */ React.createElement("p", null, "Because of the relatively small scope of user research, I synthesized my results into two user personas. In limiting the amount of personas, I was able to focus on a few concentrated areas of user need and be sure I fulfilled those needs well."), /* @__PURE__ */ React.createElement(MobileImg, {
    alt: "User persona for Sam Trieu - mobile version",
    src: MobilePersona1
  }), /* @__PURE__ */ React.createElement(MobileImg, {
    alt: "User persona for Ellie Clark - mobile version",
    src: MobilePersona2
  }), /* @__PURE__ */ React.createElement(DesktopImg, {
    alt: "User persona for Sam Trieu - desktop version",
    src: Persona1
  }), /* @__PURE__ */ React.createElement(DesktopImg, {
    alt: "User persona for Ellie Clark - desktop version",
    src: Persona2
  })), /* @__PURE__ */ React.createElement(RichText, {
    className: "desktopOnly"
  }, /* @__PURE__ */ React.createElement(Heading, null, "Craft the Main User Journey"), /* @__PURE__ */ React.createElement("p", null, "With main user needs in mind, I mapped out an initial user flow that started at product research and ended with purchase confirmation."), /* @__PURE__ */ React.createElement("img", {
    alt: "Research and shopping user flow",
    src: UserFlow
  })), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Paper Wires"), /* @__PURE__ */ React.createElement("p", null, "Working iteratively through every screen on the app, I brainstormed five possible configurations of data..."), /* @__PURE__ */ React.createElement("img", {
    alt: "Speedpaint of five rough wires for home page design",
    src: RoughWiresGif
  }), /* @__PURE__ */ React.createElement("p", null, "...then combined my favorite parts of each configuration into a polished draft."), /* @__PURE__ */ React.createElement("img", {
    alt: "Polished wireframes for each main app screen",
    src: PolishedDrafts
  })), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Digital Wires"), /* @__PURE__ */ React.createElement("p", null, "With initial page configuration and user flows sorted, it was time for user feedback. I digitized my polished drafts in Figma and built a low-fidelity prototype."), /* @__PURE__ */ React.createElement("img", {
    alt: "A mockup of five low fidelity wireframe screens",
    src: LofiPrototypes
  }), /* @__PURE__ */ React.createElement("p", null, "You can try out my low fidelity prototype ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.figma.com/proto/7DZjYe1c27smB9w6BJPpdk/Tokyo-Bikes-Digital-Wires?node-id=5%3A20&scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A20",
    target: "_BLANK"
  }, "here"), ".")), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Usability Testing"), /* @__PURE__ */ React.createElement("p", null, "I conducted two rounds of usability studies, both with five respondents of varying ages and genders. The first round focused on my low-fi prototype and consisted of a moderated usability study followed by a system usability scale."), /* @__PURE__ */ React.createElement("img", {
    alt: "Digital affinity map for round 1 of usability testing",
    src: AffinityMap
  }), /* @__PURE__ */ React.createElement("p", null, "Once the first round of suggestions were implemented, I refined the mocks to include brand colors, visual assets, and type hierarchy..."), /* @__PURE__ */ React.createElement("img", {
    alt: "Mockup of six high fidelity screens of mobile app",
    src: Hifi
  }), /* @__PURE__ */ React.createElement("p", null, "...and got even more feedback! Check out my hi-fi prototype ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.figma.com/proto/7DZjYe1c27smB9w6BJPpdk/Tokyo-Bikes-Digital-Wires?node-id=127%3A3&scaling=scale-down&page-id=127%3A2&starting-point-node-id=127%3A3&show-proto-sidebar=1",
    target: "_BLANK"
  }, "here"), "."), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("h3", null, "Round 1 Feedback"), /* @__PURE__ */ React.createElement("p", null, "1. Users feel more secure with a pre-submission purchase review"), /* @__PURE__ */ React.createElement("p", null, "2. Only some users find the expert chat function trustworthy"), /* @__PURE__ */ React.createElement("p", null, "3. Multiple modes of communication will keep the app accessible to a larger user base with varied preferences")), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("h3", null, "Round 2 Feedback"), /* @__PURE__ */ React.createElement("p", null, "1. The sticky live chat button gets in the way of other app functions"), /* @__PURE__ */ React.createElement("p", null, "2. Many users will not use the nav menu and as such, back buttons should always be available")), /* @__PURE__ */ React.createElement("p", null, "With two rounds of user-backed refinement complete, the app was working as intended!")), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Visual Design"), /* @__PURE__ */ React.createElement("img", {
    alt: "Sticker sheet of main design elements used in app",
    src: StickerSheet
  }), /* @__PURE__ */ React.createElement("img", {
    alt: "Mockup of home page of app on an iphone",
    src: FinalMock
  })), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Conclusion"), /* @__PURE__ */ React.createElement("p", null, "While this particular application will not be moving into a production phase, usability study participants confirmed that if built and launched, it had the potential to improve accessibility of cycling knowledge and help combat many barriers to entry into the cycling community for beginner hobbyists."), /* @__PURE__ */ React.createElement("p", null, "I hope to continue to focus on applications that improve levels of accessiliblity in the future - whether it be at the level of the technology itself through ADA compliance or accessibility of an activity like cycling to underrepresented populations."), /* @__PURE__ */ React.createElement("p", null, "Challenging historical barriers to entry is one of the most meaningful things we can do in the tech and design space and I look forward to doing so as much as I can moving forward."))));
};
export default TokyoBikes;
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
        font-size: 10rem;
    }
`;
const Details = styled.div`
    font-family: "Roboto";
    font-size: 1.6rem;
`;
const SlidesCta = styled.a`
    color: #000;
    text-decoration: none;
    transition: all ease 300ms;
    font-size: 4rem;
    cursor: pointer;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
    padding: 1rem;
    background-color: #F7CF07;

    @media(hover: hover){
        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
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
const Heading = styled.h2`
    font-size: 3rem;
`;
const PinkBlock = styled.div`
    background-color: #F7CF07;
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
