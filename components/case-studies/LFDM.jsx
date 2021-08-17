import React from 'react';
import styled from 'styled-components';
//Assets
import Persona1 from "./../../img/case-studies/lfdm/user-persona-1.png";
import MobilePersona1 from "./../../img/case-studies/lfdm/persona-mobile-1.png";
import MobilePersona2 from "./../../img/case-studies/lfdm/persona-mobile-2.png";
import Persona2 from "./../../img/case-studies/lfdm/user-persona-2.png";
import RoughWiresGif from "./../../img/case-studies/lfdm/rough-wires.gif";
import PolishedDraft from "./../../img/case-studies/lfdm/polished-draft.png";
import LofiPrototypes from "./../../img/case-studies/lfdm/lofi-prototypes.png";
import AffinityMap from "./../../img/case-studies/lfdm/affinity-map.png";
import Logo from "./../../img/case-studies/lfdm/shop-sign.png";
import Cart from "./../../img/case-studies/lfdm/cart-icons.png";
import Hifi from "./../../img/case-studies/lfdm/final-desktop-screens.png";
import Hifi2 from "./../../img/case-studies/lfdm/laptop-screens.png";


const LesFleursDeMars = () => {
    return (
        <Wrapper>
            <Hero>
                <PinkBlock><h1>Les Fleurs de Mars</h1></PinkBlock>
                
                <Details>
                    <p>Role: UX designer, UX researcher, graphic designer</p>
                    <p>Status: Complete</p>
                    <p>Duration: August 2021</p>
                </Details>
            </Hero>

            <SlidesCta target="BLANK" href="https://docs.google.com/presentation/d/16KpAOPEIVXkTFtuAvgK6F5HAxPLpvjGipGJYLhUbyGM/edit?usp=sharing" aria-label="View LFDM Project Slides">
                View Slides
            </SlidesCta> 

            <Content>
                <RichText>
                    <Heading>Project Vision</Heading>
                    <p>
                        For the second prompt of the Google UX Design Certification, I was tasked with designing a shopping flow
                        specifically for flower arrangements. I'm not someone who orders many flowers, but my impression has always
                        been that floral arrangements are incredibly traditional in their styling, and that a user typically sacrifices
                        aesthetics for economic accessibility or the other way around. I wanted to challenge the notion that
                        contemporary floral arrangement cannot be accessible to all and dispel typical frustrations associated with 
                        ordering floral arrangements on a budget.
                    </p>
                </RichText>

                <RichText>
                    <Heading>Challenges</Heading>

                    <PinkBlock>
                        <p>Design for economic accessibilty without sacrificing quality of product</p>
                    </PinkBlock>

                    <PinkBlock>
                        <p>Explore options for last minute gifting needs</p>
                    </PinkBlock>

                    <PinkBlock>
                        <p>Shake up the aesthetics we associate with floral arrangement businesses</p>
                    </PinkBlock>
                    
                </RichText>

                <RichText>
                    <Heading>Getting to Know the User</Heading>

                    <p>
                        To fill in my lack of insight in the world of floral arrangements, I interviewed four users
                        of varying ages and genders with recent experience ordering floral arrangements online.  
                    </p>

                    <p>These conversations illuminated a few clear areas for improvement in the current landscape:</p>

                    <PinkBlock>
                        <h3>Feeling of Diminishing Options</h3>
                        <p>
                            In many order flows, a user is initially presented with all product options. As they define their budgetary limitations 
                            and when/where the order needs to be delivered, these options reduce dramatically, leaving a feeling of disappointment.

                        </p>
                    </PinkBlock>
                    
                    <PinkBlock>
                        <h3>Product Categorization Feels Arbitrary</h3>
                        <p>
                            Aside from card choice, what makes a flower arrangement sympathy themed or congratulatory? Most flowers are generally
                            agnostic of occasion, so why categorize them as occasion dependent? This is something the user would often like to 
                            decide for themself.
                        </p>
                    </PinkBlock>
                    
                    <PinkBlock>
                        <h3>Access Limited by Turnaround Time</h3>
                        <p>
                            We can't always anticipate when we will need to send a gift, so why is it that so few platforms have explored
                            alternative modes of gifting for last minute delivery?
                        </p>
                    </PinkBlock>
                </RichText>

                <RichText>
                    <Heading>Meet the Users</Heading>
                    
                    <p>
                        I synthesized the results of my research into two user personas. In limiting the amount of personas, I was able to focus on a few 
                        concentrated areas of user need and be sure I fulfilled those needs well.
                    </p>

                    <MobileImg alt="User persona for Esther M - mobile version" src={MobilePersona1} />
                    <MobileImg alt="User persona for Jean F - mobile version" src={MobilePersona2} />
                    <DesktopImg alt="User persona for Esther M - desktop version" src={Persona1} />
                    <DesktopImg alt="User persona for Jean F - desktop version" src={Persona2} />
                </RichText>

                <RichText>
                    <Heading>Paper Wires</Heading>
                    <p>
                        Once I established the basic information architecture for my web application, I moved on to drafting wires. For each screen of the desktop experience, 
                        I listed the elements that would need to be present and then began the process of iterating through possible configurations of these elements.
                    </p>

                    <img alt="Speedpaint of rough wires for product single design" src={RoughWiresGif} />

                    <p>
                        I then combined my favorite parts of each configuration into a polished draft. Here's an example for the 
                        product display page, above the fold.
                    </p>

                    <img alt="Polished wireframe for the product single page" src={PolishedDraft} />

                    <p>I was clearly drinking a lot of coffee this day because my lines are incredibly wiggly.</p>
                </RichText>

                <RichText>
                    <Heading>Digital Wires</Heading>

                    <p>
                        Usually I would approach digital wireframes in a mobile-first manner. However, since my last project focused on 
                        mobile design, I started with desktop screens and made visual adjustments from there to mock up
                        mobile configurations of each screen.
                    </p>

                    <img alt="A mockup of four low fidelity desktop wireframe screens" src={LofiPrototypes} />

                    <p>You can try out my low fidelity prototype <a href="https://xd.adobe.com/view/f746f5ea-f154-4b25-acf4-3d8c9ff2c36d-a215/" target="_BLANK">here (desktop)</a> and <a href="https://xd.adobe.com/view/e1407f1b-4738-4183-83fa-47edd35612de-b413/" target="_BLANK">here (mobile)</a>.</p>
                </RichText>

                <RichText>
                    <Heading>Usability Testing</Heading>
                    <p>
                        For this project, I conducted a single-round usability study which focused on improving user experience on both desktop and mobile. I spoke with four respondents of varying ages and genders in a moderated usability test,
                        asking them to walk me through choosing and purchasing a flower arrangement. By conducting this study in the low fidelity phase of prototyping, respondents were able to better focus on structure and flow without being
                        distracted by colors, type, or iconography.
                    </p>

                    <img alt="Digital affinity map for usability testing" src={AffinityMap} />

                    <p>
                        Once I implemented the suggestions gleaned from my usability study, I felt confident in the foundation of my desktop and mobile experiences and moved on to making UI decisions.
                    </p>
                </RichText>

                <RichText>
                    <Heading>Visual Design</Heading>

                    <p>
                        I knew I wanted the site to visually and tonally reflect the products I envisioned on it: contemporary and left-of-center, but not self-important or snobby. During the research phase of my work,
                        I had conducted a competitive audit of some of the main players in the online floral arrangements market. Aesthetically speaking, I noticed a pattern of identities that were either cold,
                        stiff, and modern or messy and unattractive in an attempt to look fun. These two polar extremes defined the baseline of what I would like to avoid.
                    </p>

                    <p>
                        While honoring the clean and minimal screen structures I built in the low fidelity stage, I offset any clinical vibes that sparse page structures at times can generate
                        by choosing a fun, fluid typeface for headlines and a pastel mesh gradient to breathe life into heroes and other content containers.
                    </p>

                    <img alt="Mockup of four high fidelity screens of desktop app" src={Hifi} />

                    <p>
                        Additionally, I designed a simple and friendly graphic logomark and custom cart icons. Where a wordmark can feel traditional, lending a cute mascot to this brand through its logo inspires
                        a feeling of whimsy. 
                    </p>

                    <img alt="Mockup of LFDM logo on a shopfront sign" src={Logo} />

                    <p>Similarly, the cart begins as an empty vase and is filled with a single blooming flower when the user adds a product to their cart. This aberration from traditional
                        cart iconography invites the user to have fun and enjoy their time.
                    </p>

                    <img alt="Enlarged copies of custom cart icons in empty and full variants (empty vase, vase with flower)" src={Cart} />

                    <p>Check out my hi-fi prototype <a href="https://xd.adobe.com/view/e99ac259-83d4-4931-958a-e829eac24d55-bcc9/" target="_BLANK">here (desktop)</a> and <a href="https://xd.adobe.com/view/84e0afe6-3f49-412b-ba45-b5a09a4258f9-d1b3/" target="_BLANK">here (mobile)</a>.</p>

                    <img alt="Mocks of eight desktop screens of app" src={Hifi2} />

                </RichText>

                <RichText>
                    <Heading>Conclusion</Heading>

                    <p>
                        There are a few specific features that I would like to bring attention to, as they are perhaps easily overlooked in my mocks but play a significant role in 
                        resolving some of the main user challenges outlined at the beginning of this case study.
                    </p>

                    <PinkBlock>
                        <h3>Equitable Design for Diverse Budgets</h3>
                        <p>
                            Unlike most floral arrangement sites, this one establishes user budget as a required query parameter. Not only 
                            is attention paid to offering a catalog of products ranging in price from under $25 to over $200, but a user will
                            only see products specific to the budget they define. This will reduce a feeling of longing for out-of-budget gifts
                            that users may experience when forced to refine the price range once already on the product result grid.
                        </p>
                    </PinkBlock>

                    <PinkBlock>
                        <h3>Feeling of Diminishing Options</h3>
                        <p>
                            In the flow where users choose their desired delivery date, zip code, and budgetary constraints, no results are displayed
                            until all query parameters have been collected. This way, it doesn't feel like they have 75 options initially and only 12
                            in their price range for the date and location requested, but rather that a list of results are built as they give the tool
                            more data to work with.
                        </p>
                    </PinkBlock>
                    
                    <PinkBlock>
                        <h3>Product Categorization Feels Arbitrary</h3>
                        <p>
                            The only two filters on the product grid page are color and type. A user can look only at flowers, elect to shop
                            bath and body options, or filter for only blue gifts. However, they are given the agency to decide which product feels right
                            for their unique needs without predetermined categorization.
                        </p>
                    </PinkBlock>
                    
                    <PinkBlock>
                        <h3>Access Limited by Turnaround Time</h3>
                        <p>
                            I love the idea of instant flower delivery, but how could such a thing be achieved? I was inspired heavily 
                            by  <a target="_BLANK" href="https://infiniteobjects.com/">infinite objects</a> to riff off a recent surge in NFT popularity
                            but remove the environmentally unfriendly aspect of exclusivity. What if you were able to instantly send a client or loved one a
                            digital model of a flower arrangement which they could interact with on their computer, tablet, or mobile phone? Then, after
                            the intial reception of the gift, receive a physical version of the model cast in a lucite frame some days later? Tight timelines are no longer a problem
                            and a whole new definition of preserved flowers is introduced to the flower arrangement space.
                        </p>
                    </PinkBlock>

                    <p>
                        In closing, while there are no plans to move into the build phase at this time, I think there is no lack of potential in the ideas presented. Though 
                        they can be difficult to ideate around at first, very traditional market areas such as flower arrangement present creatives with some of
                        the most unique opportunities to rejuvenate age-old concepts with modern technologies and ideas.
                    </p>

                    <p>
                        Upending traditional ideas regarding access to artisan goods and what qualifies as an appropriate occasion to send and receive them is one of the 
                        many ways we can use design and development as a tool to change greater societal conversations. In other words, go send your best friend a rose :)
                    </p>
                </RichText>
            </Content>
        </Wrapper>
    );
}

export default LesFleursDeMars;

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
    background-color: #e1ff64;

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
    background-color: #e1ff64;
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