import React, {useState} from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {motion} from "../../_snowpack/pkg/framer-motion.js";
import {useHistory} from "../../_snowpack/pkg/react-router-dom.js";
import Shader from "../Shader.js";
import FreshSites from "../../img/fresh-sites-min.png.proxy.js";
const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const listItem = {
  hidden: {opacity: 0},
  show: {opacity: 1}
};
const WorkPage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const history = useHistory();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Shader, {
    img: FreshSites,
    opacity: ".5",
    alt: "Vintage photography of a hand reaching into a full refrigerator, warped by WebGL shaders"
  }), /* @__PURE__ */ React.createElement(Pane, null, isModalActive && /* @__PURE__ */ React.createElement(WorkModal, {
    setIsModalActive
  }), /* @__PURE__ */ React.createElement(Header, {
    inital: {opacity: 0},
    animate: {opacity: 1}
  }, "Work"), /* @__PURE__ */ React.createElement(WorkList, {
    variants: container,
    initial: "hidden",
    animate: "show"
  }, workData.map((work) => {
    let internalLinkOnClick = () => {
    };
    if (work.type == "internal") {
      internalLinkOnClick = (e) => {
        e.preventDefault();
        history.push(`/${work.slug}`);
      };
    }
    return /* @__PURE__ */ React.createElement(WorkBlock, {
      variants: listItem,
      key: work.name,
      bg: work.bg,
      text: work.text
    }, /* @__PURE__ */ React.createElement("a", {
      onClick: internalLinkOnClick,
      target: "_BLANK",
      href: work.link,
      "aria-label": work.label
    }, /* @__PURE__ */ React.createElement("span", null, work.name), /* @__PURE__ */ React.createElement("p", null, work.tags), /* @__PURE__ */ React.createElement("img", {
      src: work.img,
      alt: work.alt
    })));
  })))));
};
export default WorkPage;
const Wrapper = styled.div`
    background-color: #000
`;
const Pane = styled(motion.div)`
    padding: 5rem;
    width: 100%;
    height: 100vh;
    display: block;
    overflow-y: scroll;
    background-color: none;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
`;
const Header = styled(motion.h1)`
    text-align: center;
    color: #fff;
    font-size: 7rem;
    @media(min-width: 992px){
        font-size: 7vw;
    }

`;
const WorkList = styled(motion.ul)`
    list-style: none;
    padding: 0;
    text-align: center;
    font-size: 5rem;
    @media(min-width: 992px){
        font-size: 5vw;
    }

    li, a {
        color: #000;
        text-decoration: none;
        transition: all ease 300ms;
    }
`;
const WorkBlock = styled(motion.li)`
    background-color: ${(props) => props.bg};
    width: 100%;
    margin: 2rem auto;
    position: relative;
    transition: all ease 300ms;
    @media(min-width: 992px){
        width: 50%;

        &:hover {
            img {
                opacity: 1;
            }

            a span {
                color: #fff;
                position: relative;
                z-index: 88; 
            }

            a p {
                color: #fff;
                z-index: 88;
            }
        }
    }

    img {
        position: absolute;
        width: 100%;
        height: 100%; 
        object-fit: cover;
        left: 0;
        top: 0;
        opacity: 0;
        mix-blend-mode: multiply;
        transition: all ease 300ms;
    }

    a {
        color: ${(props) => props.text};
        text-decoration: none;
        box-sizing: border-box;
        display: block;
        padding: 5rem 2rem;

        p {
            transition: all ease 300ms;
            font-size: 2rem;
            display: block;
            position: relative;
            font-family: "Roboto";
        }
    }
`;
const workData = [
  {
    name: "TransHealth",
    slug: "transhealth",
    type: "internal",
    link: "",
    bg: "#96b0c5",
    text: "#2a275b",
    img: "./../../img/work/th-peek.png",
    alt: "The Transhealth logo",
    label: "View Transhealth project",
    tags: "UX Research, UX Design, Development, Accessibility, Wordpress, Completed"
  },
  {
    name: "Parafactory",
    slug: "parafactory",
    type: "internal",
    link: "",
    bg: "#E49B7F",
    text: "#202020",
    img: "./../../img/work/parafactory-peek.png",
    alt: "High fidelity screens for mobile experience",
    label: "View Parafactory project",
    tags: "UX Research, UX Design, Prototyping, UI Design, Responsive Design, Data Visualization, Design Complete, Build In Progress"
  },
  {
    name: "Les Fleurs de Mars",
    slug: "lfdm",
    type: "internal",
    link: "",
    bg: "#4e573b",
    text: "#e1ff64",
    img: "./../../img/work/lfdm-peek.png",
    alt: "High fidelity screens for mobile experience",
    label: "View Les Fleurs de Mars project",
    tags: "UX Research, UX Design, Prototyping, UI Design, Responsive Design, Graphic Design, Completed"
  },
  {
    name: "Tokyo Bikes",
    slug: "tokyo-bikes",
    type: "internal",
    link: "",
    bg: "#1F2D76",
    text: "#F7CF07",
    img: "./../../img/work/tb-peek.png",
    alt: "UX prototype mapping for lofi digital prototype",
    label: "View Tokyo Bikes project",
    tags: "UX Research, UX Design, Prototyping, User Testing, UI Design, Completed"
  },
  {
    name: "Alarad",
    type: "external",
    link: "https://www.alaradcapital.com/",
    bg: "#27331d",
    text: "#bd8e65",
    img: "./../../img/work/alarad-peek.png",
    alt: "Green and gold geometric designs of Alarad brand kit",
    label: "View Alarad project",
    tags: "Design, Development, Motion Design, Animation, Wordpress, Completed"
  },
  {
    name: "Automic Gold",
    type: "external",
    link: "https://www.automicgold.com/",
    bg: "#FCE1E6",
    text: "#18084d",
    img: "./../../img/work/ag-peek.png",
    alt: "Close up of hand wearing Automic Gold products",
    label: "View Automic Gold project",
    tags: "UX Design, Development, Site Maintenance, Accessibility, Performance, Shopify, Ongoing"
  },
  {
    name: "Steel Root",
    type: "external",
    link: "https://steelroot.us/",
    bg: "#181d40",
    text: "#01adcb",
    img: "./../../img/work/sr-peek.png",
    alt: "Cyborg with glowing eyes",
    label: "View Steel Root project",
    tags: "Design, Development, Accessibility, Performance, Wordpress, Completed"
  },
  {
    name: "Brutalist Dunks",
    slug: "brutalist-dunks",
    type: "internal",
    link: "",
    bg: "#ED5AAB",
    text: "#000",
    img: "./../../img/work/bd-peek.png",
    alt: "Close up of repeating brutalist Dunkin design",
    label: "View Brutalist Dunks Project",
    tags: "Graphic Design, Poster Design, Package Design, Branding, For Fun"
  },
  {
    name: "DriveForce",
    type: "external",
    link: "https://driveforce.golf",
    bg: "#919A6B",
    text: "#081D1A",
    img: "./../../img/work/df-peek.png",
    alt: "A man swinging a golf club adorned with a semicircular graphic to accentute the swing motion",
    label: "View DriveForce project",
    tags: "Development, Animation, Ecommerce, Wordpress, Completed"
  },
  {
    name: "ThinkForward",
    type: "external",
    link: "https://thinkforwardfinancial.com/home/",
    bg: "#e16e37",
    text: "#fff",
    img: "./../../img/work/tff-peek.png",
    alt: "A diverse group talk at a meeting table",
    label: "View ThinkForward project",
    tags: "Development, Animation, Completed"
  }
];
