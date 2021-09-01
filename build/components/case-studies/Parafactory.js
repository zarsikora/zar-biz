import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import Persona1 from "../../img/case-studies/parafactory/user-persona-1.png.proxy.js";
import MobilePersona1 from "../../img/case-studies/parafactory/persona-mobile-1.png.proxy.js";
import MobilePersona2 from "../../img/case-studies/parafactory/persona-mobile-2.png.proxy.js";
import Persona2 from "../../img/case-studies/parafactory/user-persona-2.png.proxy.js";
import WhiskeyMap from "../../img/case-studies/parafactory/whiskey-map.png.proxy.js";
import DesktopWhiskey from "../../img/case-studies/parafactory/whiskey-desktop.png.proxy.js";
import FlavorWheel from "../../img/case-studies/parafactory/flavor-wheel.jpg.proxy.js";
import DesktopWheel from "../../img/case-studies/parafactory/coffee-desktop.png.proxy.js";
import Radar from "../../img/case-studies/parafactory/radar.png.proxy.js";
import DesktopRadar from "../../img/case-studies/parafactory/radar-desktop.png.proxy.js";
import Line from "../../img/case-studies/parafactory/line.png.proxy.js";
import DesktopLine from "../../img/case-studies/parafactory/line-desktop.png.proxy.js";
import RoughWires from "../../img/case-studies/parafactory/rough-wires.png.proxy.js";
import DashMock from "../../img/case-studies/parafactory/dash-mock.png.proxy.js";
import DashMockDesktop from "../../img/case-studies/parafactory/dash-mock-desktop.png.proxy.js";
import Poster from "../../img/case-studies/parafactory/poster.png.proxy.js";
import Hifi from "../../img/case-studies/parafactory/responsive.png.proxy.js";
import Hifi2 from "../../img/case-studies/parafactory/phone-screens-web.png.proxy.js";
import Hifi3 from "../../img/case-studies/parafactory/desktop-screens-min.png.proxy.js";
import Welcome from "../../img/case-studies/parafactory/welcome.png.proxy.js";
import Tldr from "../../img/case-studies/parafactory/tldr.png.proxy.js";
const Parafactory = () => {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Hero, null, /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("h1", null, "Parafactory")), /* @__PURE__ */ React.createElement(Details, null, /* @__PURE__ */ React.createElement("p", null, "Role: UX designer, UX researcher, graphic designer, lead engineer"), /* @__PURE__ */ React.createElement("p", null, "Status: Ongoing"), /* @__PURE__ */ React.createElement("p", null, "Duration: August 2021 - ?"))), /* @__PURE__ */ React.createElement(SlidesCta, {
    target: "BLANK",
    href: "https://docs.google.com/presentation/d/1uyM8GrSHhTenzP9eonUMwnPGyFij7UVjoC5KKybj8Mk/edit?usp=sharing",
    "aria-label": "View Parafactory Project Slides"
  }, "View Slides"), /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Project Vision"), /* @__PURE__ */ React.createElement("p", null, "I was tasked with designing a native mobile app and corresponding responsive web application for social good. Coincidentally, I'd had an idea in the works for a while which fit the theme."), /* @__PURE__ */ React.createElement("p", null, "In early March of 2020 I contracted COVID-19 and completely lost the ability to smell and taste. Almost a year and a half later, I am able to smell and taste at about 20% of the capacity I originally could, but most things don't smell and taste as they should. To give a few examples of what I mean, vegetable stock cooking on a stovetop makes the kitchen smell like a dumpster and chocolate almost always tastes like blood."), /* @__PURE__ */ React.createElement("p", null, "Relatively speaking, very little is known about treating olfactory nerve damage effectively. Avenues for recovery are limited, don't work reliably, and take a very long time to have any effect at all. At times, the whole thing can feel a bit hopeless."), /* @__PURE__ */ React.createElement("p", null, "Despite the growing number of people struggling with long-term olfactory damage due to COVID, there are very few digital tools available to aid them in their rehabilitation and recovery. I would like to design and build a tool focused on helping people with olfactory damage track changes in their sensory perception over time.")), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Challenges"), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("p", null, "How do you numerically quantify something as complex as a flavor profile?")), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("p", null, "How do you graphically represent this data in a simple and accessible manner for easy comparison over time?")), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("p", null, 'How do you introduce a benchmark for "normal" olfactory perception?'))), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Meet the Users"), /* @__PURE__ */ React.createElement("p", null, "After speaking with other sufferers of long-term olfactory problems and their loved ones, I was able to craft two representative user personas for my app."), /* @__PURE__ */ React.createElement("p", null, "The feedback I received made it clear to me that this tool would not only benefit anosmia and paranosmia sufferers, but also the medical staff, scientists, and loved ones striving to understand and empathize with their plight."), /* @__PURE__ */ React.createElement(MobileImg, {
    alt: "User persona for Adrian P - mobile version",
    src: MobilePersona1
  }), /* @__PURE__ */ React.createElement(MobileImg, {
    alt: "User persona for Vivi A - mobile version",
    src: MobilePersona2
  }), /* @__PURE__ */ React.createElement(DesktopImg, {
    alt: "User persona for Adrian P - desktop version",
    src: Persona1
  }), /* @__PURE__ */ React.createElement(DesktopImg, {
    alt: "User persona for Vivi A - desktop version",
    src: Persona2
  })), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Data Visualization"), /* @__PURE__ */ React.createElement("p", null, "Usually, at this point in the design process I am preparing to make paper wires. However, in this case, I first had to resolve the challenge of gathering and visualizing the flavor data that would comprise the crux of the app’s functionality."), /* @__PURE__ */ React.createElement("p", null, "This concept does not have direct competition, and in fact the closest parallel I could think of was a mix between a wine or coffee tasting journal and a daily food intake app. Research was necessary to discern how others have quantified complex flavor profiles into numeric, visually translatable data in the past. In order to get a better idea, I looked at visual aids from sommeliers and gastronomists specifically."), /* @__PURE__ */ React.createElement("p", null, "The pre-existing models I found presented a few problems:"), /* @__PURE__ */ React.createElement(DesktopImg, {
    alt: "a pastel four-quadrant flavor map for single-malt scotch - desktop version",
    src: DesktopWhiskey
  }), /* @__PURE__ */ React.createElement(MobileImg, {
    alt: "a pastel four-quadrant flavor map for single-malt scotch - mobile version",
    src: WhiskeyMap
  }), /* @__PURE__ */ React.createElement(Attribution, {
    target: "_BLANK",
    href: "https://vinepair.com/articles/single-malt-scotch-whisky-flavor-map-infographic/"
  }, "Courtesy of Vinepair"), /* @__PURE__ */ React.createElement("p", null, "The four-quadrant scatter plot employed frequently by whiskey sommeliers is very useful for things within a single family, but a bit too limiting if one wants to explore a broad variety of food types."), /* @__PURE__ */ React.createElement(DesktopImg, {
    alt: "coffee flavor wheel - desktop version",
    src: DesktopWheel
  }), /* @__PURE__ */ React.createElement(MobileImg, {
    alt: "coffee flavor wheel - mobile version",
    src: FlavorWheel
  }), /* @__PURE__ */ React.createElement(Attribution, {
    target: "_BLANK",
    href: "https://www.scanews.coffee/wp-content/uploads/2016/01/SCAA_FlavorWheel.01.18.15.jpg"
  }, "Courtesy of the Special Coffee Association of America"), /* @__PURE__ */ React.createElement("p", null, "The flavor wheel, a mainstay in the third-wave coffee community, goes in the other direction and displays far too many flavor options to be useful in our case. Asking people who have little to no taste to discern between honey and molasses notes is not only a fool's errand but also wholly unhelpful."), /* @__PURE__ */ React.createElement("p", null, "After much thought and collaboration, I decided to move forward with displaying the data in two ways:"), /* @__PURE__ */ React.createElement(DesktopImg, {
    alt: "radar chart of a user's perception of the flavor profile of a lemon vs a control - desktop version",
    src: DesktopRadar
  }), /* @__PURE__ */ React.createElement(MobileImg, {
    alt: "radar chart of a user's perception of the flavor profile of a lemon vs a control - mobile version",
    src: Radar
  }), /* @__PURE__ */ React.createElement("p", null, "First, a radar chart will allow for a clear visual representation of multiple taste nodes coming together into one unique flavor profile shape. Our app will limit entries to a handful of food options chosen for their common availability, variety, and reputation for difficulty in the anosmia community. For each food, a set number of taste nodes will be chosen for users to rank numerically between 1 and 10. While most nodes will relate to that specific food's flavor profile (sweet, fresh, etc), others relate to olfactory damage in general and will be universally included (metallic, rancid). With a ranking for each node, corresponding points can be connected to form the flavor “shape”."), /* @__PURE__ */ React.createElement("p", null, "When you look at the data like this, differences between the user and control group are immediately discernible. It becomes clear that these two entities are not having the same sensory experience at all."), /* @__PURE__ */ React.createElement("p", null, "This data alone doesn't show everything we want, though. Maybe a user’s ability to taste the sweet notes of a food specifically is improving over time. I wanted a way to see that as well."), /* @__PURE__ */ React.createElement(DesktopImg, {
    alt: "line chart of a user's perception of the sweet notes of lemon over time - desktop version",
    src: DesktopLine
  }), /* @__PURE__ */ React.createElement(MobileImg, {
    alt: "line chart of a user's perception of the sweet notes of lemon over time - mobile version",
    src: Line
  }), /* @__PURE__ */ React.createElement("p", null, "For this, a line graph with a single flavor’s numerical ranking on the Y axis and dates of entry on the X axis tracks whether a user is getting closer or farther from the control data. In this example, on July 1st the user ranked the sweet notes of a lemon at 7 vs the control's ranking of 3, but by late August their perception of the sweet node dropped to 4, only 1 point away from the control. Their taste is evolving in a way that suggests healthy olfactory nerve regeneration."), /* @__PURE__ */ React.createElement("p", null, "Okay, now for wires.")), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Paper Wires"), /* @__PURE__ */ React.createElement("img", {
    alt: "sketch of rough wires for native app screens",
    src: RoughWires
  })), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Digital Wires"), /* @__PURE__ */ React.createElement("p", null, "I split the task of digital wireframing and prototyping into two parts: the native mobile app and web experience. I envisioned the native mobile app being specifically for account holders creating and keeping track of entries, while the web app would have both a login portal for registered users and opportunities for the public to explore visualization of aggregate user data."), /* @__PURE__ */ React.createElement(DesktopImg, {
    alt: "rough digital wires for the dashboard screen of the native app, web app, and mobile web app - desktop",
    src: DashMockDesktop
  }), /* @__PURE__ */ React.createElement(MobileImg, {
    alt: "rough digital wires for the dashboard screen of the native app, web app, and mobile web app - mobile",
    src: DashMock
  }), /* @__PURE__ */ React.createElement("p", null, "You can try out my lo-fi prototypes ", /* @__PURE__ */ React.createElement("a", {
    target: "_BLANK",
    href: "https://xd.adobe.com/view/5d9ef4b0-0603-4450-8844-125a5bfac9c9-08cd/"
  }, "here (mobile app)"), ", ", /* @__PURE__ */ React.createElement("a", {
    target: "_BLANK",
    href: "https://xd.adobe.com/view/a0a14b3c-9e12-4261-9721-6a96beb96471-f5f2/"
  }, "here (mobile web)"), ", and ", /* @__PURE__ */ React.createElement("a", {
    target: "_BLANK",
    href: "https://xd.adobe.com/view/d5b9491d-ee1e-42c5-9c26-e2878ff39cb5-80ea/"
  }, "here (desktop web)"), "!")), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Usability Testing"), /* @__PURE__ */ React.createElement("p", null, "For this project, I spoke with four respondents of varying ages and genders in a moderated usability test, asking them to walk me through creating a new taste entry in the native mobile app. User feedback focused on further adjusting navigation flows and editing capabilities:"), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("p", null, "Remove “my foods” from lower nav bar. This isn’t a main navigational concern and should live in a less prominent place.")), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("p", null, "How can one edit their profile after account creation? Add a way to adjust bio, name, image, etc.")), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("p", null, "Allow for easy editability of past taste entries - people make mistakes."))), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Visual Design"), /* @__PURE__ */ React.createElement("p", null, "The original visual concept came from a poster I made:"), /* @__PURE__ */ React.createElement("img", {
    alt: "marbled poster with distorted lettering that spells 'otherfood'",
    src: Poster
  }), /* @__PURE__ */ React.createElement("p", null, "Otherfood is how I've come to describe foods that I can taste but which now taste completely different than they once did. Almost familiar, but not. I chose a simple, high contrast palette of warm neutrals and black to preserve the data as the focal point of the experience. Limiting the typeface choices to two grotesks ensured cohesion and readability. I added liquified graphical background overlays for a bit of spice and to reinforce the theme of distorted perception."), /* @__PURE__ */ React.createElement("img", {
    alt: "welcome screen of the parafactory desktop web application",
    src: Welcome
  }), /* @__PURE__ */ React.createElement("img", {
    alt: "desktop mockups of the profile, entry single, food single, and new entry screens",
    src: Hifi3
  }), /* @__PURE__ */ React.createElement("img", {
    alt: "mobile mockups of the profile, entry single, and node single screens",
    src: Hifi2
  }), /* @__PURE__ */ React.createElement("p", null, "Check out my hi-fi prototypes ", /* @__PURE__ */ React.createElement("a", {
    target: "_BLANK",
    href: "https://xd.adobe.com/view/df79fd1e-86db-4d5d-bd5d-ce6e12cda110-8a2a/"
  }, "here (mobile app)"), ", ", /* @__PURE__ */ React.createElement("a", {
    target: "_BLANK",
    href: "https://xd.adobe.com/view/07aab0ae-2337-4f75-9972-e0fa3248ad9c-52f9/"
  }, "here (mobile web)"), ", and ", /* @__PURE__ */ React.createElement("a", {
    target: "_BLANK",
    href: "https://xd.adobe.com/view/55ff22cb-35bc-4616-aca8-360b502e39de-00ac/"
  }, "here (desktop web)"), "."), /* @__PURE__ */ React.createElement("img", {
    alt: "desktop, tablet, and mobile mocks of the entry single screen",
    src: Hifi
  })), /* @__PURE__ */ React.createElement(RichText, null, /* @__PURE__ */ React.createElement(Heading, null, "Next Steps"), /* @__PURE__ */ React.createElement("p", null, "This is a tool that I'd like to use and based on that fact alone, I'm going to move forward with building it. Current next steps are as follows:"), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("h3", null, "Collect Control Data"), /* @__PURE__ */ React.createElement("p", null, "I will need to replace dummy control data with the real thing.  This will require survey creation and distribution to an appropriately large and varied pool of respondents. I am aiming for about 100 respondents at this time.")), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("h3", null, "Finalize Copy"), /* @__PURE__ */ React.createElement("p", null, "Not all of the copy on pages like About is finalized. I would like to provide the most easily digestible introduction to olfactory damage that I can which will require multiple drafts and feedback from people more knowledgeable than me.")), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("h3", null, "Build Web Application"), /* @__PURE__ */ React.createElement("p", null, "I am planning to build out the web application in React and utilize ", /* @__PURE__ */ React.createElement("a", {
    target: "_BLANK",
    href: "https://www.chartjs.org/"
  }, "Chart.js"), " for the data visualization. Further research will be necessary on account creation and data encryption.")), /* @__PURE__ */ React.createElement(PinkBlock, null, /* @__PURE__ */ React.createElement("h3", null, "Accessibility Audit"), /* @__PURE__ */ React.createElement("p", null, "I will have to make special considerations to ensure that my data visualization remains accessible to all. This will include research on flexible alt text generation for the custom radar charts and line graphs.")), /* @__PURE__ */ React.createElement(Heading, null, "TLDR:"), /* @__PURE__ */ React.createElement("img", {
    alt: "screenshot of text message with conspiracy theory meme and text 'IM LIKE WE CAN MAKE TASTE INTO A SHAPE USING NUMBERS'",
    src: Tldr
  }), /* @__PURE__ */ React.createElement("p", null, "I will continue to update this case study as I move forward with the build process :)"))));
};
export default Parafactory;
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
        font-size: 6.5rem;
        @media (min-width: 768px){
            font-size: 8rem;
        }
        @media (min-width: 992px){
            font-size: 10rem;
        }
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
    background-color: #FFE9E1;

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
    background-color: #FFE9E1;
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
const Attribution = styled.a`
    display: block;
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
