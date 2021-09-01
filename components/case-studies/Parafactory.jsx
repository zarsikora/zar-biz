import React from 'react';
import styled from 'styled-components';
//Assets
import Persona1 from "./../../img/case-studies/parafactory/user-persona-1.png";
import MobilePersona1 from "./../../img/case-studies/parafactory/persona-mobile-1.png";
import MobilePersona2 from "./../../img/case-studies/parafactory/persona-mobile-2.png";
import Persona2 from "./../../img/case-studies/parafactory/user-persona-2.png";
import WhiskeyMap from "./../../img/case-studies/parafactory/whiskey-map.png";
import DesktopWhiskey from "./../../img/case-studies/parafactory/whiskey-desktop.png";
import FlavorWheel from "./../../img/case-studies/parafactory/flavor-wheel.jpg";
import DesktopWheel from "./../../img/case-studies/parafactory/coffee-desktop.png";
import Radar from "./../../img/case-studies/parafactory/radar.png";
import DesktopRadar from "./../../img/case-studies/parafactory/radar-desktop.png";
import Line from "./../../img/case-studies/parafactory/line.png";
import DesktopLine from "./../../img/case-studies/parafactory/line-desktop.png";
import RoughWires from "./../../img/case-studies/parafactory/rough-wires.png";
import DashMock from "./../../img/case-studies/parafactory/dash-mock.png";
import DashMockDesktop from "./../../img/case-studies/parafactory/dash-mock-desktop.png";
import Poster from "./../../img/case-studies/parafactory/poster.png";
import Hifi from "./../../img/case-studies/parafactory/responsive.png";
import Hifi2 from "./../../img/case-studies/parafactory/phone-screens-web.png";
import Hifi3 from "./../../img/case-studies/parafactory/desktop-screens-min.png";
import Welcome from "./../../img/case-studies/parafactory/welcome.png";
import Tldr from "./../../img/case-studies/parafactory/tldr.png";


const Parafactory = () => {
    return (
        <Wrapper>
            <Hero>
                <PinkBlock><h1>Parafactory</h1></PinkBlock>
                
                <Details>
                    <p>Role: UX designer, UX researcher, graphic designer, lead engineer</p>
                    <p>Status: Ongoing</p>
                    <p>Duration: August 2021 - ?</p>
                </Details>
            </Hero>

            <SlidesCta target="BLANK" href="https://docs.google.com/presentation/d/1uyM8GrSHhTenzP9eonUMwnPGyFij7UVjoC5KKybj8Mk/edit?usp=sharing" aria-label="View Parafactory Project Slides">
                View Slides 
            </SlidesCta> 

            <Content>
                <RichText>
                    <Heading>Project Vision</Heading>
                    <p>
                        The final prompt for my Google UX design certificate was to design a native mobile app and corresponding responsive web application
                        for social good. Coincidentally, I'd had an idea in the works for a while which fit the theme.
                    </p>

                    <p>
                        In early March of 2020 I contracted COVID-19 and completely lost the ability to smell and taste. Almost a year and a half later,
                        I am able to smell and taste at about 20% of the capacity I originally could, but most things don't smell and taste as they should. To give
                        a few examples of what I mean, vegetable stock cooking on a stovetop makes the kitchen smell like a dumpster and chocolate almost always tastes 
                        like blood.
                    </p>

                    <p>
                        Relatively speaking, very little is known about treating olfactory nerve damage effectively. Avenues for recovery are limited, don't 
                        work reliably, and take a very long time to have any effect at all. At times, the whole thing can feel a bit hopeless.
                    </p>

                    <p>
                        Despite the growing number of people struggling with long-term olfactory damage due to COVID, there are very few digital tools available
                        to aid them in their rehabilitation and recovery. I would like to design and build a tool focused on helping people with olfactory damage 
                        track changes in their sensory perception over time.
                    </p>
                </RichText>

                <RichText>
                    <Heading>Challenges</Heading>

                    <PinkBlock>
                        <p>How do you numerically quantify something as complex as a flavor profile?</p>
                    </PinkBlock>

                    <PinkBlock>
                        <p>How do you graphically represent this data in a simple and accessible manner for easy comparison over time?</p>
                    </PinkBlock>

                    <PinkBlock>
                        <p>How do you introduce a benchmark for "normal" olfactory perception?</p>
                    </PinkBlock>
                    
                </RichText>

                <RichText>
                    <Heading>Meet the Users</Heading>
                    
                    <p>
                        After speaking with other sufferers of long-term olfactory problems and their loved ones, I was
                        able to craft two representative user personas for my app.
                    </p>

                    <p>
                        The feedback I received made it clear to me that this tool would not only benefit anosmia and paranosmia sufferers, 
                        but also the medical staff, scientists, and loved ones striving to understand and empathize with their plight.
                    </p>

                    <MobileImg alt="User persona for Adrian P - mobile version" src={MobilePersona1} />
                    <MobileImg alt="User persona for Vivi A - mobile version" src={MobilePersona2} />
                    <DesktopImg alt="User persona for Adrian P - desktop version" src={Persona1} />
                    <DesktopImg alt="User persona for Vivi A - desktop version" src={Persona2} />
                </RichText>

                <RichText>
                    <Heading>Data Visualization</Heading>
                    <p>
                        Usually, at this point in the design process I am preparing to make paper wires. However, in this case,
                        I first had to resolve the challenge of gathering and visualizing the flavor data that would comprise 
                        the crux of the app’s functionality.
                    </p>

                    <p>
                        This concept does not have direct competition, and in fact the closest parallel I could think of was a mix between a wine
                        or coffee tasting journal and a daily food intake app. Research was necessary to discern how others have quantified 
                        complex flavor profiles into numeric, visually translatable data in the past. In order to get a better idea, I looked 
                        at visual aids from sommeliers and gastronomists specifically.
                    </p>

                    <p>
                        The pre-existing models I found presented a few problems:
                    </p>

                    <DesktopImg alt="" src={DesktopWhiskey} />
                    <MobileImg alt="a pastel four-quadrant flavor map for single-malt scotch" src={WhiskeyMap} />

                    <Attribution target="_BLANK" href="https://vinepair.com/articles/single-malt-scotch-whisky-flavor-map-infographic/">Courtesy of Vinepair</Attribution>

                    <p>
                        The four-quadrant scatter plot employed frequently by whiskey sommeliers is very useful for things within a single family, but a bit too limiting if one 
                        wants to explore a broad variety of food types. 
                    </p>

                    <DesktopImg alt="" src={DesktopWheel} />
                    <MobileImg alt="coffee flavor wheel" src={FlavorWheel} />

                    <Attribution target="_BLANK" href="https://www.scanews.coffee/wp-content/uploads/2016/01/SCAA_FlavorWheel.01.18.15.jpg">Courtesy of the Special Coffee Association of America</Attribution>

                    <p>
                        The flavor wheel, a mainstay in the third-wave coffee community, goes in the other direction and displays far too many flavor options to be useful in our case.
                        Asking people who have little to no taste to discern between honey and molasses notes is not only a fool's errand but also wholly unhelpful.
                    </p>

                    <p>
                        After much thought and collaboration, I decided to move forward with displaying the data in two ways: 
                    </p>

                    <DesktopImg alt=""src={DesktopRadar} />
                    <MobileImg alt="radar chart of a user's perception of the flavor profile of a lemon vs a control" src={Radar} />

                    <p>
                        First, a radar chart will allow for a clear visual representation of multiple taste nodes coming together into one unique flavor profile shape. Our app will limit entries to
                        a handful of food options chosen for their common availability, variety, and reputation for difficulty in the anosmia community. For each food, a set number of taste nodes will
                        be chosen for users to rank numerically between 1 and 10. While most nodes will relate to that specific food's flavor profile (sweet, fresh, etc), others relate to olfactory damage
                        in general and will be universally included (metallic, rancid). With a ranking for each node, corresponding points can be connected to form the flavor “shape”.
                    </p>

                    <p>
                        When you look at the data like this, differences between the user and control group are immediately discernible. It becomes clear that these two entities are not having the
                        same sensory experience at all.
                    </p>

                    <p>
                        This data alone doesn't show everything we want, though. Maybe a user’s ability to taste the sweet notes of a food specifically is improving over time. I wanted a way to see that as well.
                    </p>

                    <DesktopImg alt="" src={DesktopLine} />
                    <MobileImg alt="" src={Line} />

                    <p>
                        For this, a line graph with a single flavor’s numerical ranking on the Y axis and dates of entry on the X axis tracks whether a user is getting closer or farther from the control data.
                        In this example, on July 1st the user ranked the sweet notes of a lemon at 7 vs the control's ranking of 3, but by late August their perception of the sweet node dropped to 4, only 1 point
                        away from the control. Their taste is evolving in a way that suggests olfactory nerve regeneration.
                    </p>

                    <p>
                        Okay, now for wires.
                    </p>
                </RichText>

                <RichText>
                    <Heading>Paper Wires</Heading>

                    <img alt="sketch of rough wires for native app screens" src={RoughWires} /> 
                </RichText>

                <RichText>
                    <Heading>Digital Wires</Heading>

                    <p>
                        I split the task of digital wireframing and prototyping into two parts: the native mobile app and web experience. I envisioned the native mobile app
                        being specifically for account holders creating and keeping track of entries, while the web app would have both a login portal for registered users and 
                        opportunities for the public to explore visualization of aggregrate user data.
                    </p>

                    <DesktopImg alt="" src={DashMockDesktop} />
                    <MobileImg alt="" src={DashMock} />

                    <p>You can try out my lo-fi prototypes <a target="_BLANK" href="https://xd.adobe.com/view/5d9ef4b0-0603-4450-8844-125a5bfac9c9-08cd/">here (mobile app)</a>, <a target="_BLANK" href="https://xd.adobe.com/view/a0a14b3c-9e12-4261-9721-6a96beb96471-f5f2/">here (mobile web)</a>, and <a target="_BLANK" href="https://xd.adobe.com/view/d5b9491d-ee1e-42c5-9c26-e2878ff39cb5-80ea/">here (desktop web)</a>!</p>
                </RichText>

                <RichText>
                    <Heading>Usability Testing</Heading>
                    <p>
                        For this project, I spoke with four respondents of varying ages and genders in a moderated usability test, asking them to walk me through creating a new taste entry in the native mobile app.
                        User feedback focused on further adjusting navigation flows and editing capabilities:
                    </p>

                    <PinkBlock>
                        <p>
                            Remove “my foods” from lower nav bar. This isn’t a main navigational concern and should live in a less prominent place.
                        </p>
                    </PinkBlock>

                    <PinkBlock>
                        <p>
                            How can one edit their profile after account creation? Add a way to adjust bio, name, image, etc.
                        </p>
                    </PinkBlock>

                    <PinkBlock>
                        <p>
                            Allow for easy editability of past taste entries - people make mistakes.
                        </p>
                    </PinkBlock>
                </RichText>

                <RichText>
                    <Heading>Visual Design</Heading>

                    <p>
                        The original visual concept came from a poster I made:
                    </p>

                    <img alt="marbled poster with distorted lettering that spells 'otherfood'" src={Poster} />

                    <p>
                        Otherfood is how I've come to describe foods that I can taste but which now taste completely different than they once did. 
                        Almost familiar, but not. I chose a simple, high contrast palette of warm neutrals and black to preserve the data as the focal 
                        point of the experience. Limiting the typeface choices to two grotesks ensured cohesion and readability. I added liquified graphical 
                        background overlays for a bit of spice and to reinforce the theme of distorted perception. 
                    </p>

                    <img alt="" src={Welcome} />

                    <img alt="" src={Hifi3} /> 

                    <img alt="" src={Hifi2} /> 

                    <p>Check out my hi-fi prototypes <a target="_BLANK" href="https://xd.adobe.com/view/df79fd1e-86db-4d5d-bd5d-ce6e12cda110-8a2a/">here (mobile app)</a>, <a target="_BLANK" href="https://xd.adobe.com/view/07aab0ae-2337-4f75-9972-e0fa3248ad9c-52f9/">here (mobile web)</a>, and <a target="_BLANK" href="https://xd.adobe.com/view/55ff22cb-35bc-4616-aca8-360b502e39de-00ac/">here (desktop web)</a>.</p>

                    <img alt="" src={Hifi} />

                </RichText>

                <RichText>
                    <Heading>Next Steps</Heading>

                    <p>
                        This is a tool that I'd like to use and based on that fact alone, I'm going to move forward with building it.
                        Current next steps are as follows:
                    </p>

                    <PinkBlock>
                        <h3>Collect Control Data</h3>

                        <p>
                            I will need to replace dummy control data with the real thing.  This will require survey creation and distribution to an appropriately large and varied pool of respondents.
                            I am aiming for about 100 respondents at this time.
                        </p>
                    </PinkBlock>

                    <PinkBlock>
                        <h3>Finalize Copy</h3>

                        <p>
                            Not all of the copy on pages like About is finalized. I would like to provide the most easily digestible introduction to olfactory damage that I can which will require multiple drafts and 
                            feedback from people more knowledgeable than me.
                        </p>
                    </PinkBlock>

                    <PinkBlock>
                        <h3>Build Web Application</h3>

                        <p>
                            I am planning to build out the web application in React and utilize <a target="_BLANK" href="https://www.chartjs.org/">Chart.js</a> for the data visualization. Further research
                            will be necessary on account creation and data encryption.
                        </p>
                    </PinkBlock>

                    <PinkBlock>
                        <h3>Accessibility Audit</h3>

                        <p>
                            I will have to make special considerations to ensure that my data visualization remains accessible to all. This will include research on flexible alt text generation for the custom 
                            radar charts and line graphs. 
                        </p>
                    </PinkBlock>

                    <Heading>TLDR:</Heading>

                    <img alt="" src={Tldr} />

                    <p>
                        I will continue to update this case study as I move forward with the build process :)
                    </p>
                </RichText>
            </Content>
        </Wrapper>
    );
}

export default Parafactory;

const MobileImg = styled.img `
    display: block;
    @media (min-width: 768px){
        display: none;
    }
`

const DesktopImg = styled.img `
    display: none;
    @media (min-width: 768px){
        display: block;
    }
`

const Wrapper = styled.div `
    color: #000;
    background-color: #fff;
    padding-bottom: 3rem;
    text-align: center;
    @media (min-width: 768px){
        padding-bottom: 8rem;
    }
`

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
`

const Details = styled.div`
    font-family: "Roboto";
    font-size: 1.6rem;
`

const SlidesCta = styled.a `
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
`

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
`

const Heading = styled.h2 `
    font-size: 3rem;
`

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
`

const Attribution = styled.a `
    display: block;
`

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
`