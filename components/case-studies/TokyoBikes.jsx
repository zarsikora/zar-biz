import React from 'react';
import styled from 'styled-components';
//Assets
import AEmpathy from "./../../img/case-studies/tokyo-bikes/a-empathy.png";
import AEmpathyMobile from "./../../img/case-studies/tokyo-bikes/AEmpathy-mobile.png";
import Persona1 from "./../../img/case-studies/tokyo-bikes/user-persona-1.png";
import MobilePersona1 from "./../../img/case-studies/tokyo-bikes/persona-mobile-1.png";
import MobilePersona2 from "./../../img/case-studies/tokyo-bikes/persona-mobile-2.png";
import Persona2 from "./../../img/case-studies/tokyo-bikes/user-persona-2.png";
import UserFlow from "./../../img/case-studies/tokyo-bikes/user-flow.png";
import RoughWiresGif from "./../../img/case-studies/tokyo-bikes/rough-wires.gif";
import PolishedDrafts from "./../../img/case-studies/tokyo-bikes/polished-drafts.png";
import LofiPrototypes from "./../../img/case-studies/tokyo-bikes/lofi-prototypes.png";
import AffinityMap from "./../../img/case-studies/tokyo-bikes/affinity-map.png";
import Hifi from "./../../img/case-studies/tokyo-bikes/hifi-proto.png";
import StickerSheet from "./../../img/case-studies/tokyo-bikes/sticker-sheet.png"
import FinalMock from "./../../img/case-studies/tokyo-bikes/final-mock-1.png";


const TokyoBikes = () => {
    return (
        <Wrapper>
            <Hero>
                <PinkBlock><h1>Tokyo Bikes</h1></PinkBlock>
                
                <Details>
                    <p>Role: UX designer, UX researcher, graphic designer</p>
                    <p>Status: Complete</p>
                    <p>Duration: June 2021-July 2021</p>
                </Details>
            </Hero>

            <SlidesCta target="BLANK" href="https://docs.google.com/presentation/d/1oo_2zIuCuGhL02PfqsykkHZn0a3kpSDCHLozYLgFqHM/edit?usp=sharing" aria-label="View Tokyo Bikes Project Slides">
                View Slides
            </SlidesCta>

            <Content>
                <RichText>
                    <Heading>Project Vision</Heading>
                    <p>
                        Over the course of the pandemic, the concept of using design and technology in an attempt to substitute face-to-face human
                        interaction has been on many minds, mine included. After pulling a prompt to create an app for a bike shop in Tokyo for the
                        Google UX Design certification, I envisioned a mobile application that could substitute for an in-person experience
                        at a cycle shop, delivering familiarity and expertise to users from a distance.
                    </p>
                </RichText>

                <RichText>
                    <Heading>Challenges</Heading>

                    <PinkBlock>
                        <p>Increase accessibility of cycling knowledge</p>
                    </PinkBlock>

                    <PinkBlock>
                        <p>Lower the barriers to entry associated with cycling as a hobby</p>
                    </PinkBlock>

                    <PinkBlock>
                        <p>Create simple and easy-to-follow user flows for research and purchasing</p>
                    </PinkBlock>

                    <PinkBlock>
                        <p>Design a visually interesting UI that doesn't sacrifice usability</p>
                    </PinkBlock>
                    
                </RichText>

                <RichText>
                    <Heading>Getting to Know the User</Heading>
                    <p>
                        The only type of cycling I do is indoor and stationary, so my first goal was to get to know the type of user more likely to seek 
                        out a cycling app.
                    </p>

                    <p>
                        To do that, I conducted interviews with four cycling enthusiasts of varying levels, ages, and genders.
                        After transcribing their words, I was able to convert what I learned into individual empathy maps. Here is an example: 
                    </p>

                    <MobileImg alt="" src={AEmpathyMobile} />
                    <DesktopImg alt="" src={AEmpathy} />

                    <p>From this research, 3 consistent pain points regarding digital experiences for cyclists emerged:</p>

                    <PinkBlock>
                        <h3>Lack of Guidance from Experts</h3>
                        <p>
                            Users want guidance from experts on which parts and equipment are best, as well as an expert-backed knowledge base to learn 
                            more about cycling and maintenance
                        </p>
                    </PinkBlock>
                    
                    <PinkBlock>
                        <h3>Poor Product Organization</h3>
                        <p>
                            It can be very hard and time-consuming to sort through endless pages of poorly organized products to find what the user is 
                            looking for
                        </p>
                    </PinkBlock>
                    
                    <PinkBlock>
                        <h3>Overwhelmed by Options</h3>
                        <p>
                            Even if products are well organized, the sheer number of options per product type are enough to leave users confused and 
                            intimidated to make a purchase
                        </p>
                    </PinkBlock>
                </RichText>

                <RichText>
                    <Heading>Meet the Users</Heading>
                    
                    <p>
                        Because of the relatively small scope of user research, I synthesized my results into two user personas. In limiting the amount of 
                        personas, I was able to focus on a few concentrated areas of user need and be sure I fulfilled those needs well.
                    </p>

                    <MobileImg alt="" src={MobilePersona1} />
                    <MobileImg alt="" src={MobilePersona2} />
                    <DesktopImg alt="" src={Persona1} />
                    <DesktopImg alt="" src={Persona2} />
                </RichText>

                <RichText className="desktopOnly">
                    <Heading>Craft the Main User Journey</Heading>
                    <p>With main user needs in mind, I mapped out an initial user flow that started at product research and ended with purchase confirmation.</p>
                    <img alt="" src={UserFlow} />
                </RichText>

                <RichText>
                    <Heading>Paper Wires</Heading>
                    <p>Working iteratively through every screen on the app, I brainstormed five possible configurations of data...</p>

                    <img alt="" src={RoughWiresGif} />

                    <p>...then combined my favorite parts of each configuration into a polished draft.</p>

                    <img alt="" src={PolishedDrafts} />
                </RichText>

                <RichText>
                    <Heading>Digital Wires</Heading>

                    <p>
                        With initial page configuration and user flows sorted, it was time for user feedback. I digitized my polished drafts in Figma and built a low-fidelity prototype.
                    </p>

                    <img alt="" src={LofiPrototypes} />

                    <p>You can try out my low fidelity prototype <a href="https://www.figma.com/proto/7DZjYe1c27smB9w6BJPpdk/Tokyo-Bikes-Digital-Wires?node-id=5%3A20&scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A20" target="_BLANK">here</a>.</p>
                </RichText>

                <RichText>
                    <Heading>Usability Testing</Heading>
                    <p>I conducted two rounds of usability studies, both with five respondents of varying ages and genders. The first round focused on my low-fi prototype and consisted of a moderated usability study followed by a system usability scale.</p>

                    <img alt="" src={AffinityMap} />

                    <p>Once the first round of suggestions were implemented, I refined the mocks to include brand colors, visual assets, and type hierarchy...</p>

                    <img alt="" src={Hifi} />

                    <p>...and got even more feedback! Check out my hi-fi prototype <a href="https://www.figma.com/proto/7DZjYe1c27smB9w6BJPpdk/Tokyo-Bikes-Digital-Wires?node-id=127%3A3&scaling=scale-down&page-id=127%3A2&starting-point-node-id=127%3A3&show-proto-sidebar=1" target="_BLANK">here</a>.</p>

                    
                    <PinkBlock>
                        <h3>Round 1 Feedback</h3>

                        <p>
                            1. Users feel more secure with a pre-submission purchase review
                        </p>

                        <p>
                            2. Only some users find the expert chat function trustworthy
                        </p>

                        <p>
                            3. Multiple modes of communication will keep the app accessible to a larger user base with varied preferences
                        </p>
                    </PinkBlock>

                    <PinkBlock>
                        <h3>Round 2 Feedback</h3>

                        <p>
                            1. The sticky live chat button gets in the way of other app functions
                        </p>

                        <p>
                            2. Many users will not use the nav menu and as such, back buttons should always be available 
                        </p>
                    </PinkBlock>
                    
                    <p>With two rounds of user-backed refinement complete, the app was working as intended!</p>
                </RichText>

                <RichText>
                    <Heading>Visual Design</Heading>

                    <img alt="" src={StickerSheet} />
                    <img alt="" src={FinalMock} />
                </RichText>

                <RichText>
                    <Heading>Conclusion</Heading>

                    <p>
                        While this particular applicatiojn will not be moving into a production phase, usability study participants confirmed that 
                        if built and launched, it had the potential to improve accessibility of cycling knowledge and help 
                        combat many barriers to entry into the cycling community for beginner hobbyists.
                    </p>

                    <p>
                        I hope to continue to focus on applications that improve levels of accessiliblity in the future - whether it 
                        be at the level of the technology itself through ADA compliance or accessibility of an activity like cycling to underrepresented 
                        populations.
                    </p>

                    <p>
                        Challenging historical barriers to entry is one of the most meaningful things we can do in the tech and design
                        space and I look forward to doing so as much as I can moving forward.
                    </p>
                </RichText>
            </Content>
        </Wrapper>
    );
}

export default TokyoBikes;

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
        font-size: 10rem;
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
    background-color: #F7CF07;

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